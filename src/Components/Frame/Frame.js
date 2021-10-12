import { AppBar, Container, Toolbar, Typography } from '@mui/material'
import React from 'react'
import Footer from '../Footer/Footer'

const Frame = ({ children }) => {
    return (
        <Container>
            <AppBar>
                <Toolbar>
                    <Typography>Scale up appbar</Typography>
                </Toolbar>
            </AppBar>
            <Container>
                <Toolbar />
                {children}
            </Container>
            <Container>
                <Footer />
            </Container>
        </Container>
    )
}

export default Frame
