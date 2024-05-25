// This is a JavaScript file

$(document).on("click","#alerta",function(){

    function retorno(){   
    }
    navigator.notification.alert("!!!ME AJUDAAAAAAAAA!!!",retorno,"AVISO!","ACEITO?");
});
$(document).on("click","#confirma",function(){
    function confirma(buttonIndex){
        if(buttonIndex  ==  "1"){
            navigator.notification.alert("Escolheu a opçao A");
        }else{
            navigator.notification.alert("Escolheu a opçao B");
        }
    }
    navigator.notification.confirm("Escolha A ou B",confirma,"Escolha:",['A','B']);
});
$(document).on("click","#beep",function(){
    navigator.notification.beep(4);
});