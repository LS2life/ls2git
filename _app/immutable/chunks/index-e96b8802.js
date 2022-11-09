import{c as u}from"./index-15279b70.js";import{Q as d}from"./index-1e23d3bb.js";function g(t,{delay:o=0,duration:n=400,easing:r=d}={}){const s=+getComputedStyle(t).opacity;return{delay:o,duration:n,easing:r,css:a=>`opacity: ${a*s}`}}function x(t,{delay:o=0,duration:n=400,easing:r=u,x:s=0,y:a=0,opacity:p=0}={}){const c=getComputedStyle(t),e=+c.opacity,f=c.transform==="none"?"":c.transform,m=e*(1-p);return{delay:o,duration:n,easing:r,css:(i,y)=>`
			transform: ${f} translate(${(1-i)*s}px, ${(1-i)*a}px);
			opacity: ${e-m*y}`}}export{g as a,x as f};
