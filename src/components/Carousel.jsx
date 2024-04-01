import Portada from "./Portada";
import Autores from "../assets/json/portadas/portadas.json";
import { useEffect, useState } from "react";
import Arrow from "../assets/iconos/arrowW.svg";

const Carousel = () => {
    console.log(Arrow);

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex(prevCurrentIndex => (prevCurrentIndex === slides.length - 1 ? 0 : prevCurrentIndex + 1));
    };

    const prevSlide = () => {
        setCurrentIndex(prevCurrentIndex => (prevCurrentIndex === 0 ? slides.length - 1 : prevCurrentIndex - 1));
    };

    const slides = ['Slide 1', 'Slide 2', 'Slide 3'];

    useEffect(() => {
        const intervalSlide = setInterval(nextSlide, 20000);
        return () => clearInterval(intervalSlide);
      }, []);

    return (
        <>
            <section className="carousel bg-black w-screen overflow-hidden">
                <div className="carousel-items flex w-screen transition duration-700" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {Autores.map((autor) => <Portada autor={autor} />)}
                </div>
            </section>
            <button className="prev-btn" onClick={prevSlide}><img className="w-10 hover:w-12 duration-100 rotate-180" src={Arrow.src} /></button>
            <button className="next-btn" onClick={nextSlide}><img className="w-10 hover:w-12 duration-100" src={Arrow.src} /></button>
        </>
    )
}

export default Carousel;