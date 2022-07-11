let equalPressed = 0;
const nameElemet = document.querySelector(".name > h1");
let buttons = document.querySelectorAll(".input-button");
let input = document.querySelector("#input");
let equal = document.querySelector(".equal-btn");
let clear = document.querySelector(".clear");
let erase = document.querySelector(".delete-btn");
let percent = document.querySelector(".percent");

input.value = "   SOBRAN   CSE    AI"
setTimeout(() => {
    input.value = "";
    nameElemet.innerText = "SOBRAN CSE AI"
}, 3000);

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (equalPressed == 1) {
            input.value = "";
            equalPressed = 0;
        }
        input.value += button.value;
    });
});

percent.addEventListener("click", () => {
    input.value += "*(1/100)*";

})

equal.addEventListener("click", () => {
    equalPressed = 1;
    let inp_val = input.value;
    try {
        let solution = eval(inp_val);
        if (Number.isInteger(solution)) {
            input.value = solution;
        }
        else {
            input.value = solution.toFixed(5);
        }
    } catch (err) {
        input.value = "Invalid Input";
    }
});
clear.addEventListener("click", () => {
    input.value = "";
});
erase.addEventListener("click", () => {
    input.value = input.value.substr(0, input.value.length - 1);
});