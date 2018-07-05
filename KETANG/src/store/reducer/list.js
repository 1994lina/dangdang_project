import * as TYPES from '../action-types';

let INIT_STATE = {
    courseData: {
        total: 1,
        limit: 10,
        page: 1,
        pcs:1,
        data: []
    }
};
export default function list(state = INIT_STATE, action) {
    state = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        //=>获取课程列表信息
        case TYPES.COURSE_QUERY_LIST:
            let {result} = action;
            if (parseFloat(result.code) === 0) {
                state.courseData.total = parseFloat(result.total);
                state.courseData.limit = parseFloat(result.limit);
                state.courseData.pcs = parseFloat(result.pcs);//商品个数
                state.courseData.page = parseFloat(result.page);
                state.courseData.data =  state.courseData.data.concat(result.data);
            }
            break;
    }
    return state;
};