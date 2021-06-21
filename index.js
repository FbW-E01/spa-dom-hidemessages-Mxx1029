const container = document.querySelector("#container");

function hideOnClick(e) {
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        if (e.target === button) {
            // all options w/ help from Joel, didn't remember element.parentElement as a way to target the parent element...
            button.parentElement.remove();
            // OR:
            // e.target.parentElement.remove();
            // OR:
            // button.parentElement.style.display = "none";
        };
        // OR:
        // if (e.target.classList.contains("remove-button")) {
        //     e.target.parentElement.remove();
        // };
    });
};

container.addEventListener("click", hideOnClick); 