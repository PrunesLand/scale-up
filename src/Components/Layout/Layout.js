import { Card, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { styles } from './Style'

const Layout = ({ left, image, children, bgColor }) => {

    const classes = styles({ bgColor })

    return (
        <>
            {left ? // left must be boolean to choose layout variant
                <Box className={classes.root}>
                    <Box className={classes.smContainer}>
                        <Typography>
                            Left.
                        </Typography>
                    </Box>
                    <Box className={classes.lgContainer}>
                        <Card className={classes.card}>
                            <Typography variant='body1'>
                                {children}
                            </Typography>
                        </Card>
                    </Box>
                </Box>
                :
                <Box className={classes.root}>
                    <Box className={classes.lgContainer}>
                        <Card className={classes.card}>
                            <Typography variant='body1'>
                                {children}
                            </Typography>
                        </Card>
                    </Box>
                    <Box className={classes.smContainer}>
                        <Typography>
                            Right.
                        </Typography>
                    </Box>
                </Box>
            }
        </>
    )
}

export default Layout
