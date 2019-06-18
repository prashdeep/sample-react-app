import React from 'react';
import ReactDOM from 'react-dom';
import './css/Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserList } from './UserList';

const data=[   
              {
                id:1,
                name:'Dhoni',
                team:'India'
              },
              {
                id:2,
                name:'Kohli',
                team:'India'
              }
             
            ];
ReactDOM.render(

        <div className="alert alert-danger ">
           <UserList users={data}/> 
        </div>, 
        document.getElementById('root'));

