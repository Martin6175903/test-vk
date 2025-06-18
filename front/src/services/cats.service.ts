import { axiosApiClassic } from '../api/api.helper.ts';
import { API_CAT_URL } from '../config/api.config.ts';
import { Cat } from '../shared/types/cats.ts';

class CatsService {
  async getChunkCats(page: number, limit: number) {
    const response = await axiosApiClassic<Cat[]>({
      url: API_CAT_URL.root(`search?page=${page}&limit=${limit}`),
      method: "GET"
    })
    return response.data
  }
}

export const catsService = new CatsService()