import { categories } from '../constants';

export const Categories = ({ value, onChangeCategory }) => {
  return (
    <div className="categories">
      <ul>
        {categories.map(obj => (
          <li
            key={obj.category}
            onClick={() => onChangeCategory(obj.category)}
            className={value === obj.category ? 'active' : undefined}
          >
            {obj.title}
          </li>
        ),
        )}
      </ul>
    </div>
  );
};
