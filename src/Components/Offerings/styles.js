import { makeStyles } from "@material-ui/core";

export const styles = makeStyles((theme) => ({
    root: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        justifyContent: 'center',
        padding: theme.spacing(2),
        background: theme.palette.secondary.dark
    },
    card: {

        background: theme.palette.common.white,
        minHeight: theme.spacing(50),
        maxHeight: theme.spacing(50),
        maxWidth: theme.spacing(60),
    },
    cardWrp: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap',
        [theme.breakpoints.up('lg')]: {
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
        paddingTop: theme.spacing(1),
        fontSize: theme.typography.body1.fontSize,
        [theme.breakpoints.up('md')]: {
            fontSize: theme.spacing(2),
        },

    },
    images: {
        padding: '1rem',
        height: theme.spacing(20)
    }
}))