import React from 'react';
import UserList from './react/userlist'
import UserDetail from './react/userDetailCom';




const App = () => (    
    <div>                
        <h2>Name list </h2>
        <UserList/>
        <hr/>
        <h3>Details of users</h3>
        <UserDetail/>
    </div>
)

export default App;