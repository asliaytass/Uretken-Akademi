var pizzaFiyat, girilenKod,promosyon;
const indirimKodu="PROMOSYON";
var liste, secilen;


document.addEventListener("click",TutarHesapla);

 function TutarHesapla(){
  liste= document.getElementById("pizzaBoy");
  secilen=liste[liste.selectedIndex].value;
  pizzaFiyat=Number(secilen);


  liste=document.getElementsByName("grupEkMalzeme");
  for ( var i = 0; i < liste.length; i++) {
    if (liste[i].checked) {
        pizzaFiyat=pizzaFiyat+5 ;
      
    }
   
  }

  girilenKod=document.getElementById("indirimKodu").value;
  
  if (indirimKodu==girilenKod) {
    pizzaFiyat=pizzaFiyat-20;
  }
  
//    else if (indirimKodu!= girilenKod && girilenKod!==" ")
//    {
//     promosyon = document.getElementById("promosyon").innerHTML="Promosyon Kodu Geçersiz";
//      pizzaFiyat=pizzaFiyat;
//    }
//   else{
//     pizzaFiyat=pizzaFiyat;
//   }
  

  document.getElementById("sonuc").innerHTML="Ödenecek Tutar :  "+pizzaFiyat + " TL";
}

function SiparisTamamla()
{
      alert("Siparişiniz Tamamlanmıştır. Afiyet olsun");
}


