let contadorFavoritos = 0;
let contadorPreco = 0;
let carrinhoTirar = document.querySelector('#carrinhoRemover');

function vitrineRoupas(data) {
    let vitrine = document.querySelector('.vitrineDom');

    for (let i = 0; i < data.length; i++) {
        let roupas = data[i];

        let li = document.createElement('li');
        let img = document.createElement('img');
        img.classList.add('image')
        img.src = roupas.img
        img.alt = roupas.nameItem

        let a = document.createElement('a')
        a.classList.add('botao')
        a.innerHTML = roupas.tag

        let h2 = document.createElement('h2')
        h2.classList.add('titulo-2')
        h2.innerHTML = roupas.nameItem

        let p = document.createElement('p')
        p.classList.add('paragrafo')
        p.innerHTML = roupas.description

        let pP = document.createElement('p')
        pP.classList.add('paragrafo-valor')
        pP.innerHTML = 'R$' + ' ' + roupas.value

        let button = document.createElement('button')
        button.classList.add('carrinho')
        button.id = 'rou-' + (i+1)
        button.innerHTML = roupas.addCart


        vitrine.appendChild(li)
        li.appendChild(img)
        li.appendChild(a)
        li.appendChild(h2)
        li.appendChild(p)
        li.appendChild(pP)
        li.appendChild(button)

    }
}

vitrineRoupas(data)

let adicionarCarrinho = document.querySelectorAll('.carrinho');
for (let i = 0; i < adicionarCarrinho.length; i++) {
    let carrinho = adicionarCarrinho[i];

    carrinho.addEventListener('click', function (e) {
        let idElemento = e.target.id;

        let id = parseInt(idElemento.substring(4));

        if (id) {
            contadorFavoritos++
            document.querySelector('.numero-produtos').innerHTML = `${contadorFavoritos}`
        }
        let roupas = objetoData(id)

        if (roupas.value) {
            contadorPreco += roupas.value
            document.querySelector('.numero-total').innerHTML = `${contadorPreco}`
        }
        let roupasElement = criaRoupaCarrinho(roupas);


    })

}

function objetoData(id) {
    for (let i = 0; i < data.length; i++) {
        let objeto = data[i];
        if (objeto.id == id) {
            return objeto;
        }
    }
    return 'Objeto não encontrado';
}


function criaRoupaCarrinho(objeto) {

    let li = document.createElement('li')
    li.id = 'lis-' + objeto.id
    let img = document.createElement('img')
    img.classList.add('image-2')
    img.src = objeto.img
    img.alt = objeto.nameItem

    let h2 = document.createElement('h2')
    h2.classList.add('titulo-carrinho')
    h2.innerHTML = objeto.nameItem

    let p = document.createElement('p')
    p.classList.add('paragrafo-carrinho')
    p.innerHTML = objeto.value

    let button = document.createElement('button')
    button.classList.add('botao-remover')
    button.type = objeto.addCart
    button.innerHTML = 'Remover';
    button.id = 'ret-' + objeto.id;

    button.addEventListener('click', function (e) {
        let li = document.querySelector('#lis-' + objeto.id);
        li.remove();
        contadorFavoritos--
        document.querySelector('.numero-produtos').innerHTML = `${contadorFavoritos}`

        let roupas = objetoData(objeto.value)
        contadorPreco -= parseInt(objeto.value)
        document.querySelector('.numero-total').innerHTML = `${contadorPreco}`


    })

    carrinhoTirar.appendChild(li)
    li.appendChild(img)
    li.appendChild(h2)
    li.appendChild(p)
    li.appendChild(button)


}












// function atualizaPreco (data){
//     let preco = document.querySelector('#container-numero');
//     for (let i = 0; i < data.length; i++){
//         let roupas = data[i];

//         let li = document.createElement('li');
//         let p = document.createElement('p');
//         p.classList.add('numero-produtos')
//         p.innerHTML = parseInt(0)
//         let lis = document.createElement('li');
//         let pP = document.createElement('p');
//         pP.classList.add('numero-total')
//         pP.innerHTML = parseInt(0)
//     }
// }




