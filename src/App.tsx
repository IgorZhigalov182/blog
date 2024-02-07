import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { Counter } from './components/Counter';
import './styles/index.scss';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { useTheme } from './theme/useTheme';

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>Switch theme</button>
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
