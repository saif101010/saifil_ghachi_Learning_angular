import { Component } from '@angular/core';
import { Movie } from './models/movie.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  movies: Movie[] = [
    { id: 1, title: 'Inception', director: 'Christopher Nolan', releaseYear: 2010, details: { genre: 'Sci-Fi', format: 'Blu-ray' }},
    { id: 2, title: 'The Dark Knight', director: 'Christopher Nolan', releaseYear: 2008, details: { genre: 'Action', format: 'DVD' }},
    { id: 3, title: 'Interstellar', director: 'Christopher Nolan', details: { genre: 'Sci-Fi', format: 'Digital' }},
    { id: 4, title: 'The Matrix', director: 'The Wachowskis', releaseYear: 1999, details: { genre: 'Sci-Fi', format: 'Blu-ray' }},
    { id: 5, title: 'Avengers: Endgame', director: 'Anthony & Joe Russo', releaseYear: 2019, details: { genre: 'Superhero', format: 'Digital' }},
    { id: 6, title: 'Gladiator', director: 'Ridley Scott', releaseYear: 2000, details: { genre: 'Historical', format: 'DVD' }},
    { id: 7, title: 'Titanic', director: 'James Cameron', releaseYear: 1997, details: { genre: 'Romance', format: 'Digital' }},
    { id: 8, title: 'The Lion King', director: 'Jon Favreau', releaseYear: 2019, details: { genre: 'Animation', format: 'Blu-ray' }},
    { id: 9, title: 'The Godfather', director: 'Francis Ford Coppola', releaseYear: 1972, details: { genre: 'Crime', format: 'DVD' }},
    { id: 10, title: 'The Shawshank Redemption', director: 'Frank Darabont', releaseYear: 1994, details: { genre: 'Drama', format: 'Digital' }},
    { id: 11, title: 'Forrest Gump', director: 'Robert Zemeckis', releaseYear: 1994, details: { genre: 'Drama', format: 'Blu-ray' }},
    { id: 12, title: 'Avatar', director: 'James Cameron', releaseYear: 2009, details: { genre: 'Sci-Fi', format: 'Digital' }},
    { id: 13, title: 'Joker', director: 'Todd Phillips', releaseYear: 2019, details: { genre: 'Thriller', format: 'Blu-ray' }},
    { id: 14, title: 'Frozen', director: 'Chris Buck & Jennifer Lee', releaseYear: 2013, details: { genre: 'Animation', format: 'DVD' }},
    { id: 15, title: 'Black Panther', director: 'Ryan Coogler', releaseYear: 2018, details: { genre: 'Superhero', format: 'Digital' }},
    { id: 16, title: 'Parasite', director: 'Bong Joon-ho', releaseYear: 2019, details: { genre: 'Thriller', format: 'Blu-ray' }}
  ];
}
