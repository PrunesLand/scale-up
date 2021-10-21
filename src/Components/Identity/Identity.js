import { Card, Typography, useTheme } from '@material-ui/core'
import { Box } from '@material-ui/core'
import React from 'react'
import { styles } from './styles'
import Fade from 'react-reveal/Fade';

const Identity = () => {

    const theme = useTheme()
    const classes = styles()
    return (
        <Box className={classes.root} >

            <Fade bottom delay={500}>
                <Typography className={classes.title}>What is <span style={{ color: theme.palette.primary.dark }}>Scale Up</span>?</Typography>
            </Fade>
            <Fade bottom delay={1000}>
                <Card className={classes.card}>
                    <Typography className={classes.content}> <span style={{ color: theme.palette.primary.dark }}>Scale Up</span> is a digital agency that focus on accelerating transformation of small medium-sized enterprises and start ups into the digital era. Having a clear understanding of our clients is our priority and key to deliver the best service in creating lasting and impactful experience.</Typography>
                </Card>
            </Fade>


        </Box>
    )
}

export default Identity
