import { makeStyles } from "@mui/styles";

export const styles = makeStyles((theme) => ({
    root: {
        height: '80vh',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center'
    },
    card: {
        width: theme.spacing(40),


    },
    cardWrp: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',

    },
    content: {
        textAlign: 'left',
        background: theme.palette.secondary.dark
    }
}))