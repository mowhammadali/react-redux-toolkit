import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Todos from '../features/todos/Todos';
import Users from '../features/users/Users';
import CreateUser from '../features/createUser/CreateUser';

const App = () => {
    return (
        <React.Fragment>
            <Navbar />
            <Routes>
                <Route path='/' element={<Todos />}/>
                <Route path='/users' element={<Users />}/>
                <Route path='/create-user' element={<CreateUser />}/>
            </Routes>
        </React.Fragment>
    )
}

export default App;