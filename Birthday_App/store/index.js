import { createStore } from "redux";
import bdayReducers from "../reducers";


let initialStore= localStorage.getItem("bdays-store")?
    {bdays:JSON.parse(localStorage.getItem("bdays-store"))}
    : {bdays:{}} ;

export default createStore(bdayReducers,initialStore);
