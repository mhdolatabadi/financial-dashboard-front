import axios, { AxiosRequestConfig } from 'axios'


const BASE_PATH = 'http://localhost:3456'

export const getRequest = (path: string, config: AxiosRequestConfig) => {
  const url = `${BASE_PATH}${path}`
  return axios.get(url, config)
}

export const postRequest = (path: string, data: unknown, config?: AxiosRequestConfig) => {
  const url = `${BASE_PATH}${path}`
  return axios.post(url, data, config)
}

export const putRequest = (path: string, data: unknown, config?: AxiosRequestConfig) => {
  const url = `${BASE_PATH}${path}`
  return axios.put(url, data, config)
}

export const deleteRequest = (path: string, config?: AxiosRequestConfig) => {
  const url = `${BASE_PATH}${path}`
  return axios.delete(url, config)
}