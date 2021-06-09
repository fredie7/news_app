import {SET_NEWS, HANDLE_SEARCH,} from './actions'

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