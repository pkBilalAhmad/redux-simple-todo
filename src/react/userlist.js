import React from 'react';
import { connect } from 'react-redux';

const UserList = (props) => {
    if(!props.list){
        return (
            <h2>Pleas Select User</h2>
        )
    }
    return (
        <div>
            <ul>
                {
                    props.list.map((item, index) =>
                        (<li key={index} onClick={() =>
                            (props.clickToDetail(item))}>{item.name}</li>)
                    )
                }
            </ul>
        </div>
    )
}
const mapStateToProps = (state) => {    
    return {
        list: state.list
    }
}
const mapDispatchToProps = (dispatch, state) => {
    return {
        clickToDetail: (item) => {
            // console.log(user.name)
            const action = {
                type: 'NAME',
                payload: item
            }
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserList);