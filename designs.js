// Select color input
const color = document.getElementById('colorPicker');

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
    for (w = 0; w <= width; ++w) {
        let row = document.createElement('tr');
        for (h = 0; h <= height; ++h) {
            let cell = document.createElement('td');
            row.appendChild('cell');
           cell.addEventListener('ondrag', function(events) {
              cell.style.backgroundColor = colorPicker.value;
            })
        };
        pixelCanvas.appendChild('row');
    };
};
