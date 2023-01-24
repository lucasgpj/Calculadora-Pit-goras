function pita(){
    var co = document.getElementById("co").value 
    var ca = document.getElementById("ca").value
    var res = document.getElementById ("resultado");

    if (!co){
        res.innerHTML="Insira um valor ao Cateto Oposto"
    }
    else if (!ca){
        res.innerHTML="Insira um valor ao Cateto Adjacente"

    }
    else if (ca <= 0 || co <= 0) {
        res.innerHTML="Entre com um valor maior que 0"
    }
    else{
        var pt = Math.hypot(co,ca)
        res.innerHTML=pt.toFixed(3)

    }
    

   
}




