import axios, { AxiosRequestConfig } from 'axios'
import Router from 'next/router'

const instance = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
  timeout: 10 * 60 * 1000,
})

const initialSetup = () => {
  instance.interceptors.response.use(
    response => response,
    error => {
      if (error.response?.status === 401) {
        console.log('UN-AUTHENTICATED') // eslint-disable-line
        Router.push({
          pathname: '/login',
          query: { continue: encodeURI(window?.location?.href) },
        })
      }
      return Promise.reject(error.response)
    },
  )
}

initialSetup()

type ApiRequest = AxiosRequestConfig & { wholeResponse?: string }

const api = async (details: ApiRequest | string) =>
  // @ts-ignore
  instance(details).then(r => ((details.wholeResponse as ApiRequest) ? r : r.data))

export default api
