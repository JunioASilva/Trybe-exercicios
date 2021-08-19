function createStateOptions(event) {
   let states = document.getElementById('state');
   let stateOptions = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

   for (let index = 0; index < stateOptions.length; index += 1) {
      let createOptions = document.createElement('option');
      states.appendChild(createOptions).innerText = stateOptions[index];
      states.appendChild(createOptions).value = stateOptions[index];
   }
}
createStateOptions();

function validandoDados() {

   let name = document.querySelector("[name=name]");
   if (name.value.length > 40 || name.value.length === 0) {
      //  alert("nome invalido!");
      console.log(name)
   }
   let email = document.querySelector("[name=email]");
   if (email.value.length > 50 || email.value.length === 0) {
      // alert ("email invalido!");
   }
   let cpf = document.querySelector("[name=cpf]");
   if (cpf.value.length > 11 || cpf.value.length === 0) {
      // alert("CPF invalido!");
   }
   let endereço = document.querySelector("[name=endereço]");
   if (endereço.value.length > 200 || endereço.value.length === 0) {
      //  alert("Endereço invalido!");
   }
   let city = document.querySelector("[name=city]");
   if (city.value.length > 28 || city.value.length === 0) {
      //  alert("Cidade invalida!");
   }
   let states = document.querySelector("[name=state]");
   if (states.value.length < 1 || states.value.length === 0) {
      // alert("Campo residencia invalido!");
   }
   let curriculo = document.querySelector("[name=curriculo]");
   if (curriculo.value.length > 1000 || curriculo.value.length < 100) {
      // alert("Minimo de 100 caracteres");
   }
   let cargo = document.querySelector("[name=cargo]");
   if (cargo.value.length > 40 || cargo.value.length === 0) {
      // alert("Cargo invalido");
   }
   let descrição = document.querySelector("[name=descrição]");
   if (descrição.value.length > 500 || descrição.value.length < 20) {
      // alert("Minimo de 20 caracteres!");
   }
   let frase = '27/12/1991';
   let frasePicada = frase.split("/");
   let day = frasePicada[0];
   let month = frasePicada[1];
   let year = frasePicada[2];
   let fraseAlerta = "Data Invalida!"

   console.log(frasePicada)
   if (day < 1 || day > 31) {
      alert(fraseAlerta)
   }
   else if (month < 1 || month > 12) {
      alert(fraseAlerta)
   }
   else if (year < 0) {
      alert(fraseAlerta)
   }
}
buttonSubmit();

function buttonSubmit() {
   let buttonSubmit = document.querySelector(".submit-button");
   buttonSubmit.addEventListener("click", function () {

      if (buttonSubmit) {
         validandoDados();
      }
   });

}



