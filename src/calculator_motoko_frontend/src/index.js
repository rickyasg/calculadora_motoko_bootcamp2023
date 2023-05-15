import { calculator_motoko_backend } from "../../declarations/calculator_motoko_backend";
 
document.querySelector("#add").addEventListener("click", async (e) => {
  const button = document.querySelector("#add");
  let valueFloat = parseFloat(document.getElementById("datoIn").value);
  button.setAttribute("disabled", true);
  const greeting =  await calculator_motoko_backend.add(valueFloat);
  button.removeAttribute("disabled");
  let history = document.getElementById("greeting").value;
  document.getElementById("greeting").value = history+'\n' +greeting.toString();
  return false;
});
document.querySelector("#sub").addEventListener("click", async (e) => {
  const button = document.querySelector("#sub");
  let valueFloat = parseFloat(document.getElementById("datoIn").value);
  button.setAttribute("disabled", true);
  const greeting =  await calculator_motoko_backend.sub(valueFloat);
  button.removeAttribute("disabled");
  let history = document.getElementById("greeting").value;
  document.getElementById("greeting").value = history+'\n' +greeting.toString();
  return false;
});
document.querySelector("#mul").addEventListener("click", async (e) => {
  const button = document.querySelector("#mul");
  let valueFloat = parseFloat(document.getElementById("datoIn").value);
  button.setAttribute("disabled", true);
  const greeting =  await calculator_motoko_backend.mul(valueFloat);
  button.removeAttribute("disabled");
  let history = document.getElementById("greeting").value;
  document.getElementById("greeting").value = history+'\n' +greeting.toString();
  return false;
});
document.querySelector("#div").addEventListener("click", async (e) => {
  const button = document.querySelector("#div");
  let valueFloat = parseFloat(document.getElementById("datoIn").value);
  button.setAttribute("disabled", true);
  const greeting =  await calculator_motoko_backend.div(valueFloat);
  button.removeAttribute("disabled");
  let history = document.getElementById("greeting").value;
  if(greeting.length==0){
    document.getElementById("greeting").value = history+'\n' +"ERROR DIV 0";
  }
  else{
    document.getElementById("greeting").value = history+'\n' +greeting.toString();
  }
  
  return false;
});
document.querySelector("#power").addEventListener("click", async (e) => {
  const button = document.querySelector("#power");
  let valueFloat = parseFloat(document.getElementById("datoIn").value);
  button.setAttribute("disabled", true);
  const greeting =  await calculator_motoko_backend.power(valueFloat);
  button.removeAttribute("disabled");
  let history = document.getElementById("greeting").value;
  document.getElementById("greeting").value = history+'\n' +greeting.toString();
  return false;
});
document.querySelector("#sqrt").addEventListener("click", async (e) => {
  const button = document.querySelector("#sqrt");
  button.setAttribute("disabled", true);
  const greeting =  await calculator_motoko_backend.sqrt();
  button.removeAttribute("disabled");
  let history = document.getElementById("greeting").value;
  document.getElementById("greeting").value = history+'\n' +greeting.toString();
  return false;
});
document.querySelector("#floor").addEventListener("click", async (e) => {
  const button = document.querySelector("#floor");
  button.setAttribute("disabled", true);
  const greeting =  await calculator_motoko_backend.floor();
  button.removeAttribute("disabled");
  let history = document.getElementById("greeting").value;
  document.getElementById("greeting").value = history+'\n' +greeting.toString();
  return false;
});

document.querySelector("#reset").addEventListener("click", async (e) => {
  const button = document.querySelector("#reset");
  button.setAttribute("disabled", true);
  const greeting =  await calculator_motoko_backend.reset();
  button.removeAttribute("disabled");
  let history = document.getElementById("greeting").value;
  document.getElementById("greeting").value = "0.00";
  return false;
});

document.querySelector("#see").addEventListener("click", async (e) => {
  const button = document.querySelector("#see");
  button.setAttribute("disabled", true);
  const greeting =  await calculator_motoko_backend.see();
  button.removeAttribute("disabled");
  let history = document.getElementById("greeting").value;
  document.getElementById("greeting").value = history+'\n' +greeting.toString();
  return false;
});
