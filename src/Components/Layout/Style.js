import { makeStyles } from "@material-ui/core";

export const styles = makeStyles((theme) => ({
    root: {
        height: '70vh',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        background: (props) => props.bgColor
    },
    smContainer: {
        width: '45%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    lgContainer: {
        width: '55%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    card: {
        width: theme.spacing(65),
        padding: theme.spacing(4)
    },
    image: {
        width: theme.spacing(60)
    }
}))