jQuery(document).ready(function(){
    $.getScript('../javascript/Rot.js');
});


$(document).ready(function() {
    var $imgi = $(".disk");
        rotate(0);
        function rotate(degree) {        
            $imgi.css({ WebkitTransform: 'rotate(' + degree + 'deg)'});
            $imgi.css({ '-moz-transform': 'rotate(' + degree + 'deg)'});                      
            timer = setTimeout(function() {
                rotate(++degree);
            },5);
        }
    var count = 1;
    $( ".f1_container" ).click(function() {
        count += 1;
        if(count % 2 == 0){
            $( ".f1_card" ).animate({
                "margin-top": "30%"
            });
        }else{
            $( ".f1_card" ).animate({
                "margin-top": "0%"
            });
        }
        setTimeout(function(){
            if(count % 2 == 0){
                $( ".f1_card .disk" ).animate({
                    "top": "-200px"
                });
            }
        }, 300);
        setTimeout(function(){
        if(count % 2 != 0){
                $( ".f1_card .disk" ).animate({
                    "top": "0px"
                });
            }
        }, 50);
    });
    
});