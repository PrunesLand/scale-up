import { makeStyles } from "@material-ui/core";

export const styles = makeStyles((theme) => ({
    root: {
        height: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'left',
        color: theme.palette.secondary.dark,
        [theme.breakpoints.up('sm')]: {
            alignItems: 'center',
        }

    },
    title: {
        fontSize: theme.typography.h4.fontSize,
        paddingBottom: theme.spacing(2),
        flexDirection: 'row',
        textAlign: 'left',
        padding: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            fontSize: theme.typography.h5.fontSize,
            margin: '0 20rem',
            textAlign: 'center',
        }
    },
    content: {
        fontSize: theme.typography.h6.fontSize,
        textAlign: 'left',
        padding: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            fontSize: theme.typography.h5.fontSize,
            margin: '0 20rem',
            textAlign: 'center',
        }
    }
}))