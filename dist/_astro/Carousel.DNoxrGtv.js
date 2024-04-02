import{j as e,B as l}from"./Button.BHXX_ACv.js";import{r as t}from"./index.NEDEFKed.js";const d=({autor:s})=>{const r=`../src/assets/fondos/${s.link}`;return e.jsxs("article",{className:"carousel-item flex shrink-0 w-[100dvw]",children:[e.jsx("img",{className:"img-fondo h-[85vh] aspect-[716/600]",src:r,alt:`Foto de ${s.nombre}`}),e.jsxs("div",{className:"presentation mr-40",children:[e.jsx("h1",{children:s.nombre}),e.jsx("h3",{children:s.tags}),e.jsxs("p",{children:[s.descripcion,e.jsx("span",{className:"referencia",children:s.referencia})]}),e.jsx(l,{btnText:"Saber más",className:"mt-10 text-[1.3rem] w-[200px] h-[50px]"})]})]})},m=[{id:1,nombre:"Horacio Quiroga",tags:"CUENTISTA | DRAMATURGO | POETA",descripcion:"Nacido en la ciudad de Salto el 31 de diciembre de 1878, Quiroga es uno de los más reconocidos cuentistas latinoamericanos. El escritor desarrolló gran parte de su obra viviendo en Argentina, donde su estancia en la selva misionera y sus duras experiencias de vida lo llevarían a narrar los rasgos más temibles de la misma.",referencia:"",carousel:"active",link:"imagen_quiroga_1.webp",imagen:"https://firebasestorage.googleapis.com/v0/b/netshop-c71bf.appspot.com/o/au%2Fimagen_quiroga_1.webp?alt=media&token=e65bd6f2-43ea-4a6b-88fa-2dd5df5dd3a1"},{id:2,nombre:"Mario Benedetti",tags:"PERIODISTA | POETA | NOVELISTA | DRAMATURGO",descripcion:"La vida Mario Benedetti estuvo marcada por la literatura y por el compromiso con sus prójimos. Nacido en Paso de los Toros (Tacuarembó) el 14 de setiembre de 1920, fue una figura clave de la Generación del 45, también conocida como “la generación crítica”.",referencia:"Fundación Mario Benedetti",carousel:null,link:"imagen_benedetti_2.webp",imagen:"https://firebasestorage.googleapis.com/v0/b/netshop-c71bf.appspot.com/o/au%2Fimagen_benedetti_2.webp?alt=media&token=87ef5beb-c354-47e3-bec3-a8f21c5b39f2"},{id:3,imagen:"https://firebasestorage.googleapis.com/v0/b/netshop-c71bf.appspot.com/o/au%2Fimagen_juana_1.webp?alt=media&token=d0ec2db5-6637-4138-a005-4461c240c3a1",nombre:"Juana de Ibarbourou",tags:"ESCRITORA | POETA",descripcion:"Juana de Ibarbourou nació en Melo, Cerro Largo, el 8 de marzo de 1892. Su madre, Valentina Morales, era descendiente de una antigua familia de origen español afincada en la zona desde finales del siglo XVIII y su padre, Vicente Fernández, un inmigrante gallego nacido en Lugo que, a pesar de saber apenas leer, le recitaba a Juana de pequeña los versos de los poetas de su tierra.",carousel:null,link:"imagen_juana_1.webp",referencia:"Uruguay Educa"}],n={src:"/_astro/arrowW.BB7NUo5z.svg",width:667,height:667,format:"svg"},p=()=>{console.log(n);const[s,r]=t.useState(0),o=()=>{r(a=>a===i.length-1?0:a+1)},c=()=>{r(a=>a===0?i.length-1:a-1)},i=["Slide 1","Slide 2","Slide 3"];return t.useEffect(()=>{const a=setInterval(o,2e4);return()=>clearInterval(a)},[]),e.jsxs(e.Fragment,{children:[e.jsx("section",{className:"carousel bg-black w-screen overflow-hidden",children:e.jsx("div",{className:"carousel-items flex w-screen transition duration-700",style:{transform:`translateX(-${s*100}%)`},children:m.map(a=>e.jsx(d,{autor:a}))})}),e.jsx("button",{className:"prev-btn",onClick:c,children:e.jsx("img",{className:"w-10 hover:w-12 duration-100 rotate-180",src:n.src})}),e.jsx("button",{className:"next-btn",onClick:o,children:e.jsx("img",{className:"w-10 hover:w-12 duration-100",src:n.src})})]})};export{p as default};
