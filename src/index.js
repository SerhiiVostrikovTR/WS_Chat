import {createChatElements} from "./chatElements.js";

createChatElements();
// const userName = 'Serhii';


const userNameInput = document.querySelector('#username');
const editUserButton = document.querySelector('#editUser');
let editUserName = userNameInput.disabled;
function editUserNameInput(){
    if(!editUserName){
        console.log('Enable username input');
        userNameInput.disabled = false;
        editUserName = true;
    }
    else {
        console.log('Disable username input')
        userNameInput.disabled = true;
        editUserName = false;
    }
}

function confirmUserName(){

}

editUserButton.onclick = editUserNameInput();

function userName(name) {
    if(getUserNameFromLocalStorage() === name){
        return name;
    }
    else {

    }
}

function getUserNameFromLocalStorage(){
    return window.localStorage.getItem('user');
}

(function() {

    const sendBtn = document.querySelector('#sendButton');
    const socketStateBtn = document.querySelector('#socketState');
    const messages = document.querySelector('#messages');
    const messageBox = document.querySelector('#messageInput');

    let ws;

    function showMessage(msg) {
        messages.textContent += `\n\n${msg.from}: ${msg.message}`;
        messages.scrollTop = messages.scrollHeight;
        messageBox.value = '';
    }

    function sendMessage(ws, msg){
        waitForSocketConnection(ws, function (){
            console.log('Your message was sent!');
            console.log(JSON.stringify({from: userName, message: msg}));
            ws.send(JSON.stringify({from: userName, message: msg}));
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
                // console.log(data)
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
        sendMessage(ws, messageBox.value);
        showMessage(messageBox.value);
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


