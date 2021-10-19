import { CardContent, CardMedia, Paper, Typography } from '@material-ui/core'
import { Box } from '@material-ui/core'
import React from 'react'
import { items } from './items'
import { styles } from './styles'
import Fade from 'react-reveal/Fade'

const Offerings = () => {

    const classes = styles()

    return (
        <Box className={classes.root}>
            <Typography className={classes.title} >Our Services</Typography>
            <Box className={classes.cardWrp}>

                {items.map(item => (
                    <Box style={{ padding: '1rem' }} key={item.id}>
                        <Fade delay={parseInt(`${item.id}00`)} left>
                            <Paper className={classes.card} elevation={12}>
                                <CardContent className={classes.content}>
                                    <CardMedia
                                        component='img'
                                        image={item.image}
                                        alt={item.alt}
                                        className={classes.images}
                                    />
                                    <Typography className={classes.cardTitle}>{item.title}</Typography>
                                    <Typography className={classes.cardDesc}>{item.description}</Typography>
                                </CardContent>
                            </Paper>
                        </Fade>
                    </Box>
                ))}
            </Box>
        </Box >
    )
}

export default Offerings
