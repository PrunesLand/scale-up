import { Typography } from '@material-ui/core'
import { Box } from '@material-ui/core'
import React from 'react'
import { styles } from './styles'

const Identity = () => {

    const classes = styles()
    return (
        <Box className={classes.root} >
            <Typography className={classes.title}>What is Scale Up?</Typography>
            <Typography className={classes.content}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur deleniti id, enim quidem non nisi eligendi delectus! Dicta, alias provident?</Typography>
        </Box>
    )
}

export default Identity
