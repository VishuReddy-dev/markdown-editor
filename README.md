

---

# Real-Time Markdown Editor

A real-time Markdown editor built with **Node.js**, **Socket.IO**, and **Express.js**. This application allows users to write Markdown syntax and preview the rendered HTML in real-time.

## Features

- Live Markdown to HTML preview.
- Collaborative editing with real-time updates using Socket.IO.
- Sanitized HTML output for security.
- Responsive design for seamless experience on all devices.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/markdown-editor.git
   cd markdown-editor
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   node server.js
   ```

4. Open the application in your browser:
   ```
   http://localhost:3000
   ```

## Project Structure

```plaintext
markdown-editor/
├── public/             # Static files (CSS, JS, client-side scripts)
│   ├── styles.css      # Styles for the editor and previewer
│   └── client.js       # Client-side Socket.IO logic
├── views/              # HTML templates (EJS)
│   └── index.ejs       # Main UI template
├── .gitignore          # Ignored files/directories (e.g., node_modules)
├── server.js           # Node.js server
├── package.json        # Project metadata and dependencies
└── README.md           # Project documentation
```

## Technologies Used

- **Node.js**: Backend server.
- **Express.js**: Web framework for routing and serving content.
- **Socket.IO**: Real-time communication between clients and server.
- **marked**: Markdown parser to convert Markdown to HTML.
- **sanitize-html**: Ensures HTML output is safe and secure.

## Usage

1. Open the Markdown editor in your browser.
2. Type Markdown syntax in the editor panel.
3. See the rendered HTML output in real-time on the preview panel.

## Example

- **Markdown Input**:
  ```markdown
  # Welcome to the Markdown Editor
  - Real-time preview
  - Secure HTML rendering
  ```
- **HTML Output**:
  ```html
  <h1>Welcome to the Markdown Editor</h1>
  <ul>
    <li>Real-time preview</li>
    <li>Secure HTML rendering</li>
  </ul>
  ```

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- [marked](https://github.com/markedjs/marked)
- [sanitize-html](https://github.com/apostrophecms/sanitize-html)
- [Socket.IO](https://socket.io/)

---
