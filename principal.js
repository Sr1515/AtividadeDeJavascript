var alunos = document.querySelectorAll(".alunos");
console.log(alunos);

for (var i = 0; i < alunos.length; i++) {
    var aluno = alunos[i]
    console.log(i)

    var tdNota1 = aluno.querySelector('.info-n1');
    var n1 = tdNota1.textContent;
    console.log(n1);

    var tdNota2 = aluno.querySelector('.info-n2');
    var n2 = tdNota2.textContent;
    console.log(n2);

    var tdNota3 = aluno.querySelector('.info-n3');
    var n3 = tdNota3.textContent;
    console.log(n3);

    var n1Valido = true;
    var n2Valido = true;
    var n3Valido = true;

    if (n1 < 0 || n1 > 100) {
        console.log("nota é inválida");
        n1Valido = false;
        tdNota1.textContent = "Nota é inválida";
    }

    if (n2 < 0 || n2 > 100) {
        console.log("nota é inválida");
        n1Valido = false;
        tdNota2.textContent = "Nota é inválida";
    }

    if (n3 < 0 || n3 > 100) {
        console.log("nota é inválida");
        n1Valido = false;
        tdNota3.textContent = "Nota é inválida";
    }

    if (n1Valido && n2Valido && n3Valido) {
        var media = (n1 + n2 + n3) // 3;
        console.log(media);

        var tdMedia_semestral = aluno.querySelector(".info-med");
        tdMedia_semestral.textContent = media;
    }
}

