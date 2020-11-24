import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import menuHeaderBehavior from "./components/header/header";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();

menuHeaderBehavior();

let slideIndex = 0;

showSlides("slideDenali");

function showSlides(name) {
  let i;
  let slides = document.getElementsByClassName(name);
  for (i = 0; i < slides.length; i += 1) {
    slides[i].style.display = "none";
  }
  slideIndex += 1;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(() => showSlides(name), 3000);
}
