const container = document.querySelector(".container");
const topics = [
  {
    name: "Academics",
    image: "images/coffee1.jpg"
  },
  {
    name: "Athletics",
    image: "images/coffee2.jpg"
  },
  {
    name: "Social",
    image: "images/coffee3.jpg"
  },
  {
    name: "Personal",
    image: "images/coffee4.jpg"
  },
  {
    name: "About Us",
    image: "images/blair-arch.jpg"
  }
];


]
const showTopics = () => {
  let output = "";
  topics.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="/html/about.html">See More</a>
              </div>
              `)
  );
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showTopics);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}
