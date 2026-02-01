const editor = document.getElementById("editor");

editor.addEventListener("input", () => {
  document.getElementById("status").innerText =
    "Document updated in real time";
});
