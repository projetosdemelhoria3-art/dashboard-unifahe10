const URL =
"https://script.google.com/macros/s/AKfycbzOlAmuOYvAjjjnTD5N_4025YQAV8fK1clBqn8meB-nXCg-5kup-Ic2nrd93I2pFXPq-g/exec";

async function carregarPainel(){

const resposta = await fetch(URL);

const dados = await resposta.json();

const total = dados.length;

const matriculados = dados.filter(linha=>{

return linha.RA!="" && linha.RA!=null;

}).length;

const pendencias = dados.filter(linha=>{

const txt=(linha["SITUAÇÃO"]||"").toString().trim();

return txt!=="";

}).length;

const cursos=[];

dados.forEach(linha=>{

const nome=(linha.CURSO||"").trim();

if(nome!==""){

if(!cursos.includes(nome))
cursos.push(nome);

}

});

document.getElementById("total").innerHTML=total;

document.getElementById("matriculados").innerHTML=matriculados;

document.getElementById("faltam").innerHTML=total-matriculados;

document.getElementById("pendencias").innerHTML=pendencias;

document.getElementById("cursos").innerHTML=cursos.length;

const tabela=document.getElementById("tabela");

tabela.innerHTML="";

dados.slice(0,50).forEach(aluno=>{

tabela.innerHTML+=`

<tr>

<td>${aluno.RA||""}</td>

<td>${aluno.NOME||""}</td>

<td>${aluno.CURSO||""}</td>

<td>${aluno["SITUAÇÃO"]||""}</td>

</tr>

`;

});

const agora=new Date();

document.getElementById("hora").innerHTML=agora.toLocaleTimeString();

}

carregarPainel();

setInterval(carregarPainel,30000);
