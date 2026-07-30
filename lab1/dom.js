import { EventEmitter } from "events";

const button = new EventEmitter();
button.on("click", () => {
  console.log("button clicked");
});
button.emit("click");
