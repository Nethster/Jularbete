const requestUrl = 'https://api.unsplash.com/search/photos?query=flowerpot&client_id=4b8KDQhtHV2-h-CS0rRNhq887zELkOM9Qyaw0-xZQ14';
    const getInspiredButton = document.querySelector('.get-inspired-button');
    const unsplashImage = document.querySelector('.unsplash-image');

    async function addImage () {
        unsplashImage.classList.remove("hidden-image");
        let randomImage = await getNewImage();
        unsplashImage.src = randomImage;
      
    };

    async function getNewImage() {
      let randomNumber = Math.floor(Math.random() * 10);
      return fetch(requestUrl)
        .then((response) => response.json())
        .then((data) => {
          let allImages = data.results[randomNumber];
          return allImages.urls.regular;
        });
    }