import { Box, useTheme } from '@mui/system'
import React from 'react'
import Hero from '../../Components/Hero/Hero'
import Identity from '../../Components/Identity/Identity'
import Layout from '../../Components/Layout/Layout'

const Landing = () => {

    const theme = useTheme()

    return (
        <Box>
            <Hero />
            <Identity />
            <Layout left={false} bgColor={theme.palette.secondary.main}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis consequatur nam animi quis quibusdam tempore, cum eligendi rerum fugit quisquam ducimus architecto, porro aliquam repudiandae accusantium beatae nobis, minus libero.
            </Layout>
            <Layout left={true} bgColor={theme.palette.secondary.light}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis consequatur nam animi quis quibusdam tempore, cum eligendi rerum fugit quisquam ducimus architecto, porro aliquam repudiandae accusantium beatae nobis, minus libero.
            </Layout>
        </Box>
    )
}

export default Landing
