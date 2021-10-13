import { AppBar, Container, Slide, Toolbar, useScrollTrigger } from '@material-ui/core'
import { Box } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import Footer from '../Footer/Footer'
import { styles } from './Styles'
import logo from '../../Images/logo.png'




const Frame = ({ children }) => {

    const [bgColor, setBackground] = useState('transparent')

    const classes = styles({ bgColor })



    const trigger = useScrollTrigger({
        target: undefined,
    });

    const changeBackground = () => {
        if (window.scrollY >= 800) {
            setBackground('#fff')

        } else {
            setBackground('transparent')

        }
    }

    useEffect(() => {
        changeBackground()
        window.addEventListener('scroll', changeBackground)
    })

    return (
        <Box>
            <Slide appear={false} direction='down' in={!trigger}>
                <AppBar elevation={0} className={classes.appBar}>
                    <Toolbar className={classes.toolbar}>
                        <img src={logo} alt="scale up logo" className={classes.logo} />
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
