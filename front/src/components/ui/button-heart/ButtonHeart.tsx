import FavoriteHeart from '../../../assets/icons/favorite_heart.svg?react';
import FavoriteHeartHover from '../../../assets/icons/favorite_heart_hover.svg?react';
import { useState } from 'react';
import { useAddingCatInFavorites } from '../../../hooks/queries/cats/useAddingCatInFavorites.ts';
import { Cat } from '../../../shared/types/cats.ts';
import { useLocation } from 'react-router';
import { useDeleteCat } from '../../../hooks/queries/cats/useDeleteCat.ts';

interface ButtonHeartProps {
  cat: Cat;
}

const ButtonHeart = ({ cat }: ButtonHeartProps) => {
  const { pathname } = useLocation();
  const { deleteCat, isPendingDeleteCat } = useDeleteCat();
  const { addingCatInFavorites, isPendingAddingCatInFavorites } =
    useAddingCatInFavorites();
  const [isHoverBtn, setIsHoverBtn] = useState(false);

  return (
    <button
      disabled={isPendingAddingCatInFavorites || isPendingDeleteCat}
      onClick={() => {
        if (pathname === '/favorites') deleteCat(cat.id);
        else addingCatInFavorites({ id_cat: cat.id, url: cat.url });
      }}
      onMouseOver={() => setIsHoverBtn(true)}
      onMouseLeave={() => setIsHoverBtn(false)}
      className={
        'group/btn absolute -top-3 -right-4 z-10 cursor-pointer sm:top-auto sm:right-4 sm:bottom-5'
      }
    >
      <div className={'max-sm:hidden'}>
        {isHoverBtn !== undefined &&
        pathname !== '/favorites' &&
        !isHoverBtn ? (
          <FavoriteHeart className={'sm:size-12'} />
        ) : (
          <FavoriteHeartHover
            className={'group-active/btn:[&_path]:fill-heart-500 sm:size-12'}
          />
        )}
        {isHoverBtn === undefined && (
          <FavoriteHeartHover
            className={'group-active/btn:[&_path]:fill-heart-500 sm:size-12'}
          />
        )}
      </div>
      <div className={'sm:hidden'}>
        {pathname === '/favorites' ? (
          <FavoriteHeartHover
            className={
              'group-active/btn:[&_path]:fill-heart-500 size-8 rounded-full sm:size-12'
            }
          />
        ) : (
          <FavoriteHeart
            className={
              'group-active/btn:[&_path]:fill-heart-500 size-8 rounded-full bg-white sm:size-12'
            }
          />
        )}
      </div>
    </button>
  );
};

export default ButtonHeart;
