import {createChatElements} from "./chatElements.js";

createChatElements();

const userNameInput = document.querySelector('#username');

const sendBtn = document.querySelector('#sendButton');
const socketStateBtn = document.querySelector('#socketState');
const messages = document.querySelector('#messages');
const messageBox = document.querySelector('#messageInput');

function makeFormatMessage(msg){
    return {'from': getUserNameFromLocalStorage(), 'message': msg};
}

function userNameHandler(){
    let userName = getUserNameFromLocalStorage();
    if(userName){
        userNameInput.value = userName;
        sendBtn.disabled = false;
    }
    else {
        let inputUserName = userNameInput.value;
        if(inputUserName){
            window.localStorage.setItem('user', userNameInput.value);
            sendBtn.disabled = false;
        }
        else {
            sendBtn.disabled = true;
        }
    }
}

userNameInput.addEventListener('change', userNameHandler);

function getUserNameFromLocalStorage(){
    return window.localStorage.getItem('user');
}

(function() {

    let ws;

    function showMessage(msg) {
        messages.textContent += `\n\n${msg.from}: ${msg.message}`;
        messages.scrollTop = messages.scrollHeight;
        messageBox.value = '';
    }

    function sendMessage(msg){
        waitForSocketConnection(ws, function (){
            console.log('Your message was sent!');
            console.log(JSON.stringify(makeFormatMessage(msg)));
            ws.send(JSON.stringify(makeFormatMessage(msg)));
        });
    }

    function waitForSocketConnection(socket, callback){
        setTimeout(
            function () {
                if (socket.readyState === 1) {
                    console.log("Connection is established")
                    if (callback != null){
                        callback();
                    }
                } else {
                    console.log("wait for connection...");
                    waitForSocketConnection(socket, callback);
                }
            }, 1000);
    }

    function init() {
        console.log('Start initialization of websocket');
        if (ws) {
            ws.onerror = ws.onopen = ws.onclose = null;
            ws.close();
        }
            ws = new WebSocket('ws://chat.shas.tel');
            console.log('Creating new socket');
            console.log(ws);
            ws.onopen = () => {
                console.log('Connection opened!');
            }
            ws.onmessage = ({data}) => {
                console.log('New messages received!');
                let messages = JSON.parse(data);
                messages.forEach(msg => showMessage(msg));
            };
            ws.onclose = function () {
                console.log('Close previous socket');
                ws = null;
                init();
            }
    }

    sendBtn.onclick = function() {
        if (!ws) {
            showMessage("No WebSocket connection :(");
            return ;
        }
        if(userNameInput.value && messageBox.value){
            sendMessage(messageBox.value);
        }
        else {
            alert(`Can't send message! Username/message is empty!`);
        }
    }

    socketStateBtn.onclick = function () {
        if (ws){
            console.log('WS ready state: ' + ws.readyState);
        }
        else {
            console.log('No WebSocket connection :(');
        }
    }
    init();
})();


