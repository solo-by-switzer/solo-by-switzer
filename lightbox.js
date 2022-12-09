
images.forEach(image => {

  image.addEventListener('click', event => {
    
      var lightbox = document.createElement('figure');

      document.body.appendChild(lightbox);


      var image = document.createElement('img'); 
                
          image.src = event.target.src;

          image.setAttribute('draggable', false);     
     
      lightbox.appendChild(image);


      lightbox.addEventListener('click', event => {
          document.body.removeChild(lightbox);
      });

  });
});
