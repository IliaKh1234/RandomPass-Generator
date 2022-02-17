const chars = [
    "A",
    "a",
    "B",
    "b",
    "C",
    "c",
    "D",
    "d",
    "E",
    "e",
    "F",
    "f",
    "G",
    "g",
    "H",
    "h",
    "I",
    "i",
    "J",
    "j",
    "K",
    "k",
    "L",
    "l",
    "M",
    "m",
    "N",
    "n",
    "O",
    "o",
    "P",
    "p",
    "Q",
    "q",
    "R",
    "r",
    "S",
    "s",
    "T",
    "t",
    "U",
    "u",
    "V",
    "v",
    "W",
    "w",
    "X",
    "x",
    "Y",
    "y",
    "Z",
    "z",
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "_",
    "-",
    "+",
    "=",
    "|",
];
let pass1 = document.getElementById("pass1")
let pass2 = document.getElementById("pass2")
let pass3 = document.getElementById("pass3")
let pass4 = document.getElementById("pass4")
const generateBtn = document.getElementById("generate-btn")
const lengthInput = document.getElementById("inputPass")
let container = document.querySelector(".container")
generateBtn.addEventListener("click", function(){
    pass1.textContent = "";
    pass2.textContent = "";
    pass3.textContent = "";
    pass4.textContent = "";
    for(let i = 1; i <= lengthInput.value; i++){
        const random1 =  chars[Math.floor(Math.random() * chars.length)]
        const random2 =  chars[Math.floor(Math.random() * chars.length)]
        const random3 =  chars[Math.floor(Math.random() * chars.length)]
        const random4 =  chars[Math.floor(Math.random() * chars.length)]


       pass1.textContent += random1; 
       pass2.textContent += random2;
       pass3.textContent += random3;
       pass4.textContent += random4;
       
    }
    if(lengthInput.value === ""){
        alert("Type password length");
        pass1.textContent = "...";
        pass2.textContent = "...";
        pass3.textContent = "...";
        pass4.textContent = "...";
    }
})

function copy(pass){
    navigator.clipboard.writeText(pass.textContent);
    if(pass.textContent !== "..."){
        alert("Text copied!")
    }
}

pass1.addEventListener('click', function(){
    copy(pass1)
});
pass2.addEventListener('click', function(){
    copy(pass2)
});
pass3.addEventListener('click', function(){
    copy(pass3)
});
pass4.addEventListener('click', function(){
    copy(pass4)
});