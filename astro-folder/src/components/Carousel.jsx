import Portada from "./Portada";
import Autores from "../assets/json/portadas/portadas.json";
import { useState } from "react";

const Carousel = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex(prevIndex => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    };

    const prevSlide = () => {
        setCurrentIndex(prevIndex => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    };

    const slides = ['Slide 1', 'Slide 2', 'Slide 3'];

    return (
        <section className="carousel">
            <div className="carousel-items" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {Autores.map((autor, index) => <Portada key={index} autor={autor} />)}
            </div>
            <button class="prev-btn" onClick={prevSlide}>Prev</button>
            <button class="next-btn" onClick={nextSlide}>Next</button>
        </section>
    )
}

export default Carousel;