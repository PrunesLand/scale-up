import { Divider, Typography } from '@material-ui/core'
import React from 'react'
import { Box } from '@material-ui/core'
import { styles } from './Styles'
// import contactLogo from '../../Images/undraw/contact.svg'


const Footer = () => {

    const classes = styles()
    return (
        <Box className={classes.root}>
            <Box className={classes.content}>
                <Box className={classes.contactWrp}>
                    {/* <img src={contactLogo} alt="contact logo" className={classes.contactLogo} /> */}
                    <Typography>Contact us:</Typography>
                    <Typography>scaleupOfficial.com</Typography>
                    <Typography>+62 000 000</Typography>
                    <Typography>@scaleupOfficial</Typography>
                </Box>
                <Box className={classes.linkWrp}>
                    <Typography>Made By:</Typography>
                    <Typography>PrunesLand</Typography>
                </Box>
            </Box>
            <Divider />
            <Box sx={{ textAlign: 'center', padding: '1rem 0' }}>
                <Typography>Scale Up</Typography>
            </Box>
        </Box>
    )
}

export default Footer
