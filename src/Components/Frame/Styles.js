import { makeStyles } from "@material-ui/core";

export const styles = makeStyles((theme) => ({
    root: {

    },
    logo: {
        width: theme.spacing(25),
        cursor: 'pointer',


    },
    // appBar: {
    //     background: (props) => props.Color,

    // },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
        height: theme.spacing(10),

    },
    nav: {
        color: '#fff',
        flexDirection: 'row',
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex'
        }

    },
    navLinks: {
        fontSize: theme.typography.h5.fontSize,
        paddingRight: theme.spacing(2),
        cursor: 'pointer',
        color: theme.palette.primary.main,
        '&:hover': {
            color: theme.palette.secondary.main,

        },
    },
    trans: {
        background: 'transparent'
    },
    filled: {
        background: '#fff',
        color: '#000'
    },
    drawer: {
        display: 'block',
        [theme.breakpoints.up('md')]: {
            display: 'none'
        }
    },
    iconLogo: {
        width: theme.spacing(10),
        padding: theme.spacing(3)
    },
    list: {
        width: '8rem',
        textAlign: 'center'
    },

}))