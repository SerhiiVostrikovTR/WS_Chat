const chatName = 'WebSocket chat';
const messagesBoxId = 'messages';
const messageInputId = 'messageInput';
const sendButtonText = 'Send Message'
const sendButtonId = 'sendButton';

function createChatHeader(){
    const chatNameHeader = document.createElement('h1');
    const chatNameText = document.createTextNode(chatName);
    chatNameHeader.classList.add('chatHeader');
    chatNameHeader.appendChild(chatNameText);
    document.head.appendChild(chatNameHeader);
}

function createChatBox(){
    const chatBox = document.createElement('pre');
    chatBox.id = messagesBoxId;
    chatBox.classList.add('messageBox');
    document.body.appendChild(chatBox);
}

function createChatInput(){
    const chatInput = document.createElement('input');
    chatInput.placeholder = 'Type your message here';
    chatInput.id = messageInputId;
    chatInput.classList.add('messageInput');
    document.body.appendChild(chatInput);
}

function createChatButtonSend(){
    const buttonSend = document.createElement('button');
    const buttonText = document.createTextNode(sendButtonText);
    buttonSend.id = sendButtonId;
    buttonSend.classList.add('buttonSend');
    buttonSend.appendChild(buttonText);
    document.body.appendChild(buttonSend);
}

function createGetSocketStateButton(){
    const buttonSend = document.createElement('button');
    const buttonText = document.createTextNode('Get Web Socket State');
    buttonSend.id = 'socketState';
    buttonSend.classList.add('buttonSend');
    buttonSend.appendChild(buttonText);
    document.body.appendChild(buttonSend);
}

function createChatElements(){
    createChatHeader();
    createChatBox();
    createChatInput();
    createChatButtonSend();
    createGetSocketStateButton();
}


export {createChatElements, messageInputId, messagesBoxId, sendButtonId};

