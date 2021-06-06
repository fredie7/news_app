import {SET_NEWS} from './actions'
import { v4 as uuidv4 } from 'uuid'

const reducer = (state=[], action)=> {
    if (action.type === SET_NEWS) {
        return {...state,newsFeed: action.payload.newsFeed}
        // return {...state,newsFeed: action.payload}
    }
}
export default reducer;