import Button from './Button';

const Portada = ({autor}) => {
    const route = `../src/assets/fondos/${autor.link}`
    return (
    <article className="carousel-item flex shrink-0 w-[100dvw]">
        <img className="img-fondo h-[85vh] aspect-[716/600]" src={route} alt={`Foto de ${autor.nombre}`} />
        <div className="presentation mr-40">
            <h1>{autor.nombre}</h1>
            <h3>{autor.tags}</h3>
            <p>{autor.descripcion}<span className="referencia">{autor.referencia}</span></p>
            {/* <button type="button" className="btn-presentation">Saber Más</button> */}
            <Button btnText="Saber más" className={"mt-10 text-[1.3rem] w-[200px] h-[50px]"}/>
        </div>
    </article>
    )
}

export default Portada;
