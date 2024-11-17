const socket = io();
const markdownInput = document.getElementById("markdown-input");
const preview = document.getElementById("preview");

markdownInput.addEventListener("input", () => {
  socket.emit("markdown", markdownInput.value);
});

socket.on("preview", (html) => {
  preview.innerHTML = html;
});
