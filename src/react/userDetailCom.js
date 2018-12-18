import React from 'react';
import { connect } from 'react-redux';


const UserDetail = (props) => {
    if (!props.list) {
        return (
            <h2>Pleas Select User name first</h2>
        )
    }
    return (
        <div>
            <h1> Name : {props.list.name}</h1>
            <h3>Age : {props.list.age}</h3>
            <h3>City : {props.list.city}</h3>
            <h3>Hobby : {props.list.hobby}</h3>
            
        </div>
    )
}


function mapStateToPorps(state) {
    console.log(state.detail)
    return {
        list: state.detail
    }
}


export default connect(mapStateToPorps)(UserDetail)