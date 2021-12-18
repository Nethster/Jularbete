const requestUrl = 'https://api.unsplash.com/search/photos?query=flowerpot&client_id=4b8KDQhtHV2-h-CS0rRNhq887zELkOM9Qyaw0-xZQ14';
const quoteUrl = "https://type.fit/api/quotes";
const getInspiredButton = document.querySelector('.get-inspired-button');
const unsplashImage = document.querySelector('.unsplash-image');
const quote = document.querySelector(".random-quote");

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

//adding a random quote

const newQuote = () => {
  let randomNumber = Math.floor(Math.random() * plantQuotes.length);
  let randomQuote = plantQuotes[randomNumber];
  quote.innerHTML = randomQuote;
}

const plantQuotes = [
  "A beautiful plant is like having a friend around the house.<br> - Beth Ditt",
  "Even if I knew that tomorrow the world would go to pieces, I would still plant my apple tree.<br> - Martin Luther",
  "Plants are solar powered air purifiers whose filter never needs replacing.<br> - Khang Kijarro Nguyen",
  "Plants do not speak, but their silence is alive with change.<br> - May Sarton",
  "To nurture a garden is to feed not just the body, but the soul.<br> - Alfred Austin",
  "All life on earth emanates from the green of the plant.<br> - Jay Kordich",
  "I'm really quite simple. I plant flowers and watch them grow... I stay at home and watch the river flow.<br> George Harrison",
  "The best time to plant a tree was 20 years ago. The second best time is now.<br> - Chinese proverb",
  "One touch of nature makes the whole world kin.<br> - William Shakespeare",
  "If you've never experienced the joy of accomplishing more than you can imagine, plant a garden.<br> - Robert Brault."
]