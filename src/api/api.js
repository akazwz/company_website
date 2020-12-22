import axios from 'axios'

let base = 'http://localhost:8000/api'

export const postNews = params => { return axios.post(base+'/news/add',{params: params})}
export const getNewsByID = params => { return axios.get(base+'/news/get',{params: params})}
export const getAllNews = params => { return axios.get(base+'/news/all',{params: params})}
export const requestLogin = params => { return axios.post(base+'/user/login',{params: params})}
export const captCha = params => { return axios.get(base+'/user/captcha',{params: params})}

