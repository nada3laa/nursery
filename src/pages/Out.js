import React, { useState } from 'react';
import './style.css'
import Sidenav from '../components/Sidenav';
import NAvbar from '../components/Navbar';
import Accordion from '../components/Accordion';
import { BarChart } from '../charts/Barchart';
import { GeoChart } from '../charts/Geochart';
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Typography from "@mui/material/Typography";
import { Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import "../dash.css";
import ApartmentIcon from '@mui/icons-material/Apartment';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ScheduleSendIcon from '@mui/icons-material/ScheduleSend';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import { Link } from 'react-router-dom';


import {useNavigate} from "react-router-dom";
import AddHomeIcon from '@mui/icons-material/AddHome';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AddTaskIcon from '@mui/icons-material/AddTask';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import InboxIcon from '@mui/icons-material/MoveToInbox';



export default function Out() {

  return (
    <div>
      <NAvbar />

     <hr></hr>

      <div className="bgcolor">
        <Box height={70} />
        <Box sx={{ display: "flex"}}>
          <Sidenav />

        

           <Box className="bgcolor" component="main" sx={{ flexGrow: 1, pt: 3, pl:3}}>

          
           <Stack direction="row" spacing={2} style={{marginTop:"60px"}} height={50}>
        

                    <nav className="ml-auto nav-link ">
                    <Link to="/" className='navbar-links nav-one button_one' >
                        <AddHomeIcon className='button_icon'
                                        sx={{
                                            minwidth: 0,
                                            mr:  "3",
                                            justifyContent: "center",
                                        }}
                                        >
                                        <InboxIcon /> 
                                        </AddHomeIcon>
                                        <span className='text'>My Day 0/</span>0
                        </Link>

                        <Link to="Due" className='navbar-links' href="#Due">

                        <FormatListBulletedIcon className='button_icon'
                                        sx={{
                                            minwidth: 0,
                                            mr:  "3",
                                            justifyContent: "center",
                                        }}
                                        >
                                        <InboxIcon /> 
                                        </FormatListBulletedIcon>
                                        <span className='text'>Due 0</span>

                        </Link>

                        <Link to= '/In'className='navbar-links' href="#In">
                        
                        <AddTaskIcon className='button_icon'
                                        sx={{
                                            minwidth: 0,
                                            mr:  "3",
                                            justifyContent: "center",
                                        }}
                                        >
                                        <InboxIcon /> 
                                        </AddTaskIcon>
                                        <span className='text'>In 0/</span>0


                        </Link>

                        <Link to="/Out" className='navbar-links' href="#Out">
                        
                        < ArrowCircleRightIcon className='button_icon'
                                        sx={{
                                            minwidth: 0,
                                            mr:  "3",
                                            justifyContent: "center",
                                        }}
                                        >
                                        <InboxIcon /> 
                                        </ ArrowCircleRightIcon>
                                        <span className='text'>Out 0</span>


                        </Link>

                        <Link to="/Absent" className="navbar-links" href="#Absent">
                        
                        < DeleteForeverIcon className='button_icon'
                                        sx={{
                                            minwidth: 0,
                                            mr:  "3",
                                            justifyContent: "center",
                                        }}
                                        >
                                        <InboxIcon /> 
                                        </ DeleteForeverIcon>
                                        <span className='text'>Absent 0</span>
                        </Link>
                        
                        </nav>
            </Stack>
           
            


          <h2>nothing</h2>

            

            <Box height={20} />


            
           

          </Box> 
        </Box>
      </div>

    </div>
  )
}
