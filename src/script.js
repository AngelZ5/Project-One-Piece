// Select all buttons and characters
const buttons = document.querySelectorAll(".button");
const characters = document.querySelectorAll(".character");

// Add event listeners to each button
buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        deselectButton();
        deselectCharacter();

        // Select the clicked button and the corresponding character
        button.classList.add("selected");
        characters[index].classList.add("selected");
    });
});

// Function to remove the 'selected' class from the currently selected character
function deselectCharacter() {
    const selectedCharacter = document.querySelector(".character.selected");
    selectedCharacter.classList.remove("selected");
}

// Function to remove the 'selected' class from the currently selected button
function deselectButton() {
    const selectedButton = document.querySelector(".button.selected");
    selectedButton.classList.remove("selected");
}
