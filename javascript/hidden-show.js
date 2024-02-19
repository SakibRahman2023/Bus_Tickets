function hideElementById(elementId) {
    const element = document.getElementById(elementId)
    element.classList.add('hidden')

}

function showElementById(elementId) {
    const element = document.getElementById(elementId)
    element.classList.remove('hidden')

}



function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        hideElementById('page_3');
    } else {
        console.error("Element with ID '" + elementId + "' not found.");
    }
}