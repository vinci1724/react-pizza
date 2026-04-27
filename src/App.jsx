import { createContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { Header } from './components/Header';
import { Cart } from './pages/Cart';
import { Home } from './pages/Home';
import { NotFound } from './pages/NotFound';
import './scss/app.scss';

export const SearchContext = createContext(undefined);

const App = () => {
  const [searchValue, setSearchValue] = useState('');

  const filter = useSelector(state => state.filter.value);
  const dispatch = useDispatch();

  return (
    <div className="wrapper">
      <SearchContext value={{ searchValue, setSearchValue }}>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </SearchContext>
    </div>
  );
};

export default App;
