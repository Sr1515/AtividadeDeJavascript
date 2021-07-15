var botao = document.querySelector("#bt");
botao.addEventListener("click", function (event) {
	event.preventDefault();

	var form = document.querySelector("#form-alunos");

	var aluno = obtemAlunoDoForm(form);

	var alunoTr = montaTr(aluno);

	var tabela = document.querySelector("#tabela-alunos");
	tabela.appendChild(alunoTr);

	form.reset();
});

function obtemAlunoDoForm(form) {
	var aluno = {
		nome: form.nome.value,
		nota1: checaValido(form.n1.value),
		nota2: checaValido(form.n2.value),
		nota3: checaValido(form.n3.value),
		media: calculamedia(
			parseFloat(form.n1.value),
			parseFloat(form.n2.value),
			parseFloat(form.n3.value)
		),
	};

	return aluno;
}

function montaTd(dado, classe) {
	var td = document.createElement("td");
	td.classList.add(classe);
	td.textContent = dado;

	return td;
}

function montaTr(aluno) {
	var alunoTr = document.createElement("tr");
	alunoTr.classList.add("alunos");

	alunoTr.appendChild(montaTd(aluno.nome, "info-nome"));
	alunoTr.appendChild(montaTd(aluno.nota1, "info-n1"));
	alunoTr.appendChild(montaTd(aluno.nota2, "info-n2"));
	alunoTr.appendChild(montaTd(aluno.nota3, "info-n3"));
	alunoTr.appendChild(montaTd(aluno.media, "info-med"));

	return alunoTr;
}
