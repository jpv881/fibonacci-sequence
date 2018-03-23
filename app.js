let worker = new Worker("worker.js");
let value = prompt("Número de iteraciones");
// worker.addEventListener('message', function(e){
//     //let message = JSON.parse(e.data);
// }, false);

worker.postMessage(value);

worker.addEventListener('message', function(e){
    let message = JSON.parse(e.data);
    $("body").append("<div><span id='msg'>Número de iteraciones: "+message.iteraciones+"</span></div><br>");
    $("body").append("<div id='divResult'></div>")
    message.resultado.forEach((item, index)=>{
        index < message.resultado.length -1 ? $("#divResult").append("<span>"+item+", </span>") :
        $("#divResult").append("<span>"+item+"</span>");

    });
    //$("body").append("<div><span id='result'>"+message.resultado.toString()+"</span></div>");
}, false);