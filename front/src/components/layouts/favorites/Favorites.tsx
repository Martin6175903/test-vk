import MainContainer from '../MainContainer.tsx';
import { useFindAllFavoritesCats } from '../../../hooks/queries/cats/useFindAllFavoritesCats.ts';
import CatsItems from '../../cats/CatsItems.tsx';

const Favorites = () => {
  const {favoritesCats, isLoadingFavoritesCats} = useFindAllFavoritesCats()
  return (
    <MainContainer>
      <div className='my-[50px] text-center grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] sm:grid-cols-[repeat(auto-fit,minmax(225px,1fr))] gap-5 lg:gap-12'>
        {isLoadingFavoritesCats && <div>...Loading</div>}
        {!isLoadingFavoritesCats && <CatsItems cats={favoritesCats}/>}
      </div>
    </MainContainer>
  );
};

export default Favorites;