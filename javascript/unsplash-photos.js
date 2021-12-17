const requestUrl = 'https://api.unsplash.com/search/photos?query=flowerpot&client_id=4b8KDQhtHV2-h-CS0rRNhq887zELkOM9Qyaw0-xZQ14';
const quoteUrl = "https://type.fit/api/quotes";
const getInspiredButton = document.querySelector('.get-inspired-button');
const unsplashImage = document.querySelector('.unsplash-image');
const quote = document.querySelector(".random-quote");
const author = document.querySelector(".random-author");

async function addImage () {
  // removing the class that gives the element display:none property
  unsplashImage.classList.remove("hidden-image");
  // awaiting random image's url from the getNewImage()
  let randomImage = await getNewImage();
  unsplashImage.src = randomImage;
};

//fetching a random image from Unsplash API, returns a url
async function getNewImage() {
  let randomNumber = Math.floor(Math.random() * 10);
  return fetch(requestUrl)
  .then((response) => response.json())
  .then((data) => {
    let allImages = data.results[randomNumber];
    return allImages.urls.regular;
  });
}

//fetching a random quote from type.fit API
async function getNewQuote() {
  let randomIndex = Math.floor(Math.random()*allQuotes.length);
  return fetch(quoteUrl)
  .then((response) => response.json())
  .then((data) => {
    const qt = data[randomIndex].text;
    const auth = data[randomIndex].author;
    if(auth==null){
      auth = "Anonymous";
    }
    quote.innerHTML = qt;
    author.innerHTML = auth;
  });

}