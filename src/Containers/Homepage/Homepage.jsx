import React from 'react'
import classes from './Homepage.module.css';
import Topbar from '../../Components/Topbar/Topbar';
import PortalCards from '../../Components/PortalCards/PortalCards';
import InfoBar from '../../Components/InfoBar/InfoBar'

export default function Homepage() {

   const data =[{
    "id": "1",
    "title": "Patient Portal",
    
  },
  {
    "id": "2",
    "title": "Find a doctor",
   
  },
  {
    "id": "3",
    "title": "Departments",
    
  },]
    

    return (
        <div className={classes.MainContainer}>
          
         
          <div className={classes.MainContentWrapper}>
              <Topbar/>
              <div className={classes.DetailsContainer}>
                  <div className={classes.PortalCardContainer}>
                  {
                      data.map(item =>{
                          return <PortalCards id={item.id} key={item.id} title={item.title}/>
                      })
                  }
                  </div>
                  <div className={classes.InfoContainer}>
                     <InfoBar/>
                  </div>
             
              </div>
          </div>
        </div>
    )
}
