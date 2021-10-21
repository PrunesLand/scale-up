import { AppBar, Button, Container, Divider, Drawer, List, ListItem, ListItemText, Slide, Toolbar, Typography, useScrollTrigger, useTheme } from '@material-ui/core'
import { Box } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import Footer from '../Footer/Footer'
import { styles } from './Styles'
import logo from '../../Images/logo.png'
import { Link } from "react-scroll";
import { RiMenu5Line } from 'react-icons/ri'
import iconLogo from '../../Images/iconLogo.svg'

const Frame = ({ children }) => {

    const [Color, setColor] = useState(true)
    const [drawer, setDrawer] = useState(false)
    const classes = styles({ Color })
    const theme = useTheme()


    const toggleDrawer = () => {
        setDrawer(!drawer)
    }

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
                <AppBar elevation={0} className={Color ? classes.trans : classes.filled}>
                    <Toolbar className={classes.toolbar}>
                        <Link to='top' smooth>
                            <img src={logo} alt="scale up logo" className={classes.logo} />
                        </Link>
                        <Box className={classes.nav}>
                            <Typography className={classes.navLinks} ><Link to='about' smooth>About Us</Link></Typography>
                            <Typography className={classes.navLinks} ><Link to='offerings' smooth>Services</Link></Typography>
                            <Typography className={classes.navLinks} ><Link to='contact' smooth>Contact</Link></Typography>
                        </Box>
                        <Button onClick={toggleDrawer} className={classes.drawer}><RiMenu5Line style={{ fontSize: '2rem', color: theme.palette.primary.main }} /></Button>

                        <Drawer anchor='right' open={drawer} onClose={toggleDrawer} >
                            <List className={classes.list}>
                                <img src={iconLogo} alt="scale up icon" className={classes.iconLogo} />
                                <ListItem button >
                                    <Link to='about' onClick={toggleDrawer} smooth>
                                        <ListItemText primary='About Us' />
                                    </Link>
                                </ListItem>
                                <Divider />
                                <ListItem button >
                                    <Link to='offerings' onClick={toggleDrawer} smooth>
                                        <ListItemText primary='Services' />
                                    </Link>
                                </ListItem>
                                <Divider />
                                <ListItem button >
                                    <Link to='contact' onClick={toggleDrawer} smooth>
                                        <ListItemText primary='Contact' />
                                    </Link>
                                </ListItem>
                                <Divider />
                            </List>
                        </Drawer>

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
