const variant = 1;
let clickedOnFirstItem = false;
let clickedOnSecondItem = false;

window.onload = function () {
    document.body.children[variant % 10 + 1].addEventListener("click", () => {
        const backgroundColor = clickedOnFirstItem ? 'orange' : 'red'
        const textColor = clickedOnFirstItem ? 'grey' : 'white'

        document.getElementById("u-list").style.background = backgroundColor;
        document.getElementById("u-list").style.color = textColor;
        clickedOnFirstItem = true;
    })

    document.getElementById("ordered_list").children[variant % 10 + 1 + 1].addEventListener("click", () => {
        const backgroundColor = clickedOnSecondItem ? 'purple' : 'teal'
        const textColor = clickedOnSecondItem ? 'azure' : 'cyan'

        document.querySelector("#u-list").style.background = backgroundColor;
        document.querySelector("#u-list").style.color = textColor;
        clickedOnSecondItem = true;
    });
}

function add() {
    document.getElementById("image").style.display = 'initial';
}

function increaseSize() {
    document.getElementById("image").style.height = document.getElementById("image").offsetHeight + 50 + "px";
}

function reduceSize() {
    document.getElementById("image").style.height = document.getElementById("image").offsetHeight - 50 + 'px';
}

function remove() {
    document.getElementById("image").style.display = 'none';
}
