var tabela = document.querySelector("#tabela");

tabela.addEventListener("dblclick", function (event) {
    event.target.parentNode.classList.add("animacao");

    setTimeout(function () {
        event.target.parentNode.remove();
    }, 1000);
});