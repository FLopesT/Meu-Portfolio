let btnOption = document.querySelectorAll(".btnOption");
let matrix = document.getElementsByClassName("matrix");
let backBtn = document.querySelectorAll(".back");
let container = document.getElementById("container");
let projectSection = document.getElementById("projectSection");
let projectContainer = document.getElementById("projectContainer");
let matrixNumber;

window.onload = ()=>{
    alert("Este site não é responsivo em telas menores que 840 pixels no momento!")    
};

backBtn.forEach((btn) => {
    btn.addEventListener("click", closePage);
})

applyBtn(true);

function applyBtn(i) {
    if (i) {
        btnOption.forEach((btn) => {
            btn.addEventListener("click", startMatrix);
        });
    } else {
        btnOption.forEach((btn) => {
            btn.removeEventListener("click", startMatrix);
        });
    }
}

function startMatrix() {

    applyBtn(false);
    if (event.currentTarget.id == "conhecimentos") {
        matrixNumber = 0;
    } else {
        matrixNumber = 1;
    }
    matrix[matrixNumber].style = "display: block; animation: grow 2s forwards;";
    let p = document.createElement("p");
    p.classList.add("ppc");
    matrix[matrixNumber].appendChild(p);
    setTimeout(() => {
        matrixTyping(cod, p);
    }, 700);
}

function showContent() {
    document.getElementsByClassName("back")[matrixNumber].style.display = "block";
    if (matrixNumber == 0) {
        document.getElementById("description").style.display = "flex";
        document.getElementById("tecCardContainer").style.display = "flex";
    } else {
        projectContainer.style.display = "block"
        // showTransition("left");
    }
}

function closePage() {

    setTimeout(() => {
        document.getElementsByClassName("back")[matrixNumber].style.display = "";
        flashAnimation(matrix[matrixNumber]);
        if (matrixNumber == 0) {
            document.getElementById("description").style = "";
            document.getElementById("tecCardContainer").style = "";
        } else {
            animationOn = false;
            projectContainer.style.display = "";
            nextProject(false);
        };
        matrix[matrixNumber].style.display = "block";
    }, 150)
    setTimeout(() => {
        matrix[matrixNumber].style.animation = "grow2 1s"
    }, 300)
    setTimeout(() => {
        matrix[matrixNumber].style = ""
        projectSection.style = ""
        applyBtn(true);
    }, 1300)
}

let rightBtn = document.getElementById("right");
let leftBtn = document.getElementById("left");
let btnTime = "right";

rightBtn.addEventListener("click", nextProject);

let slideDiv = document.getElementById("slideDiv");

function nextProject(e) {

    if (!e) {
        leftBtn.removeEventListener("click", nextProject);
        rightBtn.addEventListener("click", nextProject);
        leftBtn.style.display = "none";
        rightBtn.style.display = "block";
        btnTime = "right"
        return slideDiv.style = "";
    } else {                                     
        if (btnTime == "right") {
            slideDiv.style.animation = "slide 1s forwards"
            rightBtn.removeEventListener("click", nextProject);
            leftBtn.addEventListener("click", nextProject);
            rightBtn.style.display = "none";
            leftBtn.style.display = "block";
            btnTime = "left"
        } else {
            leftBtn.removeEventListener("click", nextProject);
            rightBtn.addEventListener("click", nextProject);
            leftBtn.style.display = "none";
            rightBtn.style.display = "block";
            btnTime = "right"
            slideDiv.style.animation = "slide2 1s forwards"
        }
    }

}


