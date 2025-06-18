import FavoriteHeart from '../../../assets/icons/favorite_heart.svg?react';
import FavoriteHeartHover from '../../../assets/icons/favorite_heart_hover.svg?react';
import { useState } from 'react';
import { useAddingCatInFavorites } from '../../../hooks/queries/cats/useAddingCatInFavorites.ts';
import { Cat } from '../../../shared/types/cats.ts';

interface ButtonHeartProps {
  cat: Cat
}

const ButtonHeart = ({cat}: ButtonHeartProps) => {
  const {addingCatInFavorites, isPendingAddingCatInFavorites} = useAddingCatInFavorites()
  const [isHoverBtn, setIsHoverBtn] = useState(false);

  return (
    <button
      disabled={isPendingAddingCatInFavorites}
      onClick={() => addingCatInFavorites({ id_cat: cat.id, url_image: cat.url })}
      onMouseOver={() => setIsHoverBtn(true)}
      onMouseLeave={() => setIsHoverBtn(false)}
      className={'z-10 absolute -top-3 -right-4 sm:top-auto sm:bottom-5 sm:right-4 cursor-pointer group/btn'}
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