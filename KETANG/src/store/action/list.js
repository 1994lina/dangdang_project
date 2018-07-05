import * as TYPES from '../action-types';
import {queryList} from '../../api/course'
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
};
export default list;