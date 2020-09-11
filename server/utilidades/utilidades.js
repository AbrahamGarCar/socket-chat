const crearMensaje = (nombre, mensaje) => {
    return {
        nombre,
        mensaje,
        fecha: new Date().getDate()
    };
}

module.exports = crearMensaje;