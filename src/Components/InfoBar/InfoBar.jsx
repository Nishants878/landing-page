import React from 'react'
import classes from './InfoBar.module.css'
import icon from '../Assest/Pictures/profile.jpg'
export default function InfoBar() {
    return (
        <div className={classes.MainContainer}>
            <div className={classes.IconContainer}>
                <img src={icon} alt="profile"/>
            </div>
            <div className={classes.NameWrapper}>
                Prof.Samir Abbas
            </div>
            <div className={classes.SecondaryText}>
            Professor Samir Abbas, founder of the hospital, and owner of a number of women wellness centers kingdom-wide ...
            </div>
        </div>
    )
}
