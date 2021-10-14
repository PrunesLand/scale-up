import { makeStyles } from "@material-ui/core";

export const styles = makeStyles((theme) => ({
    root: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: (props) => props.bgColor,
        padding: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            flexDirection: 'row',
            height: '70vh',
        }
    },
    smContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'start',
        [theme.breakpoints.up('sm')]: {
            justifyContent: 'center',
            alignItems: 'center',
            width: '45%',
        }
    },
    lgContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.up('sm')]: {
            width: '55%',
        }
    },
    card: {
        maxWidth: theme.spacing(65),
        padding: theme.spacing(4)
    },
    image: {
        width: theme.spacing(40),
        padding: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(60),
        }
    },

}))