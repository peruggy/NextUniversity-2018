var IVA = 0.16
var Pedido = {
  cliente: "Federico Gutierrez",
  productos: ["Manzanas", "Refrescos", "Azucar", "Sal", "Lechugas frescas"],
  precios: [500, 4000, 2500, 2000, 5000],
  cantidad: [20, 10, 3, 3, 10]
}

var resultado = 0
var premio = ""
var valorTotal = 0

// Algoritmo de calculo
for (var contador in Pedido.productos){
  resultado= resultado + (Pedido.precios[contador] * Pedido.cantidad[contador])
}
valorTotal= resultado + (resultado * IVA);

if (valorTotal>10000) {
  premio="Tiene derecho a un premio"
}
else {
  premio="No tiene derecho a un premio"
}
button = document.getElementById('calculo')
button.addEventListener('click', function(){

alert("Señor(a): " + Pedido.cliente + ", el valor total de su pedido es " + resultado + " y aplicando el iva el total es: " +valorTotal+" y debido al valor de tu compra, "+premio);

})
