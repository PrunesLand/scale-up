import { AppBar, Container, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Footer from '../Footer/Footer'
// import { styles } from './Styles'

const Frame = ({ children }) => {



    return (
        <Box maxWidth='xl'>
            <AppBar elevation={0} color='transparent'>
                <Toolbar >
                    <Typography variant='h5' sx={{ color: '#fff' }}>Scale up appbar</Typography>
                </Toolbar>
            </AppBar>
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
