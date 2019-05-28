import ActionTypes from "../constants/ActionTypes"
import ActionBDGenerators from "../actions/ActionGenerators"

const bdayReducers=(state,action) => {
    switch (action.type)
    {
        case ActionTypes.ADD_BD:            
            return {
                bdays: { ...(state.bdays),
                            [action.payload.id]:action.payload   
                }
            }
        case ActionTypes.DELETE_BD:        
            let ob={...state.bdays};
            delete ob[action.payload.id];
            return {
                bdays: ob
            }
        case ActionTypes.EDIT_BD:         
            return {
                bdays: {...state.bdays}[action.payload.id]={...action.payload}
            }
        default:
            return state;
    }
}
export default bdayReducers;
