

import { EventEmitter } from "events";

const button = new EventEmitter();
button.on("click", () => {
  console.log("button clicked");
});
button.on("click", () => {
  console.log("task 2");
});
button.emit("click");