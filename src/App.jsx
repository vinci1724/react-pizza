import { useEffect, useState } from 'react';
import { Categories } from './components/Categories';
import { Header } from './components/Header';
import PizzaBlock from './components/PizzaBlock';
import { Skeleton } from './components/PizzaBlock/Skeleton';
import { Sort } from './components/Sort';
import './scss/app.scss';

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://69e7534068208c1debe8aed8.mockapi.io/items').then((res) => {
      return res.json();
    }).then((arr) => {
      setItems(arr);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {
              isLoading
                ? [...Array.from({ length: 6 })].map((_, index) => <Skeleton key={index} />)
                : items.map(obj => (
                    <PizzaBlock
                      key={obj.id}
                      title={obj.title}
                      price={obj.price}
                      imageUrl={obj.imageUrl}
                      types={obj.types}
                      sizes={obj.sizes}
                      category={obj.category}
                      rating={obj.rating}
                    />
                  ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
