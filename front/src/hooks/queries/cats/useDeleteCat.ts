import { useMutation, useQueryClient } from '@tanstack/react-query';
import { catsService } from '../../../services/cats.service.ts';
import toast from 'react-hot-toast';
import { useMemo } from 'react';

export const useDeleteCat = () => {
  const queryClient = useQueryClient();

  const {mutate: deleteCat, isPending: isPendingDeleteCat} = useMutation({
    mutationKey: ['delete cat'],
    mutationFn: (id: string) => catsService.deleteCat(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['find all favorites cats']
      })
      toast.success('Котик успешно удалён из избранного!');
    },
    onError: () => {
      toast.error('Котик не смог удалиться из избранного! :)')
    }
  })

  return useMemo(() => ({
    deleteCat, isPendingDeleteCat
  }), [deleteCat, isPendingDeleteCat])
}