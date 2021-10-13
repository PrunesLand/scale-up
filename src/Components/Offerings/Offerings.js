import { useTheme } from '@emotion/react'
import { Card, CardContent, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { items } from './items'
import { styles } from './styles'

const Offerings = () => {

    const classes = styles()
    const theme = useTheme()
    return (
        <Box className={classes.root}>
            <Typography variant='h4' sx={{ padding: theme.spacing(2) }}>Our Mission:</Typography>
            <Box className={classes.cardWrp}>

                {items.map(item => (
                    <Card className={classes.card} key={item.id}>
                        <CardContent>
                            <Typography>{item.title}</Typography>
                            <Typography>{item.description}</Typography>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </Box>
    )
}

export default Offerings
