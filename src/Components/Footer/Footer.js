import { Typography } from '@mui/material'
import React from 'react'
import { Box } from '@mui/system'
import { styles } from './Styles'
import contactLogo from '../../Images/undraw/contact.svg'


const Footer = () => {

    const classes = styles()
    return (
        <Box className={classes.root}>
            <Box className={classes.contactWrp}>
                {/* <img src={contactLogo} alt="contact logo" className={classes.contactLogo} /> */}
                <Typography>Contact us:</Typography>
                <Typography>scaleupOfficial.com</Typography>
                <Typography>+62 000 000</Typography>
                <Typography>@scaleupOfficial</Typography>
            </Box>
            <Box className={classes.linkWrp}>
                <Typography>This is the page link section</Typography>
            </Box>
        </Box>
    )
}

export default Footer
