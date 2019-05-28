import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import BDApp from './containers/BirthdayApp'
import { createStore } from 'redux'
import bdayReducers from "./reducers"
import store from './store'               // Підключаємо сховище

//-------- Функція, яку будемо підписувати на події сховища ---------
const renderBDList = () => {
        localStorage.setItem("bdays-store", JSON.stringify(store.getState().bdays));
        ReactDOM.render(
            <BDApp store={store}/>,
            document.getElementById("root")
        );
};
//-------- Підписуємо функцію на події сховища 
store.subscribe(renderBDList);
export default renderBDList;
