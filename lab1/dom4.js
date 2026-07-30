import { EventEmitter } from "events";
const form = new EventEmitter();

form.on("submit",(uname,password) => {
    console.log("form submitted");
    console.log(`User password: ${password}`);
});

form.emit("submit","abc@abc.com","11223322");