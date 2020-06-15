<template>
    <v-row>
        <v-col>
        <v-date-picker
          v-model="date"
          :allowed-dates="allowedDates"
          class="mt-3"
          :min="minimo"
          :max="maximo"
          locale="es"
        ></v-date-picker>
        </v-col>
    </v-row>
</template>

<script>
    

            var tt=[31,29,31,30,31,30,31,31,30,31,30,31];
            var el =[]; //["2018-03-03", "2018-03-05","2018-03-11"]
            var cont=3;
            var dos=1;
            var y=0;
            var cont_mes=1;
            var f= new Date();
            var año_hoy=2020;//f.getFullYear();
            var mes_hoy=3-1;//(f.getMonth()) ;
            var dia_hoy=2;//f.getDate();
            var copia=0;
            var copia_dos=0;
            var minimo=0;
            var maximo=0;
            var copia_contador=0;
            var minimi="";
            var maximi="";
            while(y<12)
            {
                for(var i=1;i<=tt[y];i++)
                {
                  if((i==dia_hoy)&&(y==mes_hoy))
                    {
                      copia_contador = cont;
                    }
                  if(cont<=5)
                  {
                    if(cont==1)
                    {
                        copia=i-4;
                      copia_dos=i+2;
                    }
                    if(cont==2)
                    {
                      copia=i-4;
                      copia_dos=i+2;
                    }
                    if(cont==3)
                    {
                      copia=i-2;
                      copia_dos=i+2;
                    }
                    if(cont==4)
                    {
                      copia=i-2;
                      copia_dos=i+4;
                    }
                    if(cont==5)
                    {
                      copia=i-2;
                      copia_dos=i+4;
                    }
                    cont++;
                       if(y+1>9)
                       {
                            var cad="2020-"+(y+1);
                       }
                       else
                       {
                            var cad="2020-0"+(y+1);
                       }
                       if(i>9)
                       {
                            var cad=cad+"-"+i;
                       }
                       else
                       {
                            var cad=cad+"-0"+i;
                       }
                    el.push(cad);
                 }
                  else
                 {
                       if(dos<=1)
                       {
                           dos++;
                     
                       }
                   else
                     {
                       cont=1;
                       dos=1;
                     }
                 }
                  console.log(""+i+" == "+dia_hoy+" "+y+" = "+mes_hoy);
                  if((i==dia_hoy)&&(y==mes_hoy))
                  {
                    console.log("aqui es "+ copia+" "+copia_dos)
                    maximo=copia_dos;
                    minimo=copia;
                  }
                }
        y++;
}
var mes_actual=(mes_hoy+1)
console.log("minimo ",minimo);
console.log("maximosss ",maximo);
console.log("mes ",mes_actual);
console.log("copia_contador ",copia_contador);

var davidminimo="";
var davidmaximo="";
var sw=0;

//****************************************PREGUNTAMOS POR FEBRERO***********************************/
if(mes_actual==2)
{
  if(año_hoy%4==0)
  {
    if((dia_hoy==27)&&((copia_contador==4)||(copia_contador==5)))
    {
      maximo=año_hoy+"-"+(mes_actual+1)+"-02";
      sw=1;
    }

    if((dia_hoy==28)&&((copia_contador==1)||(copia_contador==2)||(copia_contador==3)))
    {
      maximo=año_hoy+"-"+(mes_actual+1)+"-01";
      sw=1;
    }
    if((dia_hoy==28)&&((copia_contador==4)||(copia_contador==5)))
    {
      maximo=año_hoy+"-"+(mes_actual+1)+"-03";
      sw=1;
    }

    if((dia_hoy==29)&&((copia_contador==1)||(copia_contador==2)||(copia_contador==3)))
    {
      maximo=año_hoy+"-"+(mes_actual+1)+"-02";
      sw=1;
    }
    if((dia_hoy==29)&&((copia_contador==4)||(copia_contador==5)))
    {
      maximo=año_hoy+"-"+(mes_actual+1)+"-04";
      sw=1;
    }
    davidmaximo=maximo;
    /*****************************es para aqui*********************************/


    
    if((dia_hoy==1)&&((copia_contador==1)||(copia_contador==2)))
    {
      minimo=año_hoy+"-"+(mes_actual-1)+"-28";
      sw=1;
    }
    if((dia_hoy==1)&&((copia_contador==3)||(copia_contador==4)||(copia_contador==5)))
    {
      minimo=año_hoy+"-"+(mes_actual-1)+"-30";
      sw=1;
    }
    if((dia_hoy==2)&&((copia_contador==1)||(copia_contador==2)))
    {
      minimo=año_hoy+"-"+(mes_actual-1)+"-29";
      sw=1;
    }
    if((dia_hoy==2)&&((copia_contador==3)||(copia_contador==4)||(copia_contador==5)))
    {
      minimo=año_hoy+"-"+(mes_actual-1)+"-30";
      sw=1;
    }

     if((dia_hoy==3)&&((copia_contador==1)||(copia_contador==2)))
    {
      minimo=año_hoy+"-"+(mes_actual-1)+"-30";
      sw=1;
    }
  davidminimo=minimo;
  }
  else
  {
    if((dia_hoy==27)&&((copia_contador==1)||(copia_contador==2)||(copia_contador==3)))
    {
      maximo=año_hoy+"-"+(mes_actual+1)+"-01";
      sw=1;
    }
    if((dia_hoy==27)&&((copia_contador==4)||(copia_contador==5)))
    {
      maximo=año_hoy+"-"+(mes_actual+1)+"-03";
      sw=1;
    }

    if((dia_hoy==28)&&((copia_contador==1)||(copia_contador==2)||(copia_contador==3)))
    {
      maximo=año_hoy+"-"+(mes_actual+1)+"-02";
      sw=1;
    }
    if((dia_hoy==28)&&((copia_contador==4)||(copia_contador==5)))
    {
      maximo=año_hoy+"-"+(mes_actual+1)+"-04";
      sw=1;
    }
    davidmaximo=maximo;
  }
}
//****************************************PREGUNTAMOS POR FEBRERO***********************************/

//****************************************SI ES UN MES CON 30 DIAS***********************************/
//CASO ABRIL
if(tt[mes_hoy]==30)
{  

  if((dia_hoy==27)&&(copia_contador==4))
  {
    maximo=año_hoy+"-"+(mes_actual+1)+"-01";
    sw=1;
  }

  if((dia_hoy==27)&&(copia_contador==5))
  {
    maximo=año_hoy+"-"+(mes_actual+1)+"-01";
    sw=1;
  }


  if((dia_hoy==28)&&(copia_contador==4))
  {
    maximo=año_hoy+"-"+(mes_actual+1)+"-02";
    sw=1;
  }

  if((dia_hoy==28)&&(copia_contador==5))
  {
    maximo=año_hoy+"-"+(mes_actual+1)+"-02";
    sw=1;
  }


   if((dia_hoy==29)&&((copia_contador==1)||(copia_contador==2)||(copia_contador==3)))
  {
    maximo=año_hoy+"-"+(mes_actual+1)+"-01";
    sw=1;
  }
  if((dia_hoy==29)&&((copia_contador==4)||(copia_contador==5)))
  {
    maximo=año_hoy+"-"+(mes_actual+1)+"-03";
    sw=1;
  }

  if((dia_hoy==30)&&((copia_contador==1)||(copia_contador==2)||(copia_contador==3)))
  {
    maximo=año_hoy+"-"+(mes_actual+1)+"-02";
    sw=1;
  }
  if((dia_hoy==30)&&((copia_contador==4)||(copia_contador==5)))
  {
    maximo=año_hoy+"-"+(mes_actual+1)+"-04";
    sw=1;
  }
  davidmaximo=maximo;
/*************************************aparte dias 1 2 3***********************************/

    
    if((dia_hoy==1)&&((copia_contador==1)||(copia_contador==2)))
    {
      minimo=año_hoy+"-"+(mes_actual-1)+"-28";
      sw=1;
    }
    if((dia_hoy==1)&&((copia_contador==3)||(copia_contador==4)||(copia_contador==5)))
    {
      minimo=año_hoy+"-"+(mes_actual-1)+"-30";
      sw=1;
    }

    if((dia_hoy==2)&&((copia_contador==1)||(copia_contador==2)))
    {
      minimo=año_hoy+"-"+(mes_actual-1)+"-29";
      sw=1;
    }
    if((dia_hoy==2)&&((copia_contador==3)||(copia_contador==4)||(copia_contador==5)))
    {
      minimo=año_hoy+"-"+(mes_actual-1)+"-31";
      sw=1;
    }

    if((dia_hoy==3)&&(copia_contador==1))
    {
      minimo=año_hoy+"-"+(mes_actual-1)+"-29";
      sw=1;
    }
    if((dia_hoy==3)&&(copia_contador==2))
    {
      minimo=año_hoy+"-"+(mes_actual-1)+"-30";
      sw=1;
    }
    davidminimo=minimo;

}
//****************************************FIN ES UN MES CON 30 DIAS***********************************/


//****************************************SI ES UN MES CON 31 DIAS***********************************/
//CASO mayo
if(tt[mes_hoy]==31)
{
  if((dia_hoy==27)&&(copia_contador==4))
  {
    maximo=año_hoy+"-"+(mes_actual+1)+"-02";
    sw=1;
  } 

   if((dia_hoy==27)&&(copia_contador==5))
  {
    maximo=año_hoy+"-"+(mes_actual+1)+"-01";
    sw=1;
  } 

  if((dia_hoy==28)&&(copia_contador==4))
  {
    maximo=año_hoy+"-"+(mes_actual+1)+"-01";
    sw=1;
  } 

   if((dia_hoy==28)&&(copia_contador==5))
  {
    maximo=año_hoy+"-"+(mes_actual+1)+"-01";
    sw=1;
  }  

   if((dia_hoy==29)&&(copia_contador==4))
  {
    maximo=año_hoy+"-"+(mes_actual+1)+"-02";
    sw=1;
  }
 
  if((dia_hoy==29)&&(copia_contador==5))
  {
    maximo=año_hoy+"-"+(mes_actual+1)+"-02";
    sw=1;
  }

   if((dia_hoy==30)&&((copia_contador==1)||(copia_contador==2)||(copia_contador==3)))
  {
    maximo=año_hoy+"-"+(mes_actual+1)+"-01";
    sw=1;
  }
  if((dia_hoy==30)&&((copia_contador==4)||(copia_contador==5)))
  {
    maximo=año_hoy+"-"+(mes_actual+1)+"-03";
    sw=1;
  }

  if((dia_hoy==31)&&((copia_contador==1)||(copia_contador==2)||(copia_contador==3)))
  {
    maximo=año_hoy+"-"+(mes_actual+1)+"-02";
    sw=1;
  }
  if((dia_hoy==31)&&((copia_contador==4)||(copia_contador==5)))
  {
    maximo=año_hoy+"-"+(mes_actual+1)+"-04";
    sw=1;
  }
  davidmaximo=maximo;
  /*************************************aparte dias 1 2 3***********************************/

    
    if((dia_hoy==1)&&((copia_contador==1)||(copia_contador==2)))
    {
      minimo=año_hoy+"-"+(mes_actual-1)+"-28";
      sw=1;
    }
    if((dia_hoy==1)&&((copia_contador==3)||(copia_contador==4)||(copia_contador==5)))
    {
      minimo=año_hoy+"-"+(mes_actual-1)+"-29";
      sw=1;
    }

    if((dia_hoy==2)&&((copia_contador==1)||(copia_contador==2)))
    {
      minimo=año_hoy+"-"+(mes_actual-1)+"-29";
      sw=1;
    }
    if((dia_hoy==2)&&((copia_contador==3)||(copia_contador==4)||(copia_contador==5)))
    {
      minimo=año_hoy+"-"+(mes_actual-1)+"-30";
      sw=1;
    }

    if((dia_hoy==3)&&((copia_contador==1)||(copia_contador==2)))
    {
      minimo=año_hoy+"-"+(mes_actual-1)+"-29";
      sw=1;
    }
    
    if((dia_hoy==4)&&((copia_contador==1)||(copia_contador==2)))
    {
      minimo=año_hoy+"-"+(mes_actual-1)+"-30";
      sw=1;
    }

    davidminimo=minimo;
    
}
//****************************************FIN ES UN MES CON 31 DIAS***********************************/
if(davidmaximo<=9)
{
  if(sw==1)
  {
    maximo=davidmaximo;
  }
  else
  {
    maximo=año_hoy+"-"+mes_actual+"-0"+davidmaximo;
  }
  
}
else
{
  if(sw==1)
  {
    maximo=davidmaximo;
  }
  else
  {
    maximo=año_hoy+"-"+mes_actual+"-"+davidmaximo;
  }
}

if(davidminimo<=9)
{
  if(sw==1)
  {
    minimo=davidminimo;
  }
  else
  {
    minimo=año_hoy+"-"+mes_actual+"-0"+davidminimo;
  }
}
else
{
    if(sw==1)
  {
    minimo=davidminimo;
  }
  else
  {
    minimo=año_hoy+"-"+mes_actual+"-"+davidminimo;
  }
}


console.log("minimo desp ",minimo);
console.log("maximo desp ",maximo);

export default 
{
    data: () => ({
    date: f.getFullYear() + "-" +(mes_hoy +1) + "-" + f.getDate(),//'2020-01-31'
    minimo: minimi, //f.getFullYear() + "-0" +(mes_hoy +1) + "-" + disminuye,
    maximo: maximi//f.getFullYear() + "-0" +(mes_hoy+etmes+1) + "-0" + aumenta
  }),
  created:function() 
        {
             
        }, 

  methods: {
    allowedDates: val => el.indexOf(val) !== -1
  }
 }


</script>