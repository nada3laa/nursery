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
import AddIcon from '@mui/icons-material/Add';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';




export default function Home() {

  const [showBoxes, setShowBoxes] = useState(true); // State to track visibility of boxes

  // Function to toggle visibility of boxes
  const toggleBoxes = () => {
    setShowBoxes(prevState => !prevState);
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const navigate = useNavigate();

  const [displayText, setDisplayText] = useState('');

  const handleClick = (sentence) => {
    setDisplayText(sentence);
  };
  return (
    <div>
      <NAvbar />

     <hr></hr>

    
         
         

      <div className="bgcolor" >
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
                    <p className="display-text">{displayText}</p>
                    </nav>
            </Stack>
           
            


            <Grid container spacing={2}>
            <Grid item md={8} xs={10}>

              <Stack spacing={2} direction={"row"}>

              <Card sx={{ maxWidth: 400 }}  style={{backgroundColor:"#f1f3f8" , marginTop:"30px", width:"900px"}}>
              <CardActionArea>
                <div className='logoo' >
                  <img  style={{
                    marginBottom:"40px",
                    marginTop:"20px",
                    marginLeft:"10px",
                    width:"60px",
                    height:"60px",
                    borderRadius:"50%",
                    border:"5px solid #c5c7c9",
                    backgroundColor:"#fff"}}
                    src='	https://nursary-new-dashboard.vercel.app/_next/image?url=%2Fsidebar%2Flogo.png&w=128&q=75' />
                    <p>
                    body
                    <br></br>
                  </p>
                  <span>month, week</span>

                
                  
               </div>
               <hr class="separator"/>

                <CardContent>
                  
                  <p variant="body2"  style={{color:"#6b7280"}} >
                  No Bookings Available
                  </p>
                </CardContent>
              </CardActionArea>

            </Card>

            <Card sx={{ maxWidth: 400 }}   style={{backgroundColor:"#f1f3f8" ,marginTop:"30px" , width:"900px"}}>
              <CardActionArea>
                <div className='logoo' >
                  <img  style={{
                    marginBottom:"40px",
                    marginTop:"20px",
                    marginLeft:"10px",
                    width:"60px",
                    height:"60px",
                    borderRadius:"50%",
                    border:"5px solid #c5c7c9",
                    backgroundColor:"#fff"}}
                    src='	https://nursary-new-dashboard.vercel.app/_next/image?url=%2Fsidebar%2Flogo.png&w=128&q=75' />
                    <p >
                    mohamed
                    <br></br>
                  </p>
                  <span style={{marginLeft: "-70px"}}>month, week</span>

                
                  
               </div>
               <hr class="separator"/>

                <CardContent>
                  
                  <p variant="body2"  style={{color:"#6b7280"}} >
                  No Bookings Available
                  </p>
                </CardContent>
              </CardActionArea>

            </Card>

                
              </Stack>

              <Stack spacing={2} direction={{xs : "row"}} sx={{ flexGrow: 1, pt: 3 }}>
              <Card sx={{ maxWidth: 400 }}   style={{backgroundColor:"#f1f3f8" , width:"900px"}}>
              <CardActionArea>
                <div className='logoo' >
                  <img  style={{
                    marginBottom:"40px",
                    marginTop:"20px",
                    marginLeft:"10px",
                    width:"60px",
                    height:"60px",
                    borderRadius:"50%",
                    border:"5px solid #c5c7c9",
                    backgroundColor:"#fff"}}
                    src='	https://nursary-new-dashboard.vercel.app/_next/image?url=%2Fsidebar%2Flogo.png&w=128&q=75' />
                    <p >
                    mohsen
                    <br></br>
                  </p>
                  <span style={{marginLeft: "-70px"}}>month, week</span>

                
                  
               </div>
               <hr class="separator"/>

                <CardContent>
                  
                  <p variant="body2"  style={{color:"#6b7280"}} >
                  No Bookings Available
                  </p>
                </CardContent>
              </CardActionArea>

            </Card>

            <Card sx={{ maxWidth: 400 }}   style={{backgroundColor:"#f1f3f8" , width:"900px"}}>
              <CardActionArea>
                <div className='logoo' >
                  <img  style={{
                    marginBottom:"40px",
                    marginTop:"20px",
                    marginLeft:"10px",
                    width:"60px",
                    height:"60px",
                    borderRadius:"50%",
                    border:"5px solid #c5c7c9",
                    backgroundColor:"#fff"}}
                    src='	https://nursary-new-dashboard.vercel.app/_next/image?url=%2Fsidebar%2Flogo.png&w=128&q=75' />
                    <p >
                    said
                    <br></br>
                  </p>
                  <span >month, week</span>

                
                  
               </div>
               <hr class="separator"/>

                <CardContent>
                  
                  <p variant="body2"  style={{color:"#6b7280"}} >
                  No Bookings Available
                  </p>
                </CardContent>
              </CardActionArea>

            </Card>

            


              </Stack>

            </Grid>



        {/* <Grid item md={4} xs={12} sx={{ width: '90%' }}>
      <Card sx={{ height: '80vh' }}>
        <CardContent>
          <h5 className='head-text'>Active Menu</h5>
          {showBoxes && (
            <div className="box-container">
              Small boxes
              <div className="box">Select All</div>
              <div className="box">nada</div>
              <div className="box">nada</div>
            </div>
          )}
          Toggle icon
          <div className="toggle-icon" onClick={toggleBoxes}>
            {showBoxes ? <RemoveCircleOutlineIcon  /> : <AddIcon/>}
            
          </div>
        </CardContent>
      </Card>
    </Grid> */}

            
          </Grid>


            

            <Box height={20} />


            
           

          </Box> 
        </Box>
      </div>

    </div>
  )
}


 {/* <h5 className='head-text'>Residents</h5>
                  <Accordion />
                  <h5 className='head-text'>Units</h5>
                  <Accordion /> */}