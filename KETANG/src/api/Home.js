import axios from './index'


export function Carousel1(){
    return axios.get('/course/banner1');
}

export function Carousel2(){
    return axios.get('/course/banner2');
}

export function Carousel3(){
    return axios.get('/course/banner3');
}