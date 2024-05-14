import { useState, useEffect } from 'react'


export const Counter = () => {
// valor de inicio y funcion  de crecimiento
    const [count,setCount] = useState(0)
    useEffect(()=>{
        alert ("Cambio el contador a " + count);
    }, [count]);

    return(
        <>
        <h1>Mi componente</h1>
        <p>Numero: {count}</p>
        <button onClick={()=>setCount(count-1)}>-</button>
        <button onClick={()=>setCount(count+1)}>+</button>
        </>
    )
}

export const Alert = () => {
    let handleAlert = () => {
        alert('Me hiciste click')
    }

    return(
        <button onClick={handleAlert}>No me toques</button>
    )
}