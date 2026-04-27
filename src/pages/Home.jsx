import { use, useEffect, useState } from 'react';

import { SearchContext } from '../App';
import { Categories } from '../components/Categories';
import Pagination from '../components/Pagination';
import PizzaBlock from '../components/PizzaBlock';
import { Skeleton } from '../components/PizzaBlock/Skeleton';
import { Sort } from '../components/Sort';
import { categories, sortList } from '../constants';

export const Home = () => {
  const { searchValue } = use(SearchContext);

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState('all');
  const [sortType, setSortType] = useState(sortList[0]);
  const [currentPage, setCurrentPage] = useState(1);

  const categoryIndex = categories.findIndex(obj => obj.category === categoryId);
  const category = categoryIndex > 0 ? `category=${categoryIndex}` : '';
  const sortBy = sortType.sortProperty;
  const search = searchValue ? `&search=${searchValue}` : '';

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://69e7534068208c1debe8aed8.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=desc${search}`,
    )
      .then(res => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue, currentPage]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={category => setCategoryId(category)} />
        <Sort value={sortType} onChangeSort={sort => setSortType(sort)} />
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
      <Pagination onChangePage={number => setCurrentPage(number)} />
    </div>
  );
};
