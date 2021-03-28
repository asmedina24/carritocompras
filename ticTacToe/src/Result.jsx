import React from 'react'
import './Style.css'


const CIRCLE = 'CIRCLE';
const CROSS = 'CROSS';




function Result ({winner, reset}) {
return (
    <div className="result">
       {winner === CIRCLE && 'EL circulo ganó'}
       {winner === CROSS && 'La cruz ganó'}
       {winner === 'Empate' && 'Empate'}
       <button className="btn btn-secondary" onClick={reset}>Reiniciar</button>
        
    </div>
)
}

export default Result;