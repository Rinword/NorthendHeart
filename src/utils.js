export const animatedScrollTo = (x, y, options) => {
   // let currentOffsetX = window.pageXOffset;
   let currentOffsetY = window.pageYOffset;

   if(y < currentOffsetY) {
       while(y < window.pageYOffset) {
           console.log('up', window.pageYOffset);
           setTimeout(()=> window.scrollBy(0, -1), 1)
       }
   }
    if(y > currentOffsetY) {
        while(y > window.pageYOffset) {
            console.log('down', window.pageYOffset);
            setTimeout(()=> window.scrollBy(0, 1), 1)
        }
    }

};