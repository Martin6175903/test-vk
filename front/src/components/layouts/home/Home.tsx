import MainContainer from '../MainContainer.tsx';
import { useGetChunkCats } from '../../../hooks/queries/cats/useGetChunkCats.ts';
import { Fragment, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import CatsItems from '../../cats/CatsItems.tsx';

const Home = () => {
  const { ref, inView } = useInView();
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
    error
  } = useGetChunkCats(15);

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
    console.log(true);
  }, [inView, hasNextPage, isFetchingNextPage]);

  if (status === 'pending') {
    return <div className={'my-[50px] text-center'}>Загрузка котиков...</div>;
  }

  if (status === 'error') {
    return (
      <div className={'my-[50px] text-center'}>Ошибка: {error.message}</div>
    );
  }

  return (
    <MainContainer>
      <div className="my-[50px] grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-5 text-center sm:grid-cols-[repeat(auto-fit,minmax(225px,1fr))] lg:gap-12">
        {data?.pages.map((page, i) => (
          <Fragment key={i}>
            <CatsItems cats={page} />
          </Fragment>
        ))}
      </div>
      <div
        ref={ref}
        className="text-black-400 mt-12 mb-[31px] flex items-center justify-center tracking-wide"
      >
        {isFetchingNextPage && (
          <div className={'text-center'}>... загружаем еще котиков ...</div>
        )}
        {!hasNextPage && <div>Это все котики!</div>}
      </div>
    </MainContainer>
  );
};

export default Home;
