// INITIAL INTERFACE CREATION PART

// Invent new div HTML element
const titleDiv = document.createElement('div');

// Configure its content.
titleDiv.innerHTML = '<h1>Cursor position on the page:</h1>';

// Append it to the bottom of HTML body element
document.body.append(titleDiv);

const cursorPositionDiv = document.createElement('div');
cursorPositionDiv.innerText = 'x: 0.00, y: 0.00';
document.body.append(cursorPositionDiv);

// INTERACTIVE PART
// Function to be executed on every mouse move over the web page window.
window.onmousemove = function (event) {
    // Fill in `cursorPositionDiv` with content of the current mouse coordinates.
    cursorPositionDiv.innerText = `x: ${event.clientX}, y: ${event.clientY}`;
};
