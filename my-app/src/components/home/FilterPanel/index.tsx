import React from 'react';
import { categoryList, ratingList } from '../../../constants';
import CheckboxProton from '../../common/checkboxProton';
import FilterListToggle from '../../common/filterListToggle';
import SliderProton from '../../common/sliderProton';
import './styles.css';

interface Props {
  selectedCategory: string;
  selectCategory: (event: any, newValue: string) => void;
  selectedRating: string;
  selectedPrice: number;
  selectRating: (event: any, newValue: string) => void;
  cuisines: {
    id: number;
    label: string;
    checked: boolean;
  }[];
  changeChecked: (id: number) => void;
  changePrice: (event: any, newValue: number | number[]) => void;
}

const FilterPanel: React.FC<Props> = ({
  selectedCategory,
  selectCategory,
  selectedRating,
  selectedPrice,
  selectRating,
  cuisines,
  changeChecked,
  changePrice,
}) => (
  <div>
    <div className="input-group">
      <p className="label">Category</p>
      <FilterListToggle
        options={categoryList}
        value={selectedCategory}
        selectToggle={selectCategory}
      />
    </div>
    <div className="input-group">
      <p className="label">Cuisine</p>
      {cuisines.map((cuisine) => (
        <CheckboxProton
          key={cuisine.id}
          cuisine={cuisine}
          changeChecked={changeChecked}
        />
      ))}
    </div>
    <div className="input-group">
      <p className="label-range">Price Range</p>
      <SliderProton value={selectedPrice} changePrice={changePrice} />
    </div>
    <div className="input-group">
      <p className="label">Star Rating</p>
      <FilterListToggle
        options={ratingList}
        value={selectedRating}
        selectToggle={selectRating}
      />
    </div>
  </div>
);

export default FilterPanel;
