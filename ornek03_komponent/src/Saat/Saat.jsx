import React from 'react'
import "./Saat.css";
function Saat  () {
const tarih=new Date("July 26,2021 15:24:00");
const saatString=tarih.toLocaleTimeString();
const tarihString=tarih.toLocaleDateString();
const suAnkiSaat=tarih.getHours();
let mesaj;
const mesajStil={
    color:"",

}
if(suAnkiSaat<12){
    mesaj="Gunaydin";
    mesajStil.color="green";
}else if(suAnkiSaat<18){
    mesaj="Tunaydin";
    mesajStil.color="blue";
}else {
    mesaj="Iyi Geceler";
    mesajStil.color="red";
}
    return (
     <div className="div">
        <h1 className="tarih">TARIH:{tarihString}</h1>
        <h2 className="saat">SAAT:{saatString}</h2>
        <h2 style={mesajStil}>{mesaj}  </h2>
        <img classNmae="resim" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQssJTwfbwF2xQPr1dxBwvJE9Bjdk6GyCtHYr4pLsz6BuM3OOhSD_9aCThvKflflc8qnr2hz1M&usqp=CAc"
        alt=""/>
     </div>
    ); 
};

export default  Saat;
