import { Box, Button, ThemeProvider, useTheme } from '@material-ui/core'
import React from 'react'
import Hero from '../../Components/Hero/Hero'
import Identity from '../../Components/Identity/Identity'
import Layout from '../../Components/Layout/Layout'
import Offerings from '../../Components/Offerings/Offerings'
// import hireImage from '../../Images/undraw/hire.svg'
import buildingImage from '../../Images/undraw/building.svg'
import { Typography } from '@mui/material'
import { Element } from "react-scroll";
import Contact from '../../Components/CTA/Contact'
import { tech } from './technologies'

const Landing = () => {

    const theme = useTheme()

    return (
        <ThemeProvider theme={theme}>

            <Box>
                <Element name='top'>
                    <Hero />
                </Element>
                <Element name='about'>
                    <Identity />
                </Element>
                <Element name='offerings'>
                    <Offerings />
                </Element>
                {/* <Layout left={true} bgColor={theme.palette.secondary.main} image={hireImage}>
                    <Typography variant='h4' sx={{ paddingBottom: '1rem', color: theme.palette.primary.main }}>
                        Acquiring the best result for your business
                    </Typography>
                    <Typography variant='h6' sx={{ color: theme.palette.secondary.dark }}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis consequatur nam animi quis quibusdam tempore, cum eligendi rerum fugit quisquam ducimus architecto, porro aliquam repudiandae accusantium beatae nobis, minus libero.
                    </Typography>
                </Layout> */}
                <Layout left={false} bgColor={theme.palette.secondary.light} image={buildingImage}>
                    <Typography variant='h4' sx={{ paddingBottom: '1rem', color: theme.palette.primary.main }}>
                        Building Your brand with the latest technologies
                    </Typography>
                    {/* <Typography variant='h6' sx={{ color: theme.palette.secondary.dark }}>
                        The technologies we utilize to build yourbrand include:
                    </Typography> */}
                    <Box style={{ display: 'flex', flexWrap: 'wrap' }}>

                        {tech.map(item => (
                            <Box style={{ padding: theme.spacing(1) }} key={item.id}>
                                <Button variant='contained' style={{ height: theme.spacing(6), background: item.color, color: theme.palette.text.secondary }}>

                                    <Typography style={{ whiteSpace: 'nowrap', fontSize: theme.typography.body2.fontSize, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>  <span style={{ alignItems: 'center', display: 'flex', paddingRight: '5px' }}>{item.icon}</span>  {item.title} </Typography>
                                </Button>
                            </Box>
                        ))}

                    </Box>
                </Layout>
                <Element name='contact'>
                    <Contact />
                </Element>
            </Box >
        </ThemeProvider>
    )
}

export default Landing
