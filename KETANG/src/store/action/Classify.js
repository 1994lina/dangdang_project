import * as TYPES from '../action-types';
import {queryBanner,queryList} from '../../api/course';

let course = {
    queryBanner() {
        return async dispatch => {
            let bannerData = await queryBanner();
            dispatch({
                type: TYPES.CLASSIFY_QUERY_BANNER,
                bannerData,  
            });      
        }
    },
    queryList() {
        return async dispatch => {
            let list = await queryList();
            dispatch({
                type: TYPES.CLASSIFY_QUERY_LIST,
                list,
            });      
        }
    }
};
export default course;