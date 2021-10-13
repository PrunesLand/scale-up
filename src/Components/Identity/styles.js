import { makeStyles } from "@material-ui/core";

export const styles = makeStyles((theme) => ({
    root: {
        height: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: theme.palette.secondary.dark
    },
    title: {
        fontSize: theme.typography.h4.fontSize,
        paddingBottom: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            fontSize: theme.typography.h4.fontSize
        }
    },
    content: {
        fontSize: theme.typography.h4.fontSize,
        margin: '0 20rem',
        textAlign: 'center',
        padding: '1rem',
        [theme.breakpoints.up('sm')]: {
            fontSize: theme.typography.h5.fontSize
        }
    }
}))