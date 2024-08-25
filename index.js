// Obtener los elementos del DOM
const textarea = document.getElementById('Ingreso_texto');
const btnEncriptar = document.getElementById('Boton_encriptar');
const btnDesencriptar = document.getElementById('Boton_desencriptar');
const output = document.getElementById('Salida_texto');
const btnCopiar = document.getElementById('Boton_copiar'); // Obtener el botón Copiar

// Función para encriptar el texto
function encriptar() {
  let texto = textarea.value;

  // Convertir a minúsculas y verificar caracteres especiales y la letra "ñ"
  texto = texto.toLowerCase();

  // Verificar si hay caracteres no permitidos
  if (/[^a-z\s]/.test(texto) || texto.includes('ñ')) {
    alert('No se puede usar caracteres especiales ni la letra "ñ".');
    return;
  }

  // Reemplazos de caracteres según las reglas
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

  // Mostrar el botón Copiar
  btnCopiar.style.display = 'block';
}

// Función para desencriptar el texto
function desencriptar() {
  let texto = textarea.value;

  // Convertir a minúsculas y verificar caracteres especiales y la letra "ñ"
  texto = texto.toLowerCase();

  // Verificar si hay caracteres no permitidos
  if (/[^a-z\s]/.test(texto) || texto.includes('ñ')) {
    alert('No se puede usar caracteres especiales ni la letra "ñ".');
    return;
  }

  // Reemplazos de caracteres según las reglas
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

    // Revisar los reemplazos de mayor a menor longitud para evitar conflictos
    for (const [clave, valor] of Object.entries(reemplazos).sort((a, b) => b[0].length - a[0].length)) {
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

  // Mostrar el botón Copiar
  btnCopiar.style.display = 'block';
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
btnCopiar.addEventListener('click', copiarTexto);s
