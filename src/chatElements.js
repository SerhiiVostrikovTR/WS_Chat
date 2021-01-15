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
    return chatNameHeader;
}

function chatInputAndSendButton(){
    const divChatInputSend = document.createElement('div');
    divChatInputSend.appendChild(createChatInput());
    divChatInputSend.appendChild(createChatButtonSend());
    return divChatInputSend;
}

function createChatBox(){
    const chatBox = document.createElement('pre');
    chatBox.id = messagesBoxId;
    chatBox.classList.add('messageBox');
    return chatBox;
}

function createChatInput(){
    const chatInput = document.createElement('input');
    chatInput.placeholder = 'Type your message here';
    chatInput.id = messageInputId;
    chatInput.classList.add('messageInput');
    return chatInput;
}

function createUserNameInput(){
    const userNameInput = document.createElement('input');
    userNameInput.placeholder = 'Type your name here';
    userNameInput.id = userNameInputId;
    // if(window.localStorage.getItem('user')){
    //     userNameInput.value = window.localStorage.getItem('user');
    // }
    return userNameInput;
}

function createChatButtonSend(){
    const buttonSend = document.createElement('button');
    const buttonText = document.createTextNode(sendButtonText);
    buttonSend.id = sendButtonId;
    buttonSend.classList.add('buttonSend');
    buttonSend.appendChild(buttonText);
    return buttonSend;
}

function createGetSocketStateButton(){
    const buttonSend = document.createElement('button');
    const buttonText = document.createTextNode('Get Web Socket State');
    buttonSend.id = 'socketState';
    buttonSend.appendChild(buttonText);
    return buttonSend;
}

function createChatElements(){
    const mainDiv = document.createElement('div');
    mainDiv.appendChild(createChatHeader());
    mainDiv.appendChild(createChatBox());
    mainDiv.appendChild(createUserNameInput());
    mainDiv.appendChild(chatInputAndSendButton());
    mainDiv.appendChild(createGetSocketStateButton());
    document.body.appendChild(mainDiv);
}


export {createChatElements, messageInputId, messagesBoxId, sendButtonId};

