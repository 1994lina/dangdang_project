import {combineReducers} from 'redux';
import list from './list'
import Home  from './Home'


let reducer =combineReducers ( {
    Home,
    list
});
export default reducer;