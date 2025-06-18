import './App.css';
import Header from './components/header/Header.tsx';
import { Route, Routes } from 'react-router';
import { routes } from './routes/routes.tsx';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        {routes.map((route, index) => (
          // Если index не меняется, то можно так сделать не опираясь на id из БД какой-то, поэтому так сделал
          <Route key={index} path={route.path} element={route.element}/>
        ))}
      </Routes>
    </div>
  );
}

export default App;
