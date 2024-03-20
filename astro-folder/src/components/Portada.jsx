const Portada = ({autor}) => {
    console.log(autor);
    return (
    <article classNameName="carousel-item">
        <img className="img-fondo" src={autor.imagen} alt={`Foto de ${autor.nombre}`} />
        <div className="presentation">
            <h1>{autor.nombre}</h1>
            <h3>{autor.tags}</h3>
            <p>{autor.descripcion}<span className="referencia">{autor.referencia}</span></p>
            <button type="button" className="btn-presentation">Saber Más</button>
        </div>
    </article>
    )
}

export default Portada;




