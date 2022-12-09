images.forEach(function(image) {

  image.addEventListener('click', function() {

      var lightbox = document.createElement('figure');

      lightbox.addEventListener('click', function() {
          document.body.removeChild(lightbox);
      });

      var image = document.createElement('img');
      image.src = this.src;
      image.setAttribute('draggable', false);

      lightbox.appendChild(image);
      document.body.appendChild(lightbox);
  });
});