const output = document.getElementById('risultato');
const lista = [];
let elemento = '';

while(elemento !== 'stop' && elemento !== 'Stop' && elemento !== 'STOP'){
    elemento = prompt('Inserire prodotto, o digitare "stop" per concludere la lista ');
    lista.push(elemento);
}
lista.pop();

let msg = '';
for(let j = 0; j < lista.length; j++){
    msg += `
    <div>
        ${lista[j]}
    </div>
    `;
}

output.innerHTML = msg;