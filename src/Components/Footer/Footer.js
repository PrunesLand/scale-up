import { Divider, Typography } from '@material-ui/core'
import React from 'react'
import { Box } from '@material-ui/core'
import { styles } from './Styles'
import instagram from '../../Images/icons/instagram.svg'
import whatsapp from '../../Images/icons/whatsapp.svg'
const Footer = () => {

    const classes = styles()
    return (
        <Box className={classes.root}>
            <Box className={classes.content}>
                <Box className={classes.contactWrp}>
                    <Typography>Link with us on:</Typography>
                    <Box className={classes.iconWrp}>
                        <img src={whatsapp} alt="whatsapp logo" className={classes.icon} />
                        <img src={instagram} alt="instagram logo" className={classes.icon} />
                    </Box>
                    <Typography>+62 856 9229 3738</Typography>
                    <Typography>@scaleup.official</Typography>
                </Box>
                <Box className={classes.linkWrp}>
                    <Typography>Made By:</Typography>
                    <Typography  ><a href='https://github.com/PrunesLand' rel="noreferrer" target='_blank' className={classes.github}>PrunesLand</a></Typography>
                </Box>
            </Box>
            <Divider />
            <Box sx={{ textAlign: 'center', padding: '1rem 0' }}>
                <Typography align='center' > &copy;{new Date().getFullYear()} Scale Up</Typography>
            </Box>
        </Box>
    )
}

export default Footer
