document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("jfs").addEventListener("click", function () {
    document.getElementById("botones").innerHTML =
      '<div class="button-row">' +
      '<button onclick="generaryreproducirSilaba()">Generar Sílaba</button>' +
      '<button onclick="reproducirSilaba()">Reproducir Sílaba</button>' +
      "</div>" +
      "<div>" +
      "<button onclick=\"verificarCombinacion('J', 'A')\">JA</button>" +
      "<button onclick=\"verificarCombinacion('J', 'E')\">JE</button>" +
      "<button onclick=\"verificarCombinacion('J', 'I')\">JI</button>" +
      "<button onclick=\"verificarCombinacion('J', 'O')\">JO</button>" +
      "<button onclick=\"verificarCombinacion('J', 'U')\">JU</button>" +
      "</div>" +
      "<div>" +
      "<button onclick=\"verificarCombinacion('F', 'A')\">FA</button>" +
      "<button onclick=\"verificarCombinacion('F', 'E')\">FE</button>" +
      "<button onclick=\"verificarCombinacion('F', 'I')\">FI</button>" +
      "<button onclick=\"verificarCombinacion('F', 'O')\">FO</button>" +
      "<button onclick=\"verificarCombinacion('F', 'U')\">FU</button>" +
      "</div>" +
      "<div>" +
      "<button onclick=\"verificarCombinacion('S', 'A')\">SA</button>" +
      "<button onclick=\"verificarCombinacion('S', 'E')\">SE</button>" +
      "<button onclick=\"verificarCombinacion('S', 'I')\">SI</button>" +
      "<button onclick=\"verificarCombinacion('S', 'O')\">SO</button>" +
      "<button onclick=\"verificarCombinacion('S', 'U')\">SU</button>" +
      "</div>";
  });
  document.getElementById("tpk").addEventListener("click", function () {
    document.getElementById("botones").innerHTML =
      '<div class="button-row">' +
      '<button onclick="generaryreproducirSilaba2()">Generar Sílaba</button>' +
      '<button onclick="reproducirSilaba()">Reproducir Sílaba</button>' +
      "</div>" +
      "<div>" +
      "<button onclick=\"verificarCombinacion('T', 'A')\">TA</button>" +
      "<button onclick=\"verificarCombinacion('T', 'E')\">TE</button>" +
      "<button onclick=\"verificarCombinacion('T', 'I')\">TI</button>" +
      "<button onclick=\"verificarCombinacion('T', 'O')\">TO</button>" +
      "<button onclick=\"verificarCombinacion('T', 'U')\">TU</button>" +
      "</div>" +
      "<div>" +
      "<button onclick=\"verificarCombinacion('P', 'A')\">PA</button>" +
      "<button onclick=\"verificarCombinacion('P', 'E')\">PE</button>" +
      "<button onclick=\"verificarCombinacion('P', 'I')\">PI</button>" +
      "<button onclick=\"verificarCombinacion('P', 'O')\">PO</button>" +
      "<button onclick=\"verificarCombinacion('P', 'U')\">PU</button>" +
      "</div>" +
      "<div>" +
      "<button onclick=\"verificarCombinacion('K', 'A')\">KA</button>" +
      "<button onclick=\"verificarCombinacion('K', 'E')\">KE</button>" +
      "<button onclick=\"verificarCombinacion('K', 'I')\">KI</button>" +
      "<button onclick=\"verificarCombinacion('K', 'O')\">KO</button>" +
      "<button onclick=\"verificarCombinacion('K', 'U')\">KU</button>" +
      "</div>";
  });
});
var audioElement;

function generarSilaba() {
  const consonantes = ["J", "F", "S"];
  const vocales = ["A", "E", "I", "O", "U"];
  const voz = ["1"];

  const silaba = `${
    consonantes[Math.floor(Math.random() * consonantes.length)]
  }${vocales[Math.floor(Math.random() * vocales.length)]}${
    voz[Math.floor(Math.random() * voz.length)]
  }`;

  return silaba;
}

function generarSilaba2() {
  const consonantes = ["T", "P", "K"];
  const vocales = ["A", "E", "I", "O", "U"];
  const voz = ["1"];

  const silaba = `${
    consonantes[Math.floor(Math.random() * consonantes.length)]
  }${vocales[Math.floor(Math.random() * vocales.length)]}${
    voz[Math.floor(Math.random() * voz.length)]
  }`;

  return silaba;
}

function generaryreproducirSilaba() {
  document.getElementById("mensaje").textContent = "";
  silabaGenerada = generarSilaba();

  if (!audioElement) {
    audioElement = new Audio();
  }

  var mp3Source = `Audios/${silabaGenerada}.mp3`;
  audioElement.src = mp3Source;

  audioElement.play();
}

function generaryreproducirSilaba2() {
  document.getElementById("mensaje").textContent = "";
  silabaGenerada = generarSilaba2();

  if (!audioElement) {
    audioElement = new Audio();
  }

  var mp3Source = `Audios/${silabaGenerada}.mp3`;
  audioElement.src = mp3Source;

  audioElement.play();
}

function reproducirSilaba() {
  if (audioElement) {
    audioElement.play();
  }
}

let aciertos = 0;
let fallos = 0;
let aciertosPorSilaba = {};
let fallosPorSilaba = {};

function verificarCombinacion(consonante, vocal) {
  const combinacion = consonante + vocal;
  const respuestaCorrecta = silabaGenerada.substring(0, 2).toUpperCase();
  const mensaje = document.getElementById("mensaje");
  const estadisticasAciertos = document.getElementById("aciertos");
  const estadisticasFallos = document.getElementById("fallos");
  const estadisticasPorcentaje = document.getElementById("porcentajeAciertos");
  const listaAciertosDiv = document.getElementById("listaAciertos");
  const listaFallosDiv = document.getElementById("listaFallos");

  if (!(combinacion in aciertosPorSilaba)) {
    aciertosPorSilaba[combinacion] = 0;
    fallosPorSilaba[combinacion] = 0;
  }

  if (combinacion === respuestaCorrecta) {
    mensaje.textContent = "¡Respuesta correcta!";
    mensaje.style.color = "green";
    aciertos++;
    aciertosPorSilaba[combinacion]++;
  } else {
    mensaje.textContent = "Respuesta incorrecta. Intenta de nuevo.";
    mensaje.style.color = "red";
    fallos++;
    fallosPorSilaba[combinacion]++;
  }

  estadisticasAciertos.textContent = aciertos;
  estadisticasFallos.textContent = fallos;

  const totalIntentos = aciertos + fallos;
  const porcentajeAciertos =
    totalIntentos === 0 ? 0 : (aciertos / totalIntentos) * 100;
  estadisticasPorcentaje.textContent = porcentajeAciertos.toFixed(2) + "%";

  listaAciertosDiv.innerHTML =
    "<p>Aciertos por sílaba:</p>" + mostrarLista(aciertosPorSilaba);
  listaFallosDiv.innerHTML =
    "<p>Fallos por sílaba:</p>" + mostrarLista(fallosPorSilaba);
}

function mostrarLista(lista) {
  let resultado = "<ul>";
  for (const key in lista) {
    resultado += `<li>${key}: ${lista[key]}</li>`;
  }
  resultado += "</ul>";
  return resultado;
}
