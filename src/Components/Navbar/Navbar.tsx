import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import {Avatar, AvatarGroup} from "@mui/material";

export const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
            </div >
            <div className={s.item}>
                <NavLink to='/dialogs' activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings' activeClassName={s.activeLink}>Settings</NavLink>
            </div>
            <div>  <AvatarGroup max={3} >
                <Avatar alt="Remy Sharp" src="https://i.pinimg.com/originals/b4/92/a9/b492a9b45f98c8a203ae66ab1eef252d.jpg" />
                <Avatar alt="Travis Howard" src="https://i.pinimg.com/736x/e1/9b/22/e19b222174a58b57a94e7b231be4fc53.jpg" />
                <Avatar src="https://www.meme-arsenal.com/memes/afbc5b6f04f7156ed8d679c7765cf8a2.jpg" />
                <Avatar alt="https://www.meme-arsenal.com/memes/baa1d4ccfc1efbebdbbcd6e404656556.jpg" />
                <Avatar alt="Trevor Henderson" src="https://www.meme-arsenal.com/memes/afbc5b6f04f7156ed8d679c7765cf8a2.jpg" />
            </AvatarGroup>
            </div>

        </nav>
    );
};

