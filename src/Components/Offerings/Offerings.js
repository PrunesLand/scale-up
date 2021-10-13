import { CardContent, CardMedia, Paper, Typography } from '@material-ui/core'
import { Box } from '@material-ui/core'
import React from 'react'
import { items } from './items'
import { styles } from './styles'

const Offerings = () => {

    const classes = styles()

    return (
        <Box className={classes.root}>
            <Typography className={classes.title} >Our Mission:</Typography>
            <Box className={classes.cardWrp}>

                {items.map(item => (
                    <Paper className={classes.card} key={item.id} elevation={12}>
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
                ))}
            </Box>
        </Box>
    )
}

export default Offerings
