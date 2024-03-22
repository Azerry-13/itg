let checkbox = document.getElementById("checkbox");
let checkbox_img = document.getElementById("checkbox-img");


checkbox.addEventListener("click", () => {
    checkbox.classList.toggle("clicked");
    checkbox_img.classList.toggle("clicked-img");
});

let inputs = document.getElementsByTagName("input");
let send_button = document.getElementsByClassName("send-button")[0];

function reload() {
    location.reload();
}

function reloadPage(event) {
    event.preventDefault();

    let emptyInputs = [];
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value === "") {
            emptyInputs.push(inputs[i]);
        }
    }

    if ((emptyInputs.length > 0) || (!checkbox.classList.contains("clicked"))) {
        emptyInputs.forEach(input => {
            input.style.outline = "1px solid #E60000";
            input.classList.add("red");
        });
        let errorMessage = document.getElementsByClassName("error-message")[0];
        errorMessage.textContent = "Please fill the missing gaps and check the checkbox";
        errorMessage.style.margin = "20px 0";
    } else {
        reload();
    }
}

send_button.addEventListener("click", reloadPage);