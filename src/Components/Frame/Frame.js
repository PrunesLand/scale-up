import { AppBar, Container, Slide, Toolbar, useScrollTrigger } from '@mui/material'
import { Box, useTheme } from '@mui/system'
import React, { useEffect, useState } from 'react'
import Footer from '../Footer/Footer'
import { styles } from './Styles'
import logo from '../../Images/logo.png'




const Frame = ({ children }) => {

    const [bgColor, setBackground] = useState('transparent')
    const [move, setMove] = useState(true)
    const classes = styles({ bgColor })
    const theme = useTheme()


    const trigger = useScrollTrigger({
        target: undefined,
    });

    const changeBackground = () => {
        if (window.scrollY >= 800) {
            setBackground('#fff')
            setMove(false)
        } else {
            setBackground('transparent')
            setMove(true)
        }
    }


    useEffect(() => {
        changeBackground()

        window.addEventListener('scroll', changeBackground)
    })



    return (
        <Box>
            <Slide appear={false} direction='down' in={!trigger}>
                <AppBar elevation={0} sx={{ height: '10vh', background: bgColor }}>
                    <Toolbar >
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