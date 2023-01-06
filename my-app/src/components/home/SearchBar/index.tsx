import React from 'react';
import './styles.css';
import SearchIcon from '@material-ui/icons/Search';

interface Props {
  value: string;
  changeInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<Props> = ({ value, changeInput }) => (
  <div className="searchBar-wrap">
    <SearchIcon className="searchBar-icon" />
    <input
      type="text"
      placeholder="Woodland Hills"
      value={value}
      onChange={changeInput}
    />
  </div>
);

export default SearchBar;
