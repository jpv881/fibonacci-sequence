

self.onmessage = function (msg) {
    calcularFibonacci(Number(msg.data));
};

function calcularFibonacci(valor) {
        let result = [];
        let fibo = 1;
        let fibo2 = 1;

        for(let i = 0; i < valor; i++) {
            result.push(fibo);
            fibo = fibo + fibo2;
            fibo2 = fibo - fibo2;
        }

        let mensaje = JSON.stringify({"iteraciones": valor, "resultado": result});
    (()=>postMessage(mensaje))();
}