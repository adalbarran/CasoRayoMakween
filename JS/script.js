// if (trigger === 'hover') {
//     container.addEventListener('mouseover', event => {
//         if (event.target.dataset.target === '#imagenescarrusel') {
//             event.target.classList.add('zoom')
//         }
//     })

//     container.addEventListener('mouseout', event => {
//         if (event.target.dataset.target === '#imagenescarrusel') {
//             event.target.classList.remove('zoom')
//         }
//     })
// }


var currentzoom = 1;

function zoom(delta, e) {
   var img = document.getElementById("imagenescarrusel");
   var width = img.offsetWidth; //calculating the size of the img (in px)
   var height = img.offsetHeight;
   var x = event.offsetX; //calculating the position of the mouse pointer on the picture (in px)
   var y = event.offsetY; 
   var xpercent = x*100/width; //calculating the position of the mouse pointer on the picture (in %)
   var ypercent = y*100/height;
   img.style.transform = "scale("+currentzoom+")"; //scaling the picture
   img.style.transformOrigin = xpercent + "% "+ ypercent +"%"; //transform-origin
   currentzoom += delta;
}
console.log("ola");