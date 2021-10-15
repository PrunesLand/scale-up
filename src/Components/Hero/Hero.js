import { Button, Typography } from '@material-ui/core'
import { Box } from '@material-ui/core'
import React from 'react'
import herobg from '../../Images/herobg.jpg'
import { styles } from './styles'

import { Link } from "react-scroll";
const Hero = () => {

    const classes = styles()


    return (
        <Box className={classes.box} >
            <img src={herobg} alt="Hero background" className={classes.image} />
            <Typography className={classes.title} >Scale up your business.</Typography>
            <Typography className={classes.content}>Envisioning a better market presence for Small and Medium-sized Businesses (SMB). </Typography>
            <Box className={classes.iconContainer}>
                <Link to='offerings' smooth>
                    <Button variant='contained' className={classes.button}>Our services</Button>
                </Link>

            </Box>
        </Box>
    )
}

export default Hero
