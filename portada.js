const container = document.querySelector('header');

let currentSectionIndex = 0;

async function fetchPortadas() {
    try {
        let response = await fetch('./json/portadas/portadas.json');
        let data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
    }
}

async function setArticles() {
    let data = await fetchPortadas();
    let htmlContentToAppend = '';
    data.forEach(element => {
        htmlContentToAppend += `
        <section id="section-${element.id}" class="section-p">
            <img class="img-fondo" src="${element.imagen}" alt="Foto de ${element.nombre}">
            <div class="presentation">
                <h1>${element.nombre}</h1>
                <h3>${element.tags}</h3>
                <p>${element.descripcion}<span class="referencia">${element.referencia}</span></p>
                <button type="button" class="btn-presentation">Saber Más</button>
            </div>
        </section>
        `;
    });
    container.innerHTML = htmlContentToAppend;

    showNextSection();
}

function showNextSection() {
    const sections = document.getElementsByClassName('section-p');

    for (let i = 0; i < sections.length; i++) {
        sections[i].classList.add('d-none');
    }

    sections[currentSectionIndex].classList.remove('d-none');

    currentSectionIndex = (currentSectionIndex + 1) % sections.length;
}

setArticles();

const intervalId = setInterval(showNextSection, 4000); //20000




