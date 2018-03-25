let worker = new Worker("worker.js");
//let value = prompt("Número de iteraciones");
// worker.addEventListener('message', function(e){
//     //let message = JSON.parse(e.data);
// }, false);

$("#iteraciones").on("keydown", function(e){
    if(e.key === "Enter"){
        let value = Number($("#iteraciones").val());
        if(typeof(value)=== "number" && !isNaN(value) && value > 0) sendData(value);

    }
});

function sendData(value){
    worker.postMessage(value);
}

worker.addEventListener('message', function(e){
    let message = JSON.parse(e.data);
    $("#divResultados").empty();
    $("#iteraciones").val('');
    $("#divResultados").append("<div><span id='msg'>Número de iteraciones: "+message.iteraciones+"</span></div><br>");
    $("#divResultados").append("<div id='divResult'></div>")
    message.resultado.forEach((item, index)=>{
        index < message.resultado.length -1 ? $("#divResult").append("<span>"+item+", </span>") :
        $("#divResult").append("<span>"+item+"</span>");

    });
    //$("body").append("<div><span id='result'>"+message.resultado.toString()+"</span></div>");
}, false);