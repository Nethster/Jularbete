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
  let randomQuote = newQuote();
  quote.innerHTML = randomQuote;
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

const newQuote = () => {
  let randomNumber = Math.floor(Math.random() * plantQuotes.length);
  return plantQuotes[randomNumber];
  console.log(plantQuotes[randomNumber]);
}

const plantQuotes = [
  "A beautiful plant is like having a friend around the house. Beth Ditt",
  "Even if I knew that tomorrow the world would go to pieces, I would still plant my apple tree. Martin Luther",
  "Plants are solar powered air purifiers whose filter never needs replacing. Khang Kijarro Nguyen",
  "Plants do not speak, but their silence is alive with change. May Sarton",
  "To nurture a garden is to feed not just the body, but the soul. Alfred Austin",
  "All life on earth emanates from the green of the plant.",
  "I'm really quite simple. I plant flowers and watch them grow... I stay at home and watch the river flow. George Harrison",
  "The best time to plant a tree was 20 years ago. The second best time is now. Chinese proverb",
  "One touch of nature makes the whole world kin. William Shakespeare",
  "If you've never experienced the joy of accomplishing more than you can imagine, plant a garden. Robert Brault."
]

/*
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
*/