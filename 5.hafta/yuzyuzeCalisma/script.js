var count=0;
var timer=null;

function zamanlayici()
{
    timer = setInterval(function(){
        count++;
        
       parseInt(document.getElementById("output").innerHTML) =parseInt(count);

    },1000);
    
}

 





