import { Paper } from '@material-ui/core'
import { Box } from '@material-ui/core'
import React from 'react'
import { styles } from './Style'
import Fade from 'react-reveal/Fade'

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
                        <Fade>
                            <Paper className={classes.card}>
                                {children}
                            </Paper>
                        </Fade>
                    </Box>
                </Box>
                :
                <Box className={classes.root}>
                    <Box className={classes.lgContainer}>
                        <Fade>
                            <Paper className={classes.card}>
                                {children}
                            </Paper>
                        </Fade>
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
