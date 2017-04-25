
        function pos(){
          var numero = document.fo.valores.value;


          if(numero >= 70 && numero <=79){
            numero = document.fo.valores.value="Grado númerico C";
          }else if(numero >= 80 && numero <=89){
            numero = document.fo.valores.value="Grado númerico B";
          }else if(numero >= 90){
            numero = document.fo.valores.value="Grado númerico A";
          }else{numero <= 69
           numero = document.fo.valores.value="No presentó";
                }
      };

      function eliminar(){
        document.fo.valores.value="";
      };
