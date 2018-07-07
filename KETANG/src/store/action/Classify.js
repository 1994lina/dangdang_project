import * as TYPES from '../action-types';
import {queryBanner,queryList,queryListName} from '../../api/course';

let course = {
    // 获取banner
    queryBanner() {
        return async dispatch => {
            let bannerData = await queryBanner();
            dispatch({
                type: TYPES.CLASSIFY_QUERY_BANNER,
                bannerData,  
            });      
        }
    },
    // 获取书列表
    queryList() {
        return async dispatch => {
            let list = await queryList();
            dispatch({
                type: TYPES.CLASSIFY_QUERY_LIST,
                list,
            });      
        }
    },
    // 获取分类页左侧列表
    queryListName(){
        return async dispatch => {
            let listname = await queryListName();
            dispatch({
                type:TYPES.CLASSIFY_QUERY_LISTNAME,
                listname
            })
        }
    }
};
export default course;