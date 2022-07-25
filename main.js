
let nick = document.querySelector("#nick");
let nome = document.querySelector("#nome");
let gerar = document.querySelector("#gerar").addEventListener('click', ()=>{
    nick.value = `${nome.value}${nicksBase[Math.floor(Math.random() * nicksBase.length)]}`
    copiar.classList.remove('green')
    copiar.value = "Copiar"
})

const copiar = document.querySelector("#copiar")
copiar.addEventListener('click', ()=>{copiar.classList.add('green'); // classList.add só funcionou separando o eventListener assim mesmo
copiar.value = 'Copiado!'
nick.select();
navigator.clipboard.writeText(nick.value);
}) 

const nicksBase = [
    "Maluco", "Doente", "Feio", "CabeçaDeGelo", "BafoDeCocô", "123", "Garrido", "Bolsonaro", "Lula" 
]

