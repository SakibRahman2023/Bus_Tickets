function hideElementById(elementId) {
    const element = document.getElementById(elementId)
    element.classList.add('hidden')

}

function showElementById(elementId) {
    const element = document.getElementById(elementId)
    element.classList.remove('hidden')

}


function buy_ticket() {
    hideElementById('page_1');
    showElementById('page_2');
}

function next () {
    hideElementById('page_2');
    showElementById('page_3');
}
function con() {
    hideElementById('page_3');
    showElementById('page_2');
}
