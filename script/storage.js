let cod=[
    "function matrixTyping(codigo, p) {",
    " ",
    "   write = function () {",
    " ",
    "     if (ind < codigo.length - 1) {",
    " ",
    "       if (ind2 > codigo[ind].length) {",
    "           ind++;",
    "           ind2 = 0;",
    "           p.innerHTML += '<br>';",
    "       }",
    "       if (ind2 <= codigo[ind].length) {",
    "           p.innerHTML += codigo[ind].charAt(ind2);",
    "           ind2++;",
    "           return setTimeout(write, 5);",
    "       }",
    "     }",
    "   }",
    "   let ind = 0;",
    "   let ind2 = 0;",
    "   write();",
    "}"
];

let loading = "Loading..."

