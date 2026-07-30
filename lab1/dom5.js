import {EventEmitter} from "events";

class DomClass extends EventEmitter{
    addEventListener(eventName,callback){
        this.on(eventName,callback);

        }
removeEventListener(eventName,callback){
    this.off(eventName,callback);
}
dispatchEvent(eventName,eventData = {}) {
    const event = {
        type:eventName,
        timespam:new Date(),
        ...eventData,
    };
    this.emit(eventName,event);
}
    }
const button = new DomClass();
const handleclick = (event) => {
    console.log(`button clicked type: ${event.tupe} at ${event.timespam}`);
};
button.addEventListener("click",handleclick);
button.dispatchEvent("click", {
    target:"submitBtn",
});
