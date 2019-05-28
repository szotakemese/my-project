import React, { Component} from 'react';
import PropTypes from 'prop-types'
import BD from "./Birthday"
const BDTable=({bdays,onDelClick})=>{
    return (Object.keys(bdays).length>0) ?(
        <table border="1px solid black" bgcolor="#ededed">
            <thead>
                <th>№</th>
                <th>Name</th>
                <th>Month</th>
                <th>Day</th>
                <th>Delete</th>
            </thead>
            <tbody>
             {Object.keys(bdays).map(
                 (id,num) => (<BD key={id} {...bdays[id]}
                              onDelClick={onDelClick} num={num+1}/>)
                             )
             }
            </tbody>
        </table>)
        : <div><font color="red" size="5">List is empty</font></div>
}
BD.propTypes = {
    bdays: PropTypes.object,
    onDelClick:PropTypes.func.isRequired
}
export default BDTable;
