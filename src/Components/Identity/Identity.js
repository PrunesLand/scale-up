import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { styles } from './styles'

const Identity = () => {

    const classes = styles()

    return (
        <Box className={classes.root} >
            <Typography variant='h4' >Who are we?</Typography>
            <Typography variant='h6' sx={{ margin: '0 20rem', textAlign: 'center', padding: '1rem' }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur deleniti id, enim quidem non nisi eligendi delectus! Dicta, alias provident?</Typography>
        </Box>
    )
}

export default Identity
