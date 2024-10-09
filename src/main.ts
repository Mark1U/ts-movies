import './style.css'

import { movies, Movies } from './movies.ts'

const movieGrid = document.querySelector('#movieGrid') as HTMLElement;
const inputSearch = document.querySelector('#inputSearch') as HTMLInputElement;
const searchBtn = document.querySelector('#searchBtn') as HTMLElement;
const yearUpBtn = document.querySelector('#yearUpBtn') as HTMLElement;
const yearDownBtn = document.querySelector('#yearDownBtn') as HTMLElement;
const ratingBtn = document.querySelector('#ratingBtn') as HTMLElement;

const displayMovies = (_movies: Movies) => {
  movieGrid.innerHTML = '';
  _movies.forEach((movie) => {
    movieGrid.innerHTML += `<div class='movCard'>
    <h2>${movie[0]}</h2>
    <p>${movie[1]}</p>
    <p>${movie[2]}</p>
    <p>${movie[3]}</p>
    <p>${movie[4].join(', ')}</p>
    <p>${movie[5]}</p>
  </div>`;
  })
}

searchBtn?.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(inputSearch?.value);

  const searchValue = inputSearch?.value.toLowerCase();
  const m = movies.filter(x => (x[0].toLowerCase().includes(searchValue) ||
    x[1].toLowerCase().includes(searchValue) ||
    x[2].toLowerCase().includes(searchValue) ||
    x[3].toLowerCase().includes(searchValue) ||
    x[4].join(' ').toLowerCase().includes(searchValue) ||
    x[5].toLowerCase().includes(searchValue)))

  console.log(m);

  displayMovies(m);
})

yearUpBtn?.addEventListener('click', (e) => {
  e.preventDefault();
  const m: Movies = [].concat(movies);
  console.log(Array.isArray(m));
  m.sort((a, b) => (+a[1]) - (+b[1]));
  displayMovies(m)
})

yearDownBtn?.addEventListener('click', (e) => {
  e.preventDefault();
  const m: Movies = [].concat(movies);
  m.sort((a, b) => (b[1]) - (a[1]));
  displayMovies(m)
})

ratingBtn?.addEventListener('click', (e) => {
  e.preventDefault();
  const m: Movies = [].concat(movies);
  m.sort((a, b) => (b[5]) - (a[5]));
  displayMovies(m)
})


displayMovies(movies)