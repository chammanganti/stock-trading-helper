import { writable } from "svelte/store";

let initialActiveScreen = "";
let storedActiveScreen = localStorage.getItem("sth_active");
if (storedActiveScreen !== undefined) {
  initialActiveScreen = storedActiveScreen;
}

export const activeScreen = writable(initialActiveScreen);
