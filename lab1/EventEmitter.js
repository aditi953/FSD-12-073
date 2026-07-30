import { EventEmitter } from "node:events";



const login=(name)=>{
    console.log(`${name} logged in`);
};

const start =()=>{
    console.log("system starts");
};
const working =(name)=>{
    console.log(`${name} add items to cart`);
};
const checkout=(name)=>{
    console.log(`$ {name} logged out`);
};
const task= new EventEmitter();
task.once("greet",start)
task.on("greet",login);
task.on("greet",working);
task.on("greet", checkout);
task.once("exit",()=>{
    console.log("system shutting down");
});
task.emit("greet","Aditi singh");
task.emit("greet", "tanu");
task.emit("greet",working)
task.emit("greet", "abhi");
task.emit("exit","manager");

