const fs = require("fs");
const path = require("path");

const Docxtemplater = require("docxtemplater");
const PizZip = require("pizzip"); // Load PizZip library to load the docx/pptx/xlsx file in memory

// Load the docx file as binary content
const content = fs.readFileSync(
    path.resolve(__dirname, "input.docx"),
    "binary"
);

// Unzip the content of the file
const zip = new PizZip(content);

// Parse the template.
// This function throws an error if the template is invalid,
// for example, if the template is "Hello {user" (missing closing tag)
const doc = new Docxtemplater(zip, {
    paragraphLoop: true,
    linebreaks: true,
});

// Render the document : Replaces :
// - {first_name} with John
// - {last_name} with Doe,
// ...
doc.render({
    first_name: "John",
    last_name: "Doe",
    phone: "+33666666",
    description: "The Acme Product",
});

// Get the document as a zip (docx are zipped files)
// and generate it as a Node.js buffer
const buf = doc.getZip().generate({
    type: "nodebuffer",
    // Compression: DEFLATE adds a compression step.
    // For a 50MB document, expect 500ms additional CPU time.
    compression: "DEFLATE",
});

// Write the Node.js Buffer to a file
fs.writeFileSync(path.resolve(__dirname, "output.docx"), buf);
// Instead of writing it to a file, you could also
// let the user download it, store it in a database,
// on AWS S3, ...
