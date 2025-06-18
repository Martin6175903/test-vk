import { useInfiniteQuery } from '@tanstack/react-query';
import { catsService } from '../../services/cats.service.ts';

export const useGetChunkCats = (limit: number = 15) => {
  return useInfiniteQuery({
    queryKey: ['get chunk cats'],
    queryFn: ({ pageParam = 1 }) => catsService.getChunkCats(pageParam, limit),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length < limit ? undefined : allPages.length + 1;
    },
    initialPageParam: 1
  })
}