import { makeStyles } from "@material-ui/core";

export const styles = makeStyles((theme) => ({
    root: {
        height: '80vh',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center'
    },
    card: {
        width: theme.spacing(40),


    },
    cardWrp: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',

    },
    content: {
        textAlign: 'left',
        background: theme.palette.secondary.dark
    },
    title: {
        padding: '2rem 0',
        color: theme.palette.secondary.dark,
        [theme.breakpoints.up('sm')]: {
            fontSize: theme.typography.h4.fontSize
        }
    },
    cardTitle: {
        padding: '0.5rem 0',
        color: theme.palette.primary.main,
        fontSize: theme.spacing(4),
        alignText: 'left'
    },
    cardDesc: {
        color: theme.palette.secondary.light,
        alignText: 'left',
        [theme.breakpoints.up('sm')]: {
            fontSize: theme.typography.body2.fontSize
        }
    },
    images: {
        padding: '1rem',
        width: theme.spacing(30)
    }
}))