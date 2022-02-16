//Animações Matrix--------------------------

function matrixTyping(codigo, p) {

    write = function () {

        if (ind < codigo.length - 1) {

            if (ind2 > codigo[ind].length) {
                ind++;
                ind2 = 0;
                p.innerHTML += "<br>";
            }
            if (ind2 <= codigo[ind].length) {

                if (codigo[ind].charAt(ind2) == " ") {
                    p.innerHTML += "&nbsp;"
                } else {
                    p.innerHTML += codigo[ind].charAt(ind2);
                }
                ind2++;
                return setTimeout(write, 1);//5
            }
        }
        matrixLoading(p.parentNode);
    }

    let ind = 0;
    let ind2 = 0;
    write();
}

function matrixLoading(div) {

    let p = document.createElement("p");
    p.classList.add("ppc");
    div.appendChild(p);
    let pointerWrite = setInterval(() => {
        p.innerHTML = loading;
    }, 125);
    let pointerDel = setInterval(() => {
        p.innerHTML = "";
    }, 250);
    setTimeout(() => {
        clearInterval(pointerWrite);
        clearInterval(pointerDel);
        p.innerHTML = "";
        flashAnimation(div);
    }, 3000)
}

//Animações de flash--------------------------

let flashStage = 0;
let arrowB = document.getElementById("arrow-botton");


function flashAnimation(div) {

    let fdiv = document.createElement("div");
    fdiv.id = "fDiv"
    if (arrowB.offsetHeight == 0) { //isso é para cancelar a animação de flash enquanto diminuimos 
        div.appendChild(fdiv);
        console.log("criado");                                   //a tela,com animação matrix executando.           
    }

    if (flashStage == 0) {
        flashStage = 1;
        setTimeout(() => {
            let ps = document.querySelectorAll(".ppc");
            ps.forEach((pe) => {
                div.removeChild(pe);
            });
        }, 150);
        setTimeout(() => {
            if (arrowB.offsetHeight == 0) { div.removeChild(fdiv); }
            showContent();//tire daqui, depois de saber quanto tempo demora a animação matrix;
        }, 300);
    } else {
        flashStage = 0;
        setTimeout(() => {
            div.removeChild(fdiv);
        }, 300);
    }
}




