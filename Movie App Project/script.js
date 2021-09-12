async function getdata() {
  let movie = document.getElementById("Movie").value;
  let res = await fetch(
    `https://www.omdbapi.com/?t=${movie}&plot=full&apikey=a52f8d98`
  );
  let data = await res.json();
  //   console.log(data);
  Showdata(data);
}
function Showdata(data) {
  main.innerHTML = ``;
  const { Poster, Released, Title, imdbRating, Plot } = data;
  const MovieE1 = document.createElement("div");
  // MovieE1.classList.add("movie");
  MovieE1.innerHTML = `
  <img src="${Poster}" alt="">
  <h1>${Title}</h1>
  <h1>Release Date = ${Released}</h1>
  <h1>Imdb Rating = ${Rating(imdbRating)}</h1>
  <h1>Plot</h1>
  <h3>${Plot}</h3>
  `;
  main.appendChild(MovieE1);
}
function Rating(x) {
  if (x >= 8.5) {
    return x + " " + "(###This is a must Watch###)";
  } else {
    return x;
  }
}
