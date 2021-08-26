import {createStore} from "redux"
//createStore recibe como parametro una funcion que hace los cambios en nuestra ap

//funcion reductora

const initialState = {
    jugadores: [{
        id: 1,
        nombre: "Juan Carlitos",
        foto: "img/messi.jpeg"
    },
{
    id: 2,
    nombre: "Pepe Garcia",
    foto: "img/messi.jpeg"
},{
id: 3,
nombre: "Mario Cabra",
foto: "img/messi.jpeg"
}
],
    titulares: [],
    suplentes:[]
}

//Parametros
//state -> data almacenada actualmente
//objeto -> que cambio debembos efectuar en el estado
const reducerEntrenador = (state = initialState, action) =>{
    if (action.type === "AGREGAR_TITULAR"){
    return {
        ...state,
        titulares: state.titulares.concat(action.jugador),
        jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
    }
}

if (action.type === "AGREGAR_SUPLENTE"){
    return{
        ...state,
        suplentes: state.suplentes.concat(action.jugador),
        jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
    }
}

if (action.type === "QUITAR_TITULAR"){
    return{
        ...state,
        titulares: state.titulares.filter(j => j.id !== action.jugador.id),
        jugadores: state.jugadores.concat(action.jugador)
    }
}

if (action.type === "QUITAR_SUPLENTE"){
    return{
        ...state,
        suplentes: state.suplentes.filter(j => j.id !== action.jugador.id),
        jugadores: state.jugadores.concat(action.jugador)
    }
}

    return state
}

//createStore(funcionReductora)
export default createStore(reducerEntrenador)