import React from 'react';
import css from './User.module.css';

const User = ({ name, job, email }) => {
    return (
        <div className={css.userContainer}>
            <p className={css.para}>Name: <span className={css.infos}>{name}</span></p>
            <p className={css.para}>Email: <span className={css.infos}>{email}</span></p>
            <p className={css.para}>Job: <span className={css.infos}>{job}</span></p>
        </div>
    )
}

export default User;