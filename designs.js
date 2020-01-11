// Select color input
var pickAColor = document.getElementById('colorPicker');

// Select size input
var gridHeight = document.getElementById('inputHeight');
var gridWidth = document.getElementById('inputWidth');
var gridSize = document.getElementById('sizePicker');
var designCanvas = document.getElementById('pixelCanvas');

// When size is submitted by the user, call makeGrid()
document.addEventListener('submit', function() {
    event.preventDefault();
    var width = gridWidth.value;
    var height = gridHeight.value;
    var color = pickAColor.value;    
    makeGrid(height, width);
});
// Make table
function makeGrid(height, width) {
    pixelCanvas.innerHTML = "";
    for (var w = 1; w <= width; w++) {
        let row = document.createElement('tr');
        for(var h = 1; h <= height; h++){
            let col = document.createElement('td');
            row.appendChild(col);
        }
        pixelCanvas.appendChild(row);
    }
}
// Set color for selected cell
