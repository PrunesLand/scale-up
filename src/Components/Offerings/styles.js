import { makeStyles } from "@material-ui/core";

export const styles = makeStyles((theme) => ({
    root: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        justifyContent: 'center',
        [theme.breakpoints.up('sm')]: {
            height: '100vh'
        },
        background: theme.palette.secondary.dark
    },
    card: {
        padding: theme.spacing(1),
        background: theme.palette.secondary.light,
        minHeight: theme.spacing(50)
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
        paddingBottom: theme.spacing(4),
        color: theme.palette.common.white,
        fontSize: theme.typography.h4.fontSize,
        textAlign: 'left',

        [theme.breakpoints.up('sm')]: {
            textAlign: 'center',
            fontSize: theme.typography.h3.fontSize
        }
    },
    cardTitle: {
        padding: '0.5rem 0',
        color: theme.palette.common.black,
        fontSize: theme.spacing(4),
        alignText: 'left'
    },
    cardDesc: {
        color: theme.palette.common.black,
        alignText: 'left',
        [theme.breakpoints.up('sm')]: {
            fontSize: theme.typography.body2.fontSize
        },

    },
    images: {
        padding: '1rem',
        width: theme.spacing(30)
    }
}))