const modal_infectados = document.getElementById("modal_infectados");
const corredor = document.getElementById("corredor").addEventListener("click",()=>{
    let titulo = document.querySelector('.titulo_modal_content')
    titulo.innerHTML = "Corredores"
    let texto = document.querySelector('.texto_modal_content')
    texto.innerHTML = "Caso a infecção não seja evitada, ela se completa e atribui ao indivíduo o primeiro estágio da doença. Nesse caso, o infectado apresenta comportamentos violentos e a força, resistência e velocidade de um ser humano comum. O corpo está repleto de úlceras e a boca esbanja sangue junto a saliva. "
    modal_infectados.style.display = 'flex';
});
const percegdor = document.getElementById("Perseguidor").addEventListener("click",()=>{
    let titulo = document.querySelector('.titulo_modal_content')
    titulo.innerHTML = "Perseguidores"
    let texto = document.querySelector('.texto_modal_content')
    texto.innerHTML = "No segundo estágio da doença, locais do corpo do infectado passam a ser tomados pela aparência do fungo. Um cogumelo acinzentado surge dos olhos, narizes, boca ou orelha dos errantes. Eles possuem uma força maior e uma velocidade um pouco mais aflorada quando comparados aos corredores. Sua resistência é a mesma dos humanos, mas o ataque pode ser dificultado devido a intensa movimentação."
    modal_infectados.style.display = 'flex';
});
const estalador = document.getElementById("Estalador").addEventListener("click",()=>{
    let titulo = document.querySelector('.titulo_modal_content')
    titulo.innerHTML = "Estaladores"
    let texto = document.querySelector('.texto_modal_content')
    texto.innerHTML = "Esses adoentados já estão infectados a certo tempo pelo fungo. Seu rosto é tomado pela aparência do Cordyceps e apenas sua boca é livre do avanço do fungo. Eles emitem ruídos estridentes que avisam outros infectados sobre a presença de um indivíduo saudável. Eles não enxergam, a não ser pela ecolocalização que desenvolvem no estágio três da infecção. Eles possuem uma força significativa e uma velocidade um tanto menor que os perseguidores devido a ausência da visão. Sua resistência é um pouco maior comparado aos corredores e perseguidores."
    modal_infectados.style.display = 'flex';
});
const baiacu = document.getElementById("Baiacu").addEventListener("click",()=>{
    let titulo = document.querySelector('.titulo_modal_content')
    titulo.innerHTML = "Baiacus"
    let texto = document.querySelector('.texto_modal_content')
    texto.innerHTML = "Baiacus são o último e mais raro estágio da doença. Isso porque estes seres apresentam o corpo avantajado, repleto de micoses, úlceras e do fungos. É quase impossível identificar os membros do corpo desse ser. Eles podem ter um excesso do cogumelo acinzentado nas suas costas, formando uma corcunda. São extremamente fortes e resistentes a ataques. Não são tão rápidos como nos outros casos, mas fortes o bastante para serem apavorantes."
    modal_infectados.style.display = 'flex';
});
const btn_close_modal = document.getElementById("btn_close_modal").addEventListener("click", ()=>{
    modal_infectados.style.display = 'none';
});