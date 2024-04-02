import{r as m}from"./index.NEDEFKed.js";var l={exports:{}},d={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a=m,h=Symbol.for("react.element"),p=Symbol.for("react.fragment"),f=Object.prototype.hasOwnProperty,u=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y={key:!0,ref:!0,__self:!0,__source:!0};function c(o,e,i){var t,r={},s=null,n=null;i!==void 0&&(s=""+i),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(n=e.ref);for(t in e)f.call(e,t)&&!y.hasOwnProperty(t)&&(r[t]=e[t]);if(o&&o.defaultProps)for(t in e=o.defaultProps,e)r[t]===void 0&&(r[t]=e[t]);return{$$typeof:h,type:o,key:s,ref:n,props:r,_owner:u.current}}d.Fragment=p;d.jsx=c;d.jsxs=c;l.exports=d;var _=l.exports;const w=({btnText:o,className:e,url:i})=>{const t=()=>{fetch(`../../src/assets/${i}`).then(r=>r.blob()).then(r=>{const s=URL.createObjectURL(r),n=window.open();n.document.write(`
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
                            <embed src="${s}" type="application/pdf" width="100%" height="100%">
                        </body>
                        </html>
                    `),n.innerWidth=n.document.documentElement.scrollWidth,n.innerHeight=n.document.documentElement.scrollHeight})};return _.jsx("button",{onClick:i&&t,type:"button",className:`btn-presentation ${e}`,children:o})};export{w as B,_ as j};
