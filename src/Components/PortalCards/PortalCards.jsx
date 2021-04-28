import React from 'react'
import classes from './PortalCards.module.css'
export default function PortalCards(props) {
    return (
        <div className={classes.MainContainer}>
           {props.title}
        </div>
    )
}
