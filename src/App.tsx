import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DefaultLayout } from './components/layouts';
import { routes } from './constants/routes';
import { useFetchProducts } from './hooks/useFetchProducts';

function App() {
  useFetchProducts();

  /////////////// Ignore React Router v7 Future Flag Warning
  const originalWarn = console.warn;
  console.warn = (...args) => {
    if (typeof args[0] === 'string' && args[0].includes('React Router Future Flag Warning')) {
      return;
    }
    originalWarn(...args);
  };
  ///////////////

  return (
    <Router>
      <DefaultLayout>
        <Routes>
          {routes.map(({ path, element }, index) => (
            <Route key={index} path={path} element={element} />
          ))}
        </Routes>
      </DefaultLayout>
    </Router>
  );
}

export default App;
