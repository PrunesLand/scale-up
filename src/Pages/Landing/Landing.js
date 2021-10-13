import { Box, useTheme } from '@mui/system'
import React from 'react'
import Hero from '../../Components/Hero/Hero'
import Identity from '../../Components/Identity/Identity'
import Layout from '../../Components/Layout/Layout'
import Offerings from '../../Components/Offerings/Offerings'
import hireImage from '../../Images/undraw/hire.svg'
import buildingImage from '../../Images/undraw/building.svg'
import { Typography } from '@mui/material'
const Landing = () => {

    const theme = useTheme()

    return (
        <Box>
            <Hero />
            <Identity />
            <Offerings />
            <Layout left={true} bgColor={theme.palette.secondary.main} image={hireImage}>
                <Typography variant='h4' sx={{ paddingBottom: '1rem' }}>
                    Acquiring the best talent for your needs
                </Typography>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis consequatur nam animi quis quibusdam tempore, cum eligendi rerum fugit quisquam ducimus architecto, porro aliquam repudiandae accusantium beatae nobis, minus libero.
                </Typography>
            </Layout>
            <Layout left={false} bgColor={theme.palette.secondary.light} image={buildingImage}>
                <Typography variant='h4' sx={{ paddingBottom: '1rem' }}>
                    Building Your brand with the latest technologies
                </Typography>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis consequatur nam animi quis quibusdam tempore, cum eligendi rerum fugit quisquam ducimus architecto, porro aliquam repudiandae accusantium beatae nobis, minus libero.
                </Typography>
            </Layout>
        </Box>
    )
}

export default Landing
