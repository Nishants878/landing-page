import React from 'react'
import classes from './Topbar.module.css';
import Search from '../Assest/Pictures/search.svg'
export default function Topbar() {
    return (
        <div className={classes.TopbarMainContainer}>
          <div className={classes.ContentWrapper}>
          <div className={classes.SearchWrapper}>
                <img src={Search} alt="Location" />
                <input className={classes.SearchEnter} type="text"
                    placeholder="Type here to search"

                ></input>


            </div>
            <div className={classes.NavigationWrapper}>
                <div className={classes.Nav}>
                    <p>Home</p>
                </div>
                <div className={classes.Nav}>
                    <p>About DSAH</p>
                </div>
                <div className={classes.Nav}>
                    <p>Newsletter</p>
                </div>
                <div className={classes.Nav}>
                    <p>Careers</p>
                </div>
            </div>
          </div>
        </div>
    )
}
