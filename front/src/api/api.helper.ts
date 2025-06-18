import axios, { CreateAxiosDefaults } from 'axios'

const getContentType = () => ({
  'Content-type': 'application/json'
})

const getContentTypeApi = () => ({
  'Content-type': 'application/json',
  'x-api-key': import.meta.env.VITE_API_SERVER_KEY
})

const options: CreateAxiosDefaults = {
  baseURL: "",
  headers: getContentType(),
  withCredentials: true
}

const optionsApi: CreateAxiosDefaults = {
  baseURL: "",
  headers: getContentTypeApi()
}

const axiosClassic = axios.create(options)
const axiosApiClassic = axios.create(optionsApi)

export { axiosClassic, axiosApiClassic }