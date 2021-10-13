import { Typography } from '@material-ui/core'
import { Box } from '@material-ui/core'
import React from 'react'
import herobg from '../../Images/herobg.jpg'
import { styles } from './styles'

const Hero = () => {

    const classes = styles()

    return (
        <Box className={classes.box} >
            <img src={herobg} alt="Hero background" className={classes.image} />
            <Typography className={classes.title} >Scale up your business.</Typography>
            <Typography className={classes.content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ex numquam reprehenderit fugiat aliquid maiores!</Typography>
        </Box>
    )
}

export default Hero
