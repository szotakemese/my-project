import React, { Component} from 'react';
import PropTypes from 'prop-types'
const BD=({id,name, month, day, onDelClick, num})=>{
    return(
        <tr>
            <td>{num}</td>
            <td>{name}</td>
            <td>{month}</td>
            <td>{day}</td>
            <td><a onClick={()=>onDelClick(id)}><font color="red"><b>X</b></font></a></td>
        </tr>
    )
}
BD.propTypes = {
    id: PropTypes.any.isRequired,
    name: PropTypes.number.isRequired,
    month: PropTypes.string.isRequired,
    day: PropTypes.string.isRequired,
    onDelClick:PropTypes.func.isRequired
}
export default BD;
