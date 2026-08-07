const API = "https://script.google.com/macros/s/AKfycbz-1KDlUZq7YNJ6RURApSnJIWBd9N2wmv9qvIzGTrFNUd4A4HIZnvQh7M-Ba4aSr6PIyQ/exec";

async function carregarPainel() {

    try {

        const resposta = await fetch(API);

        const dados = await resposta.json();

        document.getElementById("total").innerText = dados.length;

        let pendentes = 0;
        let concluidos = 0;

        dados.forEach(aluno => {

            if (
                aluno["OBSERVAÇÕES"] &&
                aluno["OBSERVAÇÕES"].toString().trim() != ""
            ) {

                pendentes++;

            } else {

                concluidos++;

            }

        });

        document.getElementById("pendentes").innerText = pendentes;
        document.getElementById("matriculados").innerText = concluidos;
        document.getElementById("cancelados").innerText = 0;

        const tabela = document.getElementById("tabela");

        tabela.innerHTML = "";

        dados.slice(0,20).forEach(aluno=>{

            tabela.innerHTML += `
            <tr>
                <td>${aluno["NOME"]}</td>
                <td>${aluno["CPF"] || ""}</td>
                <td>${aluno["CURSO"]}</td>
                <td>${aluno["OBSERVAÇÕES"] ? "PENDENTE" : "OK"}</td>
            </tr>
            `;

        });

    }

    catch(erro){

        console.log(erro);

    }

}

carregarPainel();

setInterval(carregarPainel,30000);
