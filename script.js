var inputField = document.getElementById("input")

inputField.innerHTML = localStorage.getItem("username")

function getInput() {
    var input = document.getElementById("input").value;
    localStorage.setItem("username", input);
    console.log(input);
}

