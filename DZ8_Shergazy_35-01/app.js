const movies = [
    {title: 'Inception' , rating:5 , year: 2010, director: 'Christopher Nolan'},
    {title: 'The Dark Knight' , rating:8 , year: 1994, director: 'Frank Darabont '},
    {title: 'Twilight' , rating:5 , year: 2008, director: 'Christopher Nolan'},
    {title: 'Willy Wonka' , rating:5 , year: 2024, director: 'Christopher Nolan'}
]

function formatMovieInfo (movie) {
    return ` ${movie.title} (${movie.year} , direct by ${movie.director})
    rating: ${movie.rating} , additional info: ${movie.additionalInfo}`
}
const  newMovieArray = movies
    .filter((movie) => movie.rating >= 6)
    .map(formatMovieInfo)
    .sort((a, b) => b.year - a.year)
newMovieArray.forEach((movie) => {
    console.log(movie)
})

const tableBody = document.querySelector('#movies-table tbody');
const modal = document.querySelector('#modal');
const confirmBtn = document.querySelector('#confirm-btn');

movies.forEach((movie) => {
    const row = document.createElement('tr');
    const buyBtn = document.createElement('button');
    buyBtn.textContent = 'Купить';
    buyBtn.addEventListener('click', () => {
        modal.style.display = 'block';
        confirmBtn.addEventListener('click', () => {
            row.classList.add('gray');
            buyBtn.style.display = 'none';
            modal.style.display = 'none';
        }, {once: true});
    });
    row.innerHTML = `
                <td>${movie.title}</td>
                <td>${movie.year}</td>
                <td>${movie.rating}</td>
                <td>${movie.director}</td>
                <td></td>
            `;
    row.lastElementChild.appendChild(buyBtn);
    tableBody.appendChild(row);
});
