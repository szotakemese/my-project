import React from 'react';
import { createStore } from 'redux'
import ActionBDGenerators from "../actions/ActionGenerators"
import BDTable from "../components/BirthdayTable"
import AddForm from "../components/AddForm"
import PropTypes from 'prop-types';

class BDApp extends React.Component{
    constructor(props){
        super(props);
        this.store=this.props.store;
    }
    onAddClick(e,name, month, day)
    {
        e.preventDefault()
        this.store.dispatch(ActionBDGenerators.addBD(name, parseInt(month) ,parseInt(day)))
    }
    onDelClick(id)
    {
        this.store.dispatch(ActionBDGenerators.deleteBD(id));
    }
    render()
    {
        let birthday=this.store.getState().bdays;
        return(
            <div>
                 <BDTable bdays={birthday} onDelClick={this.onDelClick.bind(this)}/>
                 <AddForm onAddClick={this.onAddClick.bind(this)}/>
            </div>

        )
    }
}
BDApp.propTypes = {
    store: PropTypes.object.isRequired,
}
export default BDApp;
