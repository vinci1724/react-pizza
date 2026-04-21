import { useState } from 'react';

export const Categories = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { category: 'all', title: 'Все' },
    { category: 'meat', title: 'Мясные' },
    { category: 'vegetarian', title: 'Вегетарианская' },
    { category: 'grill', title: 'Гриль' },
    { category: 'spicy', title: 'Острые' },
    { category: 'closed', title: 'Закрытые' },
  ];

  return (
    <div className="categories">
      <ul>
        {categories.map(obj => (
          <li
            key={obj.category}
            onClick={() => setActiveCategory(obj.category)}
            className={activeCategory === obj.category && 'active'}
          >
            {obj.title}
          </li>
        ),
        )}
      </ul>
    </div>
  );
};
