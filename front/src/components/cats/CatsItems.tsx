import { Cat, CatData } from '../../shared/types/cats.ts';
import CatsItem from './CatsItem.tsx';

interface CatsItemsProps {
  cats: Cat[] | CatData[]
}

const CatsItems = ({cats}: CatsItemsProps) => {
  return (
    <>
      {cats.map((cat) => (
        <CatsItem key={cat.id} cat={cat}/>
      ))}
    </>
  );
};

export default CatsItems;