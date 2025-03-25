/*Generador de reportes del sistema
        Al ejecutarlo da flag, nombre del archivo: fecha.JSON
        date, time, kernel, optime, memory, cpu, SO
*/
const os = require("os");
const info = {
    "Sistema Operativo": os.type(),
    "Memoria libre": os.freemem(),
    "HostName": os.hostname(),
    "Versión": os.version()
}
console.table(info);