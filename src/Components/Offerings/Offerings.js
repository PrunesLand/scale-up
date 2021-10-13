import { useTheme } from '@mui/system'
import { CardContent, CardMedia, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { items } from './items'
import { styles } from './styles'

const Offerings = () => {

    const classes = styles()
    const theme = useTheme()
    return (
        <Box className={classes.root}>
            <Typography variant='h4' sx={{ padding: '2rem 0', color: theme.palette.secondary.dark }}>Our Mission:</Typography>
            <Box className={classes.cardWrp}>

                {items.map(item => (
                    <Paper className={classes.card} key={item.id} elevation={12}>
                        <CardContent className={classes.content}>
                            <CardMedia
                                component='img'
                                image={item.image}
                                alt={item.alt}
                                sx={{ padding: '1rem', width: theme.spacing(30) }}
                            />
                            <Typography sx={{ padding: '0.5rem 0', color: theme.palette.primary.main, fontSize: theme.spacing(4), alignText: 'left' }}>{item.title}</Typography>
                            <Typography variant='body1' sx={{ color: theme.palette.secondary.light, alignText: 'left' }}>{item.description}</Typography>
                        </CardContent>
                    </Paper>
                ))}
            </Box>
        </Box>
    )
}

export default Offerings
