import * as TYPES from '../action-types';

let INIT_STATE = {
    bannerData: [],
    bannerData3: [],
};
export default function course(state = INIT_STATE, action) {
    state = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        //=>获取轮播图数据
        case TYPES.COURSE_QUERY_BANNER:
            let {code, data} = action.bannerData;
            
            if (parseFloat(code) === 0) {
                state.bannerData = data;
            }
            break;
        case TYPES.COURSE_QUERY_BANNER3:
        let {code:code3, data:data3} = action.bannerData3;
            
        if (parseFloat(code3) === 0) {
            state.bannerData3 = data3;
        }
        break;

    }
    return state;
};