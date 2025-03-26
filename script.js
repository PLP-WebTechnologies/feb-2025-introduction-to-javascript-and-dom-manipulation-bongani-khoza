// script.js

// Get elements from the HTML document
const clickMeButton = document.getElementById('click-me');
const dynamicContentDiv = document.getElementById('dynamic-content');

// Function to update the dynamic content
function updateDynamicContent() {
    // Create a new paragraph element
    const newParagraph = document.createElement('p');

    // Add text to the new paragraph
    newParagraph.textContent = 'You clicked the button!';

    // Append the new paragraph to the dynamic content div
    dynamicContentDiv.appendChild(newParagraph);
}

// Function to handle button clicks
function handleClick() {
    updateDynamicContent();
}

// Attach an event listener to the click me button
clickMeButton.addEventListener('click', handleClick);
