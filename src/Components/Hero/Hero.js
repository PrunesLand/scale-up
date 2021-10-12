import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import herobg from '../../Images/herobg.jpg'
import { makeStyles } from "@mui/styles";

const styles = makeStyles((theme) => ({
    image: {
        objectFit: 'cover',
        width: '100%',
        height: 'inherit',
        filter: 'brightness(30%)',
        position: 'absolute',
        zIndex: '-1',

    },
    box: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient( rgba(0, 0, 0,0.1 ), rgba(0, 0, 0, 0.1),rgba(145, 145, 145, 0.1),rgba(185, 185, 185, 0.4), rgb(255, 255, 255))'
    }
}))

const Hero = () => {

    const classes = styles()

    return (
        <Box className={classes.box} >
            <img src={herobg} alt="Hero background" className={classes.image} />
            <Typography variant='h2' sx={{ color: '#fff' }}>This is the Hero Section</Typography>
            <Typography variant='h4' sx={{ textAlign: 'center', margin: '0 15rem', color: '#fff', padding: '2rem' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ex numquam reprehenderit fugiat aliquid maiores!</Typography>
        </Box>
    )
}

export default Hero
