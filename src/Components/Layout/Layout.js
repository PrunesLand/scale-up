import { Paper } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { styles } from './Style'

const Layout = ({ left, image, children, bgColor, alt }) => {

    const classes = styles({ bgColor })

    return (
        <>
            {left ? // left must be boolean to choose layout variant
                <Box className={classes.root}>
                    <Box className={classes.smContainer}>
                        <img src={image} alt={alt} className={classes.image} />
                    </Box>
                    <Box className={classes.lgContainer}>
                        <Paper className={classes.card}>

                            {children}

                        </Paper>
                    </Box>
                </Box>
                :
                <Box className={classes.root}>
                    <Box className={classes.lgContainer}>
                        <Paper className={classes.card}>

                            {children}

                        </Paper>
                    </Box>
                    <Box className={classes.smContainer}>
                        <img src={image} alt={alt} className={classes.image} />
                    </Box>
                </Box>
            }
        </>
    )
}

export default Layout
