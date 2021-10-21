import { makeStyles } from "@material-ui/core";

export const styles = makeStyles((theme) => ({
    root: {
        height: '20vh',
        color: theme.palette.secondary.main

    },
    content: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'start',
        padding: '2rem 0',
    },
    contactWrp: {

        textAlign: 'left',
        width: '100%'
    },
    linkWrp: {
        alignContent: 'left',
        width: '100%'

    },
    iconWrp: {
        display: 'flex',
        flexDirection: 'row',
    },
    icon: {
        width: theme.spacing(3.5),
        paddingRight: theme.spacing(1),
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1)
    },
    github: {
        color: theme.palette.secondary.main,
        textDecoration: 'none',
        '&:hover': {
            color: theme.palette.primary.main
        }
    }
}))