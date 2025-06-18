import FavoriteHeart from '../../../assets/icons/favorite_heart.svg?react';
import FavoriteHeartHover from '../../../assets/icons/favorite_heart_hover.svg?react';
import { useState } from 'react';

const ButtonHeart = () => {
  const [isHoverBtn, setIsHoverBtn] = useState(false);

  return (
    <button
      onMouseOver={() => setIsHoverBtn(true)}
      onMouseLeave={() => setIsHoverBtn(false)}
      className={'z-10 absolute -top-3 -right-4 sm:bottom-5 sm:right-4 cursor-pointer group/btn'}
    >
      <div className={'max-sm:hidden'}>
        {isHoverBtn !== undefined && !isHoverBtn ? (
          <FavoriteHeart className={'sm:size-12'}/>
        ) : (<FavoriteHeartHover className={'sm:size-12 group-active/btn:[&_path]:fill-heart-500'}/>)}
        {isHoverBtn === undefined && (
          <FavoriteHeartHover className={'sm:size-12 group-active/btn:[&_path]:fill-heart-500'}/>
        )}
      </div>
      <div className={'sm:hidden'}>
        <FavoriteHeart className={'size-8 sm:size-12 rounded-full group-active/btn:[&_path]:fill-heart-500 bg-white'}/>
      </div>
    </button>
  );
};

export default ButtonHeart;