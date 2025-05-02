// create a new hydra-synth instance
      var hydra = new Hydra({ detectAudio: false ,
      canvas: document.getElementById("myCanvas")
      })
     //--

s0.initVideo("https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2JiZnN4bGdhOXFxbHR1c3o3MTV3MmZzMWV2eHNqY2dwdzkxa2xraiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cb7oa7io8cFcpUugZV/giphy.mp4")
s1.initVideo ("https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHpjZ2R0dGVncjVyMWJ0ZHhrdXd6YndrYW9lczIxZW5pY2U5aDd0MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/neJ0RoxbgeXf2/giphy.mp4")


  //.mask(shape(4,.4,.8).scale(.2,2).modulate(noise(3,.2)))
  

solid(2,.9,2)
//.modulate(src(s1),2)

//.invert(1)
//.color(3,2,4)
  .modulate(gradient(4,0.1,0.1) , 5)
//.modulate(o0,.1)
.mult(src(s1).mask(shape(4,.7,.4)).scale(.8),[1.2,0].smooth().fast(.5))//.scrollX([.1,-.7,.3].fast(.2)).scrollY([.3,-.1,.2].fast(.2))
.mult(src(s0).mask(shape(4,.4,.5)).scale(.6),[0,1].smooth().fast(.5))//.scrollX([.5,-.5,.8].fast(.2))

//.color(2,1,2)
  .diff(src(o0).scrollX(.02),[0,2].smooth().fast(.5))
.posterize(6)

.mask(shape(4,.1,.8))
  	.out(o0)// JavaScript source code
