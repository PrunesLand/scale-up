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
        height: theme.spacing(10)
    },
    nav: {
        color: '#fff',
        display: 'flex',
        flexDirection: 'row',

    },
    navLinks: {
        fontSize: theme.typography.h5.fontSize,
        paddingRight: theme.spacing(2),
        cursor: 'pointer',
        color: theme.palette.primary.main
    },
    trans: {
        background: 'transparent'
    },
    filled: {
        background: '#fff',
        color: '#000'
    }
}))