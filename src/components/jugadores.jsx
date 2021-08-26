import React from "react"
import {connect} from "react-redux"

const Jugadores = ({jugadores, agregarTitular, agregarSuplente}) => (
    <section>
        <h2>Jugadores</h2>
        <div className="contenedor-jugadores">
            {
                jugadores.map(j => (
                    <article className="jugador" key={j.id}>
                    <img src={j.foto} alt={j.nombre} />
                    <h3>{j.nombre}</h3>
                    <button onClick={() => agregarTitular(j)}>Titular</button>
                    <button onClick={() => agregarSuplente(j)}>Suplente</button>
                </article>
                ))
            }
            
         
        </div>
    </section>
)
const mapStateToProps = state => ({
    jugadores: state.jugadores
})
const mapDispatchToProps = dispatch => ({
    agregarTitular(jugador){
        dispatch({ //creo un objeto en el dispatch al que invoco
            type: "AGREGAR_TITULAR",
            jugador
        })
    },
    agregarSuplente(jugador){
        dispatch({
            type: "AGREGAR_SUPLENTE",
            jugador
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Jugadores)


