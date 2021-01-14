// const ws_url = 'ws://chat.shas.tel'
// // const ws = new WebSocket(ws_url);
// let ws;
// const userName = 'Serhii';
// const messages = document.querySelector('#messages');
// const messageBox = document.querySelector('#messageInput');
//
// function init() {
//     console.log('Start initialization of websocket');
//     if (ws) {
//         ws.onerror = ws.onopen = ws.onclose = null;
//         ws.close();
//     }
//     ws = new WebSocket('ws://chat.shas.tel');
//     console.log('Creating new socket');
//     console.log(ws);
//     ws.onopen = () => {
//         console.log('Connection opened!');
//     }
//     ws.onmessage = ({data}) => {
//         console.log('New messages received!');
//         let messages = JSON.parse(data);
//         messages.forEach(msg => showMessage(msg));
//         console.log(data);
//     };
//     ws.onclose = function () {
//         ws = null;
//         console.log('Close previous socket');
//     }
// }
//
// function showMessage(message) {
//     messages.textContent += `\n\n${userName}: ${message}`;
//     messages.scrollTop = messages.scrollHeight;
//     messageBox.value = '';
// }
//
// function sendMessage(ws, msg){
//     waitForSocketConnection(ws, function (){
//         console.log('Your message was sent!');
//         console.log(JSON.stringify({from: userName, message: msg}));
//         ws.send(JSON.stringify({from: userName, message: msg}));
//     });
// }
//
// function waitForSocketConnection(socket, callback){
//     setTimeout(
//         function () {
//             if (socket.readyState === 1) {
//                 console.log("Connection is established")
//                 if (callback != null){
//                     callback();
//                 }
//             } else {
//                 console.log("wait for connection...");
//                 waitForSocketConnection(socket, callback);
//             }
//         }, 1000);
// }
//
// export {init, showMessage, sendMessage, ws, messages, messageBox}
