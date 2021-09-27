
    document.getElementById("menu").addEventListener('click', function () {
        var middle = document.getElementById("middle");
        if (middle.style.width === "0%") {
            middle.style.width = "60%";
        }
        else {
            middle.style.width = "0%";

        }
    });

    document.getElementById("search").addEventListener('click', function () {
      document.getElementById("form").style.display="block";
    });

    document.getElementById("formHide").addEventListener('click', function(){
        document.getElementById("form").style.display="none";
    });

    // window click target

  

    
    var middle = document.getElementById("middle");

    // atick animtion for navabar 

 var previus=window.pageYOffset;
window.onscroll= function(){

    var current= window.pageYOffset;
    var header_ho=document.getElementById("header_holder");

    if(current<=previus){
        header_ho.classList.add('act');
    }else{
        header_ho.classList.remove('act');
    }
    previus=current;

}

