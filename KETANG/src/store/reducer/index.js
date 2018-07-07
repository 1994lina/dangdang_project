import {combineReducers} from 'redux';
import list from './list'
import Home  from './Home'
import Classify from './Classify'

let reducer =combineReducers ( {
    Home,
    list,
    Classify
});
export default reducer;