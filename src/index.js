function pantallaPsyduck(){
    document.getElementById("primera-vista-psy").style.display = "block";
    document.getElementById("vista-cero").style.display = "none";
}
function enviarMensaje(){
    document.getElementById("primera-vista-psy").style.display = "none";
    document.getElementById("segunda-vista-psy").style.display = "block";
    mensajeEnviado = document.getElementById("mensaje").value;
}
  function enviarMensaje(){
    document.getElementById("primera-vista-psy").style.display = "none";
    document.getElementById("segunda-vista-psy").style.display = "block";
    mensajeEnviado = document.getElementById("mensaje").value;
  }
  
  function traducirMensaje(){
    document.getElementById("segunda-vista-psy").style.display = "none";
    document.getElementById("tercera-vista-psy").style.display = "block";
    document.querySelector(".mnsj-cifrado").innerHTML =  cipher.encode(3, mensajeEnviado);
  }
  
  function mensajeOriginal(){
    document.getElementById("tercera-vista-psy").style.display = "none";
    document.getElementById("cuarta-vista-psy").style.display = "block";
    document.querySelector(".mnsj-original").innerHTML =  mensajeEnviado;
  }
  function inicioPsy(){
    document.getElementById("cuarta-vista-psy").style.display = "none";
    document.getElementById("vista-cero").style.display = "block";
  }
  
  function pantallaPikachu(){
    document.getElementById("primera-vista-pik").style.display = "block";
    document.getElementById("vista-cero").style.display = "none";
  }
  
  function enviarMensajePik(){
    document.getElementById("segunda-vista-pik").style.display = "block";
    document.getElementById("primera-vista-pik").style.display = "none";
    mensajeEnviadoPik = document.getElementById("mensaje-pik").value;
  }
  
  function traducirMensajePik(){
    document.getElementById("tercera-vista-pik").style.display = "block";
    document.getElementById("segunda-vista-pik").style.display = "none";
    document.querySelector(".mnsj-cifrado-pik").innerHTML =  cipher.encode(4, mensajeEnviadoPik);
  }
  
  function mensajeOriginalPik(){
    document.getElementById("cuarta-vista-pik").style.display = "block";
    document.getElementById("tercera-vista-pik").style.display = "none";
    document.querySelector(".mnsj-original-pik").innerHTML =  cipher.decode(4,cipher.encode(4, mensajeEnviadoPik));
  
  }
  
  function inicioPik(){
    document.getElementById("cuarta-vista-pik").style.display = "none";
    document.getElementById("vista-cero").style.display = "block";
  }
  function pantallaEevee(){
    document.getElementById("primera-vista-eev").style.display = "block";
    document.getElementById("vista-cero").style.display = "none";
  }
  function enviarMensajeEev(){
    document.getElementById("segunda-vista-eev").style.display = "block";
    document.getElementById("primera-vista-eev").style.display = "none";
    mensajeEnviadoEev = document.getElementById("mensaje-eev").value;
  }
  
  function traducirMensajeEev(){
    document.getElementById("tercera-vista-eev").style.display = "block";
    document.getElementById("segunda-vista-eev").style.display = "none";
    document.querySelector(".mnsj-cifrado-eev").innerHTML =  cipher.encode(5, mensajeEnviadoEev);
  }
  
  function mensajeOriginalEev(){
    document.getElementById("cuarta-vista-eev").style.display = "block";
    document.getElementById("tercera-vista-eev").style.display = "none";
    document.querySelector(".mnsj-original-eev").innerHTML = mensajeEnviadoEev;
  }
  
  function inicioEev(){
    document.getElementById("cuarta-vista-eev").style.display = "none";
    document.getElementById("vista-cero").style.display = "block";
  }

// import cipher from './cipher.js';
