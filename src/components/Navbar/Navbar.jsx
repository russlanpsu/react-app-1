import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

console.log(s);


const Navbar = () => {
    return <nav className={s.nav}> 
        <div className={`${s.item} ${s.active}`}>
            <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
        </div>
        
        <div className={s.item}>
            <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
        </div>
        <div className={s.item}>
            <a href="/news">News</a>
        </div>
        <div className={s.item}>
            <a href="/music">Music</a>
        </div>
        <div className={s.item}>
            <a href="/settings">Settings</a>
        </div>
    </nav>
}

export default Navbar;