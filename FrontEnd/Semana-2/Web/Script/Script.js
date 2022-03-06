$(function(){

    //Slideshow

    function slideShow (){
        $(".slides").animate({
            left : "-100%"
        }, 500, function(){
            $(this).css({ left : 0 });
            $(this).append( $(this).find(">div").eq(0));
        });
    }
    setInterval(slideShow, 3000);

    //Modal

    $("button.plo").on("click", function(){
        $("#modal").stop(true).fadeIn(250);
    });
    $("button.ord").on("click", function(){
        $("#modal").stop(true).fadeOut(250);
    });

    //Inventory

    $("button.inv").on("click", function(){
        let answer = prompt('Enter the password', '');
        if (answer == 'bonami'){$(".ck").fadeIn(250)};
    });
    $("button.ck").on("click", function(){
        $(".ck").stop(true).fadeOut(250);
    });

    //Contact

});

/*function save(){
    
    var _nom = document.getElementById("I1").value;
    var _ape = document.getElementById("I2").value;
    var _ema = document.getElementById("I3").value;
    var _phone = document.getElementById("I4").value;
    var _inst = document.getElementById("I5").value;

    var fila="<tr><td>"+_nom+"</td><td>"+_ape +"</td><td>"+_ema +"</td></tr>"+_phone +"</td><td>"+_inst +"</td></tr>";

    var btn = document.createElement("TR");
    btn.innerHTML=fila;
    document.getElementById("tab").appendChild(btn);
}*/