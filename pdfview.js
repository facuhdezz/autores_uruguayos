// document.addEventListener('DOMContentLoaded', async () => {

//     await setObras();
//     const buttons = document.getElementsByClassName('btn-pdf');
//     console.log(buttons)
    
//     async function pdfView(value) {
//         const url = `./pdf/${value}`;
//         const response = await fetch(url);
    
//         const blob = await response.blob();
    
//         const blobUrl = URL.createObjectURL(blob);
    
//         const newWindow = window.open();
    
//         newWindow.document.write(`
//                     <!DOCTYPE html>
//                     <html lang="es">
//                     <head>
//                         <meta charset="UTF-8">
//                         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//                         <title>Visor de PDF</title>
//                         <style>
//                             body, html {
//                                 margin: 0;
//                                 padding: 0;
//                                 overflow: hidden;
//                                 height: 100%;
//                             }
//                             embed {
//                                 width: 100%;
//                                 height: 100%;
//                             }
//                         </style>
//                     </head>
//                     <body>
//                         <embed src="${blobUrl}" type="application/pdf" width="100%" height="100%">
//                     </body>
//                     </html>
//                 `);
//         newWindow.innerWidth = newWindow.document.documentElement.scrollWidth;
//         newWindow.innerHeight = newWindow.document.documentElement.scrollHeight;
//     }
    
//     Array.from(buttons).forEach(button => {
//         button.addEventListener('click', () => {
//             pdfView(button.value);
//         });
//     });

// });
