import { axiosApiClassic } from '../api/api.helper.ts';
import { API_CAT_URL, API_URL } from '../config/api.config.ts';
import { Cat, CatData } from '../shared/types/cats.ts';

class CatsService {
  async getChunkCats(page: number, limit: number) {
    const response = await axiosApiClassic<Cat[]>({
      url: API_CAT_URL.root(`search?page=${page}&limit=${limit}`),
      method: "GET"
    })
    return response.data
  }

  async findAllFavoritesCats() {
    const response = await axiosApiClassic<CatData[]>({
      url: API_URL.cats(),
      method: "GET"
    })
    return response.data;
  }

  async createCat(data: CatData) {
    const response = await axiosApiClassic<Cat[]>({
      url: API_URL.cats(),
      method: "POST",
      data
    })
    return response.data
  }

  async deleteCat(catId: string) {
    const response = await axiosApiClassic({
      url: API_URL.cats(`${catId}`),
      method: "DELETE"
    })
    return response.data;
  }
}

export const catsService = new CatsService()