import React from "react";
import ReactDOM from "react-dom";
//React'da JSX olarak adlandirilan bir soz dizimi kullanilir.
//Bu soz dizimi JS'ye benzese de bazi farkliliklari vardir.
//Icerisinde dogrudan HTML kodu kullanilabilir.



//Komponentler tanimlanirken tek bir Element(div,section,article vs.)
// ile sarmalanarak dondurulmelidir.

    //Komponentler icerisinde inline stillendirme yapilabilir.
    //Stillendirme yazim key-value seklindedir.
    //Ayrica key isimlerinde JS'de oldugu gibi camelCase kullanilir.


    //Stillendirme bir degisen olarak da tanimlanabilir ve istenildiginde kullanilabilir.
 const pStil={
     color:"purple",
     marginTop:"40px",
     fontFamily:"Tahoma",
     border:"2px solid blue",
 } ;  
function Selamla(){
    return(
    <div>
    <h1 style={{color:"red",background:"grey"}}>
    React Dersimize Hosgeldiniz.</h1>

    <p style={pStil}>Bu dersimizde React Komponentlerini Taniyacagiz.</p>
</div>
    );
}

export default Selamla;