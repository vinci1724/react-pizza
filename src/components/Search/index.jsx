import { Search as SearchIcon, X } from 'lucide-react';
import { use } from 'react';

import { SearchContext } from '../../App';
import styles from './Search.module.scss';

const Search = () => {
  const { searchValue, setSearchValue } = use(SearchContext);

  return (
    <div className={styles.root}>
      <SearchIcon className={styles.icon} />
      <input
        value={searchValue}
        onChange={event => setSearchValue(event.target.value)}
        className={styles.input}
        placeholder="Поиск пиццы..."
      />
      {searchValue && (
        <X
          onClick={() => setSearchValue('')}
          className={styles.clearIcon}
        />
      )}
    </div>
  );
};

export default Search;
