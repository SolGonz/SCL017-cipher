import cipher from './cipher.js';

document.getElementById("pantallaPsyduck").addEventListener("click", pantallaPsyduck);
function pantallaPsyduck(){
    document.getElementById("primera-vista-psy").style.display = "block";
    document.getElementById("vista-cero").style.display = "none";
}
document.getElementById("enviarMensaje").addEventListener("click", enviarMensaje);
function enviarMensaje(){
    document.getElementById("primera-vista-psy").style.display = "none";
    document.getElementById("segunda-vista-psy").style.display = "block";
}
document.getElementById("traducirMensaje").addEventListener("click", traducirMensaje);
  function traducirMensaje(){
    document.getElementById("segunda-vista-psy").style.display = "none";
    document.getElementById("tercera-vista-psy").style.display = "block";
    let mensajeEnviado = document.getElementById("mensaje").value;
    document.querySelector("mnsj-cifrado").innerHTML =  cipher.encode(66, mensajeEnviado);
  }
document.getElementById("mensajeOriginal").addEventListener("click", mensajeOriginal);
  function mensajeOriginal(){
    document.getElementById("tercera-vista-psy").style.display = "none";
    document.getElementById("cuarta-vista-psy").style.display = "block";
    let mensajeEnviado = document.getElementById("mensaje").value;
    document.querySelector(".mnsj-original").innerHTML =  cipher.decode(3, cipher.encode(3, mensajeEnviado));
  }
document.getElementById("inicioPsy").addEventListener("click", inicioPsy);
  function inicioPsy(){
    document.getElementById("cuarta-vista-psy").style.display = "none";
    document.getElementById("vista-cero").style.display = "block";
  }
document.getElementById("pantallaPikachu").addEventListener("click", pantallaPikachu);
  function pantallaPikachu(){
    document.getElementById("primera-vista-pik").style.display = "block";
    document.getElementById("vista-cero").style.display = "none";
  }
document.getElementById("enviarMensajePik").addEventListener("click", enviarMensajePik);
  function enviarMensajePik(){
    document.getElementById("segunda-vista-pik").style.display = "block";
    document.getElementById("primera-vista-pik").style.display = "none";
   
  }
  document.getElementById("traducirMensajePik").addEventListener("click", traducirMensajePik);
  function traducirMensajePik(){
    document.getElementById("tercera-vista-pik").style.display = "block";
    document.getElementById("segunda-vista-pik").style.display = "none";
    let mensajeEnviadoPik = document.getElementById("mensaje-pik").value;
    document.querySelector(".mnsj-cifrado-pik").innerHTML =  cipher.encode(4, mensajeEnviadoPik);
  }
  document.getElementById("mensajeOriginalPik").addEventListener("click", mensajeOriginalPik)
  function mensajeOriginalPik(){
    document.getElementById("cuarta-vista-pik").style.display = "block";
    document.getElementById("tercera-vista-pik").style.display = "none";
    let mensajeEnviadoPik = document.getElementById("mensaje-pik").value;
    document.querySelector(".mnsj-original-pik").innerHTML =  cipher.decode(4,cipher.encode(4, mensajeEnviadoPik));
  }
  document.getElementById("inicioPik").addEventListener("click", inicioPik)
  function inicioPik(){
    document.getElementById("cuarta-vista-pik").style.display = "none";
    document.getElementById("vista-cero").style.display = "block";
  }
  document.getElementById("pantallaEevee").addEventListener("click", pantallaEevee)
  function pantallaEevee(){
    document.getElementById("primera-vista-eev").style.display = "block";
    document.getElementById("vista-cero").style.display = "none";
  }
  document.getElementById("enviarMensajeEev").addEventListener("click", enviarMensajeEev)
  function enviarMensajeEev(){
    document.getElementById("segunda-vista-eev").style.display = "block";
    document.getElementById("primera-vista-eev").style.display = "none";
  }
  document.getElementById("traducirMensajeEev").addEventListener("click", traducirMensajeEev)
  function traducirMensajeEev(){
    document.getElementById("tercera-vista-eev").style.display = "block";
    document.getElementById("segunda-vista-eev").style.display = "none";
    let mensajeEnviadoEev = document.getElementById("mensaje-eev").value;
    document.querySelector(".mnsj-cifrado-eev").innerHTML =  cipher.encode(5, mensajeEnviadoEev);
  }
  document.getElementById("mensajeOriginalEev").addEventListener("click", mensajeOriginalEev)
  function mensajeOriginalEev(){
    document.getElementById("cuarta-vista-eev").style.display = "block";
    document.getElementById("tercera-vista-eev").style.display = "none";
    let mensajeEnviadoEev = document.getElementById("mensaje-eev").value;
    document.querySelector(".mnsj-original-eev").innerHTML = cipher.decode(5, cipher.encode(5, mensajeEnviadoEev));
  }
  document.getElementById("inicioEev").addEventListener("click", inicioEev)
  function inicioEev(){
    document.getElementById("cuarta-vista-eev").style.display = "none";
    document.getElementById("vista-cero").style.display = "block";
  }

