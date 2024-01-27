import { useEffect } from "react";

function DinamicComponent() {
    console.log("El componente DINÁMICO esta actualizado");
    useEffect(() => {
        return ()=>{
            // si la página esta recibiendo notificaciones (por ejemplo)
            // haremos que nuestro código deje de recibirlas (unsubscribe)
            console.log("Hasta luego componente!");
        }
    }, [])

    return (
        <h1>This is the dinamic component</h1>
    )
}

export default DinamicComponent;