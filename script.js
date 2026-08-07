const URL =
"https://script.google.com/macros/s/AKfycbz-1KDlUZq7YNJ6RURApSnJIWBd9N2wmv9qvIzGTrFNUd4A4HIZnvQh7M-Ba4aSr6PIyQ/exec";

async function carregar() {

    try {

        const resposta = await fetch(URL);

        const alunos = await resposta.json();

        console.log(alunos);

    } catch (erro) {

        console.error(erro);

    }

}

carregar();
