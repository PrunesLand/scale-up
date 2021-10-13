import { makeStyles } from "@material-ui/core";

export const styles = makeStyles((theme) => ({
    root: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        [theme.breakpoints.up('sm')]: {
            height: '80vh'
        }
    },
    card: {
        width: theme.spacing(40),
        padding: theme.spacing(2),
        background: theme.palette.secondary.dark
    },
    cardWrp: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        [theme.breakpoints.up('sm')]: {
            flexDirection: 'row',
        }
    },
    content: {
        textAlign: 'left',
    },
    title: {
        padding: theme.spacing(2),
        color: theme.palette.secondary.dark,
        fontSize: theme.typography.h4.fontSize,
        textAlign: 'left',

        [theme.breakpoints.up('sm')]: {
            textAlign: 'center',
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