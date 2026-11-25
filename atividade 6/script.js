function site(){
    let nome;
    let mostrar;

    nome = prompt("Qual seu nome?");
    mostrar = document.getElementById('mostrar');
    mostrar.innerHTML = `<h1> Olá ${nome}! Seja bem vindo </h1>`;

}