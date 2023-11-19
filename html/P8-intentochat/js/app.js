// Obtén los elementos relevantes del DOM
const chatSubmitDesc = document.querySelector('.desc-inputs .chat-submit');
const ChatSubmitChat = document.querySelector(".chat-input .chat-submit2");
const chatInputDesc = document.querySelector('.desc-inputs .chat-text');
const chatInputMain = document.querySelector('.chat-input .chat-text2');
const chatArray = document.querySelector('.chatarray');

// Agrega un evento de clic al botón chat-submit
chatSubmitDesc.addEventListener('click', function() {

    const state = document.querySelector(".state");


    let stateIn = chatInputDesc.value;
    state.textContent = "tu nombre es: " + stateIn;
});

ChatSubmitChat.addEventListener("click", function() {
    const message = chatInputMain.value; // guarda el mensaje
    const name = chatInputDesc.value; // guarda el nombre
    const chatContent = `${name}: ${message}`;

    let chatElement = chatArray.textContent = chatContent;
});