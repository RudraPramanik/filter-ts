import React from 'react';
import ListItem from './ListItem';
import './styles.css';

interface Item {
  id: number;
  // Other properties for the item object
}

interface Props {
  list: Item[];
}

const List: React.FC<Props> = ({ list }) => (
  <div className="list-wrap">
    {list.map((item) => (
      <ListItem key={item.id} item={item} />
    ))}
  </div>
);

export default List;
