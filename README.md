# :rotating_light: WIP :rotating_light:
# docx-templating-nodejs
A node application capable of processing Microsoft Word document templates using the docxtemplater library. It can insert images and HTML formatted text into the Word template and output the resulting document as either a .docx or an identical PDF.
## Scope
### Word Document Processing
- Accept a .docx file as input.
- Utilize docxtemplater to populate the provided template with dynamic content.
### Image Insertion
- Offer the ability to insert images into the provided Word document template.
- Ability to Adjust the size of these images within the document.
### HTML Content Insertion
- Facilitate the insertion of formatted text from HTML sources into the Word document.
- Guarantee the application's ability to accurately interpret basic HTML formatting tags (e.g., bold, italics, underline).
### Output Generation
- Provide options to output the populated content as either a .docx or a PDF.
- Ensure the resulting PDF maintains an appearance identical to its .docx counterpart.
### Technical Requirements
- Backend Framework: Node.js
### Key Libraries/Modules:
- docxtemplater: For Word document templating and content insertion.
- Necessary plugins or modules that support image and HTML formatted text insertion with docxtemplater.
- A reliable library/module for .docx to .pdf conversion that ensures consistent formatting. 