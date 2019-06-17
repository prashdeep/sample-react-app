import React from 'react';


export class UserList extends React.Component{
    render(){
        const users = this.props.users;
        return (
            <div id="container" >
                {users.array.forEach(user => {
                   <User data='user' /> 
                })};
            </div>
        );
    }
}