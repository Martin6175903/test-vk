import ButtonHeart from '../ui/button-heart/ButtonHeart.tsx';
import { Cat, CatData } from '../../shared/types/cats.ts';
import { useState } from 'react';

interface CatsItemProps {
  cat: Cat | CatData;
}

const CatsItem = ({ cat }: CatsItemProps) => {
  const [isHoverItem, setIsHoverItem] = useState<boolean>(false);
  return (
    <div className={'flex justify-center'}>
      <div
        onMouseOver={() => setIsHoverItem(true)}
        onMouseLeave={() => setIsHoverItem(false)}
        className={
          'group/item relative cursor-pointer duration-300 hover:scale-110 hover:shadow-lg hover:shadow-black/30 sm:w-[225px]'
        }
      >
        <img
          loading={'lazy'}
          src={cat.url}
          alt={'Beautiful Cat'}
          className={'size-[100px] object-cover sm:size-[225px]'}
        />
        <div className={'max-sm:hidden'}>
          {isHoverItem && <ButtonHeart cat={cat as Cat} />}
        </div>
        <div className={'sm:hidden'}>
          <ButtonHeart cat={cat as Cat} />
        </div>
        <div
          className={
            'absolute right-0 bottom-0 left-0 z-5 h-12 bg-linear-[180deg,rgba(255,255,255,0)_0%,#fff_58.85%] opacity-0 duration-300 group-hover/item:opacity-100 sm:h-[94px]'
          }
        />
      </div>
    </div>
  );
};

export default CatsItem;
