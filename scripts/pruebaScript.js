// Creamos el canvas
const myCanvas = document.createElement("canvas")
myCanvas.width = window.innerWidth
myCanvas.height = window.innerHeight

// Lo agregamos al contenedor
document.getElementById("hydra-container").appendChild(myCanvas)

// Creamos Hydra usando ese canvas
const hydra = new Hydra({
  canvas: myCanvas
})

// Probamos algo básico
osc(10,0.1,1).out()
// JavaScript source code
