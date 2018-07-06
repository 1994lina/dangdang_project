import * as TYPES from '../action-types';
import {queryList,queryShopCart} from '../../api/course'
let list={
    queryList(payload = {}) {
        let {limit = 10, page = 1} = payload;
        return async dispatch => {
            let result = await queryList({
                limit,
                page
            });
            dispatch({
                type: TYPES.COURSE_QUERY_LIST,
                result
            });
        }
    },
    queryUnpay() {
        return async dispatch => {
            let result = await queryShopCart(0);
            dispatch({
                type: TYPES.COURSE_UNPAY,
                result
            });
        }
    },
    handleSelect(mode){
        return{
            type:TYPES.COURSE_HANDLE,
            mode
        }
    }
};
export default list;