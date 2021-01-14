const chatName = 'WebSocket chat';
const messagesBoxId = 'messages';
const messageInputId = 'messageInput';
const sendButtonText = 'Send Message'
const sendButtonId = 'sendButton';
const userNameInputId = 'username';

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

function createUserNameInput(){
    const chatInput = document.createElement('input');
    chatInput.placeholder = 'Type your name here';
    // chatInput.disabled = true;
    chatInput.id = userNameInputId;
    chatInput.classList.add('userNameInput');
    document.body.appendChild(chatInput);
}

function createConfirmNameButton(){
    const buttonConfirm = document.createElement('button');
    const buttonText = document.createTextNode('Confirm name');
    buttonConfirm.id = 'confirmUser';
    buttonConfirm.classList.add('buttonConfirm');
    buttonConfirm.appendChild(buttonText);
    document.body.appendChild(buttonConfirm);
}

function createEditNameButton(){
    const buttonEdit = document.createElement('button');
    const buttonText = document.createTextNode('Edit name');
    buttonEdit.id = 'editUser';
    buttonEdit.classList.add('buttonConfirm');
    buttonEdit.appendChild(buttonText);
    document.body.appendChild(buttonEdit);
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
    createUserNameInput();
    createConfirmNameButton();
    createEditNameButton();
    createChatInput();
    createChatButtonSend();
    createGetSocketStateButton();
}


export {createChatElements, messageInputId, messagesBoxId, sendButtonId};

