import Message from "./Message.js"
import $ from "jquery"

$(()=>{
    $('#btnShowAlert').on('click', ()=> {
        let msg = new Message()
        msg.show()
    })
});

alert("Hello app!")