import { Typography } from '@material-ui/core'
import { Box } from '@mui/system'
import React from 'react'
import collab from '../../Images/undraw/collab.svg'
import { styles } from './styles'
import instagram from '../../Images/icons/instagram.svg'
import whatsapp from '../../Images/icons/whatsapp.svg'
const Contact = () => {


    const classes = styles()
    return (
        <Box className={classes.root}>
            <Typography className={classes.title} >Collaborate with us!</Typography>
            <Box className={classes.content}>

                <Box className={classes.header}>
                    <img src={collab} alt="connect with us" className={classes.image} />
                </Box>
                <Box className={classes.contactInfo}>
                    <Box className={classes.wrapper}>
                        <Typography className={classes.text}>Follow us on Instagram!</Typography>
                        <Box className={classes.contactWrapper}>
                            <img src={instagram} alt="instagram logo" className={classes.logo} />
                            <Typography variant='body1'>@scaleupOfficial</Typography>
                        </Box>
                    </Box>
                    <Box className={classes.wrapper}>
                        <Typography className={classes.text}>Contact our whatsapp business number!</Typography>
                        <Box className={classes.contactWrapper}>
                            <img src={whatsapp} alt="whatsapp logo" className={classes.logo} />
                            <Typography variant='body1'>+62 000 000</Typography>

                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Contact
