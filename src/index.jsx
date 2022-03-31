import React from 'react';
import { render } from 'react-dom';
import './style.css';
import Header from './components/header/header';
import MovieList from './components/list/list';
import { movies } from './movies';
import Actor from './components/actor/actor';

const App = () => {
  return (
  <>
    <Header/>
    <MovieList movies={movies}/>
  </>
)};

render(<App />, document.querySelector('#app'));
