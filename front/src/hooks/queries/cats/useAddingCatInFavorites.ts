import { useMutation, useQueryClient } from '@tanstack/react-query';
import { catsService } from '../../../services/cats.service.ts';
import { CatData } from '../../../shared/types/cats.ts';
import toast from 'react-hot-toast';
import { useMemo } from 'react';

export const useAddingCatInFavorites = () => {
  const queryClient = useQueryClient()

  const {mutate: addingCatInFavorites, isPending: isPendingAddingCatInFavorites} = useMutation({
    mutationKey: ['adding a cat in favorites'],
    mutationFn: (data: CatData) => catsService.createCat(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['find all favorites cats']
      })
      toast.success('Котик успешно добавлен в избранное!');
    }
  })

  return useMemo(() => ({
    addingCatInFavorites, isPendingAddingCatInFavorites
  }), [addingCatInFavorites, isPendingAddingCatInFavorites])
}