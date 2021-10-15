import { makeStyles } from "@material-ui/core";


export const styles = makeStyles((theme) => ({
    image: {
        objectFit: 'cover',
        width: '100%',
        height: 'inherit',
        filter: 'brightness(30%)',
        position: 'absolute',
        zIndex: '-1',

    },
    box: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient( rgba(0, 0, 0,0.1 ), rgba(0, 0, 0, 0.1),rgba(145, 145, 145, 0.1),rgba(185, 185, 185, 0.4), rgb(255, 255, 255))',
        color: '#fff'
    },
    content: {

        fontSize: theme.typography.h5.fontSize,
        textAlign: 'left',
        padding: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            fontSize: theme.typography.h4.fontSize,
            margin: '0 15rem',
            textAlign: 'center',
        }
    },
    title: {
        fontSize: theme.typography.h3.fontSize,
        padding: theme.spacing(2),
        color: theme.palette.primary.main,
        [theme.breakpoints.up('sm')]: {
            fontSize: theme.typography.h2.fontSize
        }
    },
    iconContainer: {
        marginTop: '5rem'
    },
    button: {
        fontSize: theme.spacing(2),
        color: theme.palette.primary.main,


    }
}))