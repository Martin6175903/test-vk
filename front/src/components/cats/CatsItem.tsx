import ButtonHeart from '../ui/button-heart/ButtonHeart.tsx';
import { Cat, CatData } from '../../shared/types/cats.ts';
import { useState } from 'react';

interface CatsItemProps {
  cat: Cat | CatData
}

const CatsItem = ({ cat }: CatsItemProps) => {
  const [isHoverItem, setIsHoverItem] = useState<boolean>(false);
  return (
    <div className={'flex justify-center'}>
      <div onMouseOver={() => setIsHoverItem(true)} onMouseLeave={() => setIsHoverItem(false)} className={'relative hover:shadow-lg hover:shadow-black/30 duration-300 cursor-pointer hover:scale-110 group/item sm:w-[225px]'}>
        <img loading={'lazy'} src={cat.url} alt={'Beautiful Cat'} className={'size-[100px] sm:size-[225px] object-cover'}/>
        <div className={'max-sm:hidden'}>{isHoverItem && <ButtonHeart cat={cat as Cat}/>}</div>
        <div className={'sm:hidden'}><ButtonHeart cat={cat as Cat}/></div>
        <div className={'opacity-0 group-hover/item:opacity-100 duration-300 z-5 absolute bottom-0 right-0 left-0 h-12 sm:h-[94px] bg-linear-[180deg,rgba(255,255,255,0)_0%,#fff_58.85%]'}/>
      </div>
    </div>
  );
};

export default CatsItem;