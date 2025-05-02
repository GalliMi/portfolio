var hydra = new Hydra({
  detectAudio: false,
    canvas: document.getElementById("plantCanvas")
})

// Mover el canvas generado por Hydra al contenedor deseado

s0.initImage("https://media.istockphoto.com/id/1180581523/es/foto/follaje-calathea-hoja-tropical-ex%C3%B3tica-hoja-verde-grande-aislada-sobre-fondo-blanco-con.jpg?s=612x612&w=0&k=20&c=l4M2Y9Tkm3cPBeqz6NRVH228BUfYaMOd2DlnOe-eUmc=")
let imagen = src(s0)

voronoi(2,.8,1).color(1,1,1).modulate(src(s0).rotate(-1)//.mask(4,.4)
                                  .scale(.7).modulate(voronoi(.4,.2)),1).rotate([-.1, .1].smooth()).scrollX(1,.1)
.diff(o0,2)
  .add(src(s0).scale(.9,.8).modulate(noise(.5,.04)),2)
.invert(1)
.color(.8,2,.3)
  .out(o0)