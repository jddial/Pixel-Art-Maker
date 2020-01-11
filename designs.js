/**
 * Input variables for cell color,
 * grid height, grid width, submit
 * function and table
 */
var pickAColor = document.getElementById('colorPicker');
var gridHeight = document.getElementById('inputHeight');
var gridWidth = document.getElementById('inputWidth');
var gridSize = document.getElementById('sizePicker');
var designCanvas = document.getElementById('pixelCanvas');

/**
 * Asks users to create a grid
 */
document.addEventListener('submit', function() {
    event.preventDefault();
    var width = gridWidth.value;
    var height = gridHeight.value;
    makeGrid(height, width);
});

/**
 * A grid should appear when
 * users submit width and height
 * users can color cells different
 * colors and clear cell by double 
 * clicking
 */
function makeGrid(height, width) {
    designCanvas.innerHTML = "";
    for (var h = 1; h <= height; h++) {
        let row = document.createElement('tr');
        for(var w = 1; w <= width; w++){
            let col = document.createElement('td');
            row.appendChild(col);
            col.addEventListener('click', function(event) {
                col.style.backgroundColor = pickAColor.value; })
            col.addEventListener('dblclick', function(event) {
                col.style.backgroundColor = 'white';
            })
        }
        designCanvas.appendChild(row);
    }
}