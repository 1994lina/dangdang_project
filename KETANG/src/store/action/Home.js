import * as TYPES from '../action-types';
import {Carousel1, Carousel2,Carousel3} from '../../api/Home';

let course = {
    queryBanner() {
        return async dispatch => {
            let bannerData = await Carousel2();
            dispatch({
                type: TYPES.COURSE_QUERY_BANNER,
                bannerData,  
            });      
        }
    },
    queryBanner3() {
        return async dispatch => {
            let bannerData3 = await Carousel3();
            dispatch({
                type: TYPES.COURSE_QUERY_BANNER3,
                bannerData3,  
            });      
        }
    }
};
export default course;