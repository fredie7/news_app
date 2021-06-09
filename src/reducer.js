import {SET_NEWS, HANDLE_SEARCH,} from './actions'
import { v4 as uuidv4 } from 'uuid'

const reducer = (state=[], action)=> {
    if (action.type === SET_NEWS) {
        return {...state,newsFeed: action.payload.newsFeed}
        // return {...state,newsFeed: action.payload}
    }

    if(action.type === HANDLE_SEARCH) {
        return {...state, query: action.payload}
    }
}
export default reducer;