import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { Counter } from './components/Counter';
import './index.scss';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';

export const App = () => {
  return (
    <div className="app">
      <Link to="/">Главная</Link>
      <Link to="/about">О сайте</Link>
      <Suspense fallback={'Loading...'}>
        <Routes>
          <Route path={'/about'} element={<AboutPageAsync />} />
          <Route path={'/'} element={<MainPageAsync />} />
        </Routes>
      </Suspense>
      <Counter />
    </div>
  );
};
