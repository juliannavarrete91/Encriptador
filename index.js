// Obtener los elementos del DOM
const textarea = document.getElementById('Ingreso_texto');
const btnEncriptar = document.getElementById('Boton_encriptar');
const btnDesencriptar = document.getElementById('Boton_desencriptar');
const output = document.getElementById('Salida_texto');

// Función para encriptar el texto
function encriptar() {
  const texto = textarea.value.toLowerCase().replace(/[^a-z]/g, '');
  const reemplazos = {
    'a': 'ai',
    'e': 'enter',
    'i': 'imes',
    'o': 'ober',
    'u': 'ufat'
  };
  let encriptado = '';
  for (const letra of texto) {
    encriptado += reemplazos[letra] || letra;
  }
  output.value = encriptado;
}

// Función para desencriptar el texto
function desencriptar() {
  const texto = textarea.value;
  const reemplazos = {
    'ai': 'a',
    'enter': 'e',
    'imes': 'i',
    'ober': 'o',
    'ufat': 'u'
  };
  let desencriptado = '';
  let i = 0;
  while (i < texto.length) {
    let reemplazoEncontrado = false;
    for (const [clave, valor] of Object.entries(reemplazos)) {
      if (texto.startsWith(clave, i)) {
        desencriptado += valor;
        i += clave.length;
        reemplazoEncontrado = true;
        break;
      }
    }
    if (!reemplazoEncontrado) {
      desencriptado += texto[i++];
    }
  }
  output.value = desencriptado;
}

// Función para copiar el texto del área de salida
function copiarTexto() {
    navigator.clipboard.writeText(output.value)
      .then(() => alert('Texto copiado al portapapeles.'))
      .catch(err => alert('Error al copiar el texto: ' + err));
}

// Agregar eventos a los botones
btnEncriptar.addEventListener('click', encriptar);
btnDesencriptar.addEventListener('click', desencriptar);