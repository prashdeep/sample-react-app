import React from 'react';


export class User extends React.Component{
    render(){
        const user = this.props.data;
        return (
            <div>
                Name: {user.name}
                Email: user.email}
                Age: {user.age}
            </div>
        );
    }
}