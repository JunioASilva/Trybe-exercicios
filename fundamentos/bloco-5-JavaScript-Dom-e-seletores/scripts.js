// document.getElementsByTagName("p")[0].innerText = "Empregado e Feliz";

// document.getElementsByClassName("main-content")[0].style.backgroundColor = "rgb(76,164,109)";

// document.getElementsByClassName("main-content")[1].style.backgroundColor = "white";

// document.getElementsByTagName("h1")[0].innerHTML = "Exercicios 5.1 - JavaScript";

function upperCaseParagraph (){
let paragraph = document.getElementsByTagName("p");
paragraph.innerHTML = paragraph.innerHTML.toUpperCase();
}
upperCaseParagraph();

function showParagraphs() {
    let paragraphs = document.getElementsByTagName("p");
    for (let index = 0; index < paragraphs.length; index += 1) {
      console.log(paragraphs[index].innerHTML);
    }
  }
  showParagraphs();

