import * as TYPES from '../action-types';

let INIT_STATE = {
    banner: [],
    list: [],
    listname:[]
};
export default function course(state = INIT_STATE, action) {
    state = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        //=>获取轮播图数据
        case TYPES.CLASSIFY_QUERY_BANNER:
            let {code, data} = action.bannerData;
            if (parseFloat(code) === 0) {
                state.banner = data;
            }
            break;
        case TYPES.CLASSIFY_QUERY_LIST:
            let {code:code3, data:bookList} = action.list;

            if (parseFloat(code3) === 0) {
                state.list = bookList;
            }
            break;
        case TYPES.CLASSIFY_QUERY_LISTNAME:
            let {code:nCode,data:listname} = action.listname;
            if (parseFloat(nCode) === 0) {
                state.listname = listname;
            }
            break;

    }
    return state;
};