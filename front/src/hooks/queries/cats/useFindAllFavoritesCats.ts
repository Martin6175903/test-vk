import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import { catsService } from '../../../services/cats.service.ts';

export const useFindAllFavoritesCats = () => {
  const {data: favoritesCats, isLoading: isLoadingFavoritesCats} = useQuery({
    queryKey: ['find all favorites cats'],
    queryFn: () => catsService.findAllFavoritesCats()
  })

  return useMemo(() => ({
    favoritesCats, isLoadingFavoritesCats
  }), [favoritesCats, isLoadingFavoritesCats])
}