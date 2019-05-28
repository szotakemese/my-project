import ActionTypes from "../constants/ActionTypes"
import {v4} from "uuid"

const ActionBDGenerators={           
    addBD:function (personName, bMonth, bDay) { 
        return {
            type:ActionTypes.ADD_BD,  
            payload:{                                        
                id:v4(),         
                name:personName,
                month:bMonth,
                day:bDay
            }
        }
    },
    deleteBD:function (bdID) {           
        return {
            type:ActionTypes.DELETE_BD, 
            payload:{                     
                id:bdID
            }
        }
    },
    editBD:function (bdID, newName,newMonth, newDay) {
        return {
            type:ActionTypes.EDIT_BD, // Тип дії (редагування)
            payload:{                      // Необхідні дані (нові дані полів)
                id:bdID,     
                name:newName,
                month:newMonth,
                day:newDay
            }
        }
    },
}
export default ActionBDGenerators;
