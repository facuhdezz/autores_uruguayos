document.addEventListener('DOMContentLoaded', async () => {

    const section = document.getElementsByClassName('todas');
    console.log(section)
    
    async function fetchObras() {
        try {
            let response = await fetch('./json/obras.json');
            let obras = await response.json();
            return obras;
        } catch (err) {
            console.log(err);
        }
    }
    
    async function setObras() {
        let obras = await fetchObras();
        let htmlContentToAppend = '';
        obras.forEach(element => {
            htmlContentToAppend += `
            <article>
                <div class="container-grid">
                <img src="${element.imagen}" alt="${element.nombre} - Portada">
                <div class="gradient">
                    <h3 class="title-target">${element.nombre}</h3>
                    <h4 class="subtitle-target">${element.autor}</h4>
                    <p class="info-target">${element.categoría} | ${element.año}</p>
                    <button id="buton${element.pdf}" type="button" class="btn btn-pdf" name="${element.pdf}">Ver PDF</button>
                    <button type="button" class="btn btn-info">Más info</button>
                </div>
                </div>
            </article>
            `;
        });
        section[0].innerHTML = htmlContentToAppend;
    }
    
    await setObras();
    
    const buttons = document.getElementsByClassName('btn-pdf');
    console.log(buttons)
        
        async function pdfView(value) {
            const url = `${value}`;
            const response = await fetch(url);
        
            const blob = await response.blob();
        
            const blobUrl = URL.createObjectURL(blob);
        
            const newWindow = window.open();
        
            newWindow.document.write(`
                        <!DOCTYPE html>
                        <html lang="es">
                        <head>
                            <meta charset="UTF-8">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <title>Visor de PDF</title>
                            <style>
                                body, html {
                                    margin: 0;
                                    padding: 0;
                                    overflow: hidden;
                                    height: 100%;
                                }
                                embed {
                                    width: 100%;
                                    height: 100%;
                                }
                            </style>
                        </head>
                        <body>
                            <embed src="${blobUrl}" type="application/pdf" width="100%" height="100%">
                        </body>
                        </html>
                    `);
            newWindow.innerWidth = newWindow.document.documentElement.scrollWidth;
            newWindow.innerHeight = newWindow.document.documentElement.scrollHeight;
        }
        
        for (let button of buttons){
            button.addEventListener('click', () => {
                pdfView(button.name);
            });
        }

});



