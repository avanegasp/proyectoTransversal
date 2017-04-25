
  function valorInicial(){

    var valor=document.getElementById("valorInicial").value;
  };

  function anos(){
    var anitos = document.getElementById("anos").value;
  };

  function tasa(){
    var tasaInicial = document.getElementById("tasa").value / 100;
  }

  function convertidor (){
    var valor=document.getElementById("valorInicial").value;
    var anitos = document.getElementById("anos").value;
    var tasaInicial = document.getElementById("tasa").value / 100;

    var resultado= valor * tasaInicial / anitos;
    var totalAPagar=Math.floor(resultado)
    document.getElementById("total").value= "$" + totalAPagar + " durante " + anitos + " año(s)";
  }

  function eliminar(){
    document.getElementById("valorInicial").value="";
    document.getElementById("anos").value="";
    document.getElementById("tasa").value="";
    document.getElementById("total").value="";
  }
