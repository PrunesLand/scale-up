import { makeStyles } from "@material-ui/core";

export const styles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'left',
        color: theme.palette.common.black,
        margin: theme.spacing(5),
        [theme.breakpoints.up('sm')]: {
            alignItems: 'center',
        }

    },
    title: {
        fontSize: theme.typography.h4.fontSize,
        paddingBottom: theme.spacing(4),
        flexDirection: 'row',
        textAlign: 'left',

        [theme.breakpoints.up('md')]: {
            fontSize: theme.typography.h3.fontSize,
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
            textAlign: 'center',
        }
    },
    card: {
        height: theme.spacing(25),
        maxWidth: theme.spacing(90),
        background: theme.palette.secondary.light,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        padding: theme.spacing(2)

    }
}))