let contasorte = 0;
let contaazar = 0;

function sorte() {
    let min = 1;
    let max = 100;
    let dif = max - min + 1; 
    let aleatorio = Math.random();
    let num = min + Math.trunc(dif * aleatorio);


    let mostrar = document.getElementById('resultado');

    if (num > 50) {
        contasorte++;
        mostrar.innerHTML = `<h1>SORTE: ${contasorte}</h1><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-lsMqgNd3WHR8dGvpT7CUHSo_65J81R2YzNTV7a6Wto4iN-bT7-lU-ZxHKzw">`;
    } else {
        contaazar++;
        mostrar.innerHTML = `<h1>AZAR: ${contaazar}</h1><img src="https://cdn.displate.com/artwork/270x380/2019-04-05/54847f2f4d136a6dff389b200c2db4e7_6fafcfa30c046c0fdcd104372638066a.jpg">`;
    }
}
