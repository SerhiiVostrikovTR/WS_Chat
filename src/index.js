import {createChatElements, sendBtn, userNameInput} from "./chatElements.js";
import {initWS} from "./wsFeatures.js";
import {notificationHandler} from "./notifications.js";
import {userNameHandler, sendBtnClkHandler} from "./chatFeatures.js";

createChatElements();

userNameInput.addEventListener('change', userNameHandler);
sendBtn.addEventListener('click', sendBtnClkHandler);
document.addEventListener('DOMContentLoaded', notificationHandler);

(function() {
    initWS();
})();


