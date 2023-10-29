
let btnOption = document.querySelectorAll(".btnOption");
let matrix = document.getElementsByClassName("matrix");
let backBtn = document.querySelectorAll(".back");
let container = document.getElementById("container");
let projectSection = document.getElementById("projectSection");
let projectContainer = document.getElementById("projectContainer");
let matrixNumber;

backBtn.forEach((btn) => {
  btn.addEventListener("click", closePage);
});

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
    document.getElementById("sapiencia").style.display = "flex";
  } else {
    projectContainer.style.display = "block";
  }
}

function closePage() {
  setTimeout(() => {
    document.getElementsByClassName("back")[matrixNumber].style.display = "";
    flashAnimation(matrix[matrixNumber]);
    if (matrixNumber == 0) {
      //
      document.getElementById("sapiencia").style.display = "";
      //
    } else {
      animationOn = false;
      projectContainer.style.display = "";
      resetarProjeto();
    }
    matrix[matrixNumber].style.display = "block";
  }, 150);
  setTimeout(() => {
    matrix[matrixNumber].style.animation = "grow2 1s";
  }, 300);
  setTimeout(() => {
    matrix[matrixNumber].style = "";
    projectSection.style = "";
    applyBtn(true);
  }, 1300);
}

let rightBtn = document.getElementById("right");
let leftBtn = document.getElementById("left");
let pjtPage = 0
let slideDiv = document.getElementById("slideDiv");

function resetarProjeto() {
  leftBtn.style.display = "none";
  rightBtn.style.display = "block";
  pjtPage = 0;
  return (slideDiv.style = "");
}

function nextPage() {
  if (pjtPage == 0) {
    pjtPage++;
    leftBtn.style.display = "block"; 
    return slideDiv.style.animation = "slide 1s forwards";    
  }
  if (pjtPage == 1) {
    pjtPage++;
    rightBtn.style.display = "none";
    return slideDiv.style.animation = "slide2 1s forwards";  
  }
}

function returnPage() {
  if (pjtPage == 2) {
    pjtPage--;
    rightBtn.style.display = "block";
    return slideDiv.style.animation = "slideReturn 1s forwards";  
  }
  if (pjtPage == 1) {
    pjtPage--;
    leftBtn.style.display = "none";
    return slideDiv.style.animation = "slideReturn2 1s forwards";     
  }
}
