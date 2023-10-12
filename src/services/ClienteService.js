import api from "../config/axios";

export default {
    obtenerClientes() {
        return api.get('/clientes')
    },
}