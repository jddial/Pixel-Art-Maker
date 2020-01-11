// Select color input
const pickAColor = document.getElementById('colorPicker');

// Select size input
const gridHeight = document.getElementById('inputHeight');
const gridWidth = document.getElementById('inputWidth');
const gridSize = document.getElementById('sizePicker');
const designCanvas = document.getElementById('pixelCanvas');

// When size is submitted by the user, call makeGrid()
document.addEventListener('submit', function() {
    event.preventDefault();
    const width = gridWidth.value;
    const height = gridHeight.value;
    pixelCanvas.innerHTML = "";
    makeGrid(height, width);
});

function makeGrid(height, width) {
    for (var w = 1; w <= width; w++) {
        let row = document.createElement('tr');
        for (var h = 1; h <= height; h++) {
            let cell = document.createElement('td');
            row.appendChild(cell);
            cell.addEventListener('ondrag', function(events) {
              cell.style.backgroundColor = color.value;
            })
        };
        pixelCanvas.appendChild(row);
    };
};