import { AppBar, Container, Slide, Toolbar, Typography, useScrollTrigger } from '@material-ui/core'
import { Box } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import Footer from '../Footer/Footer'
import { styles } from './Styles'
import logo from '../../Images/logo.png'
import { Link } from "react-scroll";



const Frame = ({ children }) => {

    const [Color, setColor] = useState(true)

    const classes = styles({ Color })



    const trigger = useScrollTrigger({
        target: undefined,
    });

    const changeBackground = () => {
        if (window.scrollY >= 800) {
            setColor(false)

        } else {
            setColor(true)

        }
    }

    useEffect(() => {
        changeBackground()
        window.addEventListener('scroll', changeBackground)
    }, [])

    return (
        <Box>
            <Slide appear={false} direction='down' in={!trigger}>
                <AppBar elevation={Color ? '0' : '1'} className={Color ? classes.trans : classes.filled}>
                    <Toolbar className={classes.toolbar}>
                        <Link to='top' smooth>
                            <img src={logo} alt="scale up logo" className={classes.logo} />
                        </Link>
                        <Box className={classes.nav}>
                            <Typography className={classes.navLinks} ><Link to='about' smooth>About Us</Link></Typography>
                            <Typography className={classes.navLinks} ><Link to='offerings' smooth>Services</Link></Typography>
                            <Typography className={classes.navLinks} ><Link to='contact' smooth>Contact</Link></Typography>
                        </Box>
                    </Toolbar>

                </AppBar>
            </Slide>
            <Box>

                {children}
            </Box>
            <Container>
                <Footer />
            </Container>
        </Box>
    )
}

export default Frame
