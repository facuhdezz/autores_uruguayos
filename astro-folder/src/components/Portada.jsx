const Portada = ({autor}) => {
    return (
    <article className="carousel-item flex shrink-0 w-screen">
        <img className="img-fondo h-[85vh]" src={autor.imagen} alt={`Foto de ${autor.nombre}`} />
        <div className="presentation mr-40">
            <h1>{autor.nombre}</h1>
            <h3>{autor.tags}</h3>
            <p>{autor.descripcion}<span className="referencia">{autor.referencia}</span></p>
            <button type="button" className="btn-presentation">Saber Más</button>
        </div>
    </article>
    )
}

export default Portada;
