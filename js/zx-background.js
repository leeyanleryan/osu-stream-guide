const field = document.getElementById("zx-field");
const rowCount = 60;
const repetitionsPerRow = 1000;
const fragment = document.createDocumentFragment();
for (let i = 0; i < rowCount; i++) {
    const row = document.createElement("div");
    row.className = "zx-row";
    row.textContent = "zx".repeat(repetitionsPerRow);
    fragment.appendChild(row);
}
field.appendChild(fragment);