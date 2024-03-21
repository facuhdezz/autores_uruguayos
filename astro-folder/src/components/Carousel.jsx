import Portada from "./Portada";
import Autores from "../assets/json/portadas/portadas.json";
import { useEffect, useState } from "react";

const Carousel = () => {

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
            <button className="prev-btn" onClick={prevSlide}>Prev</button>
            <button className="next-btn" onClick={nextSlide}>Next</button>
        </>
    )
}

export default Carousel;