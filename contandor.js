const Contador = () => {
    
    const [contador, setContador] = React.useState(0);
    const aumenta = ()=> setContador(contador + 1);
    const disminuye = ()=> setContador(contador - 1);
    
    return (
        <div>
            <h1 className={contador < 0 ? "menor": "mayor"} >Contandor : {contador}</h1>
            <hr />
            <button onClick={aumenta}>Aumentar</button>
            <button onClick={disminuye}>Disminuir</button>
        </div>
    );
};