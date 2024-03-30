import React, { useEffect } from 'react';
import css from './Users.module.css';
import User from '../../components/user/User';
import { useDispatch , useSelector } from 'react-redux';
import { fetchUsers } from './usersSlice';

const Users = () => {
    const dispatch = useDispatch();
    const usersState = useSelector(state => state.usersState);

    useEffect(() => {
        dispatch(fetchUsers());
    } , [])

    return (
        <div className={css.usersContainer}>
            {usersState.data?.map(user => <User key={user.id} {...user}/>)}
        </div>
    )
}

export default Users;