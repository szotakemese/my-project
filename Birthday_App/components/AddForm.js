import React, { Component } from 'react';
import PropTypes from 'prop-types'
const AddForm=({onAddClick})=>{
    let _name, _month, _day;
    return(
        <form action="">
            <legend>
            <div>
                <label >Name
                  <input type="text" ref={el=>_name=el}/>
                </label>
            </div>
            <div>
                <label>Birth month
                <select size="1" ref={el=>_month=el}>
                    <option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option>
                    <option>7</option><option>8</option><option>9</option><option>10</option><option>11</option><option>12</option>
                </select>            
                </label>
            </div>
            <div>
                <label>Birth day
                <select size="1" ref={el=>_day=el}>
                    <option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option>
                    <option>7</option><option>8</option><option>9</option><option>10</option><option>11</option><option>12</option>
                    <option>13</option><option>14</option><option>15</option><option>16</option><option>17</option><option>18</option>
                    <option>19</option><option>20</option><option>21</option><option>22</option><option>23</option><option>24</option>
                    <option>25</option><option>26</option><option>27</option><option>28</option><option>29</option><option>30</option>
                    <option>31</option>
                </select>      
                </label>
            </div>
            <button onClick={(e)=>onAddClick(e,_name.value, _month.value, _day.value)}>Add</button>
            </legend>
        </form>
    )
}
AddForm.propTypes = {
    onAddClick: PropTypes.func.isRequired,
}
export default AddForm;
