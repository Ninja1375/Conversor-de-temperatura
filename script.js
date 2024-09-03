function converter() {
 // Converter Celsius para Fahrenheit
 let celsius = parseFloat(document
  .getElementById('celsiusInput')
  .value);
 let fahrenheitFromCelsius = (celsius *
  9 / 5) + 32;
 document.getElementById(
   'fahrenheitOutput').value =
  fahrenheitFromCelsius.toFixed(2);

 // Converter Fahrenheit para Celsius
 let fahrenheit = parseFloat(document
  .getElementById('fahrenheitInput')
  .value);
 let celsiusFromFahrenheit = (
  fahrenheit - 32) * 5 / 9;
 document.getElementById(
   'celsiusOutput').value =
  celsiusFromFahrenheit.toFixed(2);
}

function reiniciar() {
 // Limpar todos os campos de input e output
 document.getElementById(
  'celsiusInput').value = '';
 document.getElementById(
  'fahrenheitOutput').value = '';
 document.getElementById(
  'fahrenheitInput').value = '';
 document.getElementById(
  'celsiusOutput').value = '';
}
