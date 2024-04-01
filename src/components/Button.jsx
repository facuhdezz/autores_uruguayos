import { useEffect } from "react";

const Button = ({ btnText, className, url}) => {
    
    const pdfView = () => {
        fetch(`../../src/assets/${url}`)
            .then(res => res.blob())
            .then(blob => {
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
            })
    }

    return (<button onClick={url&&pdfView} type="button" className={`btn-presentation ${className}`}>{btnText}</button>)
}

export default Button;