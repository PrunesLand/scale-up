import { makeStyles } from "@material-ui/core";

export const styles = makeStyles((theme) => ({
    root: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        justifyContent: 'center',
        [theme.breakpoints.up('md')]: {
            height: '100vh'
        },
        background: theme.palette.secondary.dark
    },
    card: {
        padding: theme.spacing(1),
        background: theme.palette.common.white,
        minHeight: theme.spacing(50),
        maxWidth: theme.spacing(60),
    },
    cardWrp: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',

        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
        }
    },
    content: {
        textAlign: 'left',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        [theme.breakpoints.up('sm')]: {
            flexDirection: 'center',
        }
    },
    title: {
        paddingBottom: theme.spacing(4),
        paddingLeft: theme.spacing(2),
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
        color: theme.palette.primary.main,
        fontSize: theme.spacing(4),
        textAlign: 'left',
        whiteSpace: 'noWrap',
        [theme.breakpoints.up('sm')]: {
            textAlign: 'center'
        }
    },
    cardDesc: {
        color: theme.palette.secondary.dark,
        alignText: 'left',
        [theme.breakpoints.up('md')]: {
            fontSize: theme.typography.body2.fontSize
        },

    },
    images: {
        padding: '1rem',
        height: theme.spacing(20)
    }
}))