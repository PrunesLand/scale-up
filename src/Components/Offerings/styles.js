import { makeStyles } from "@mui/styles";

export const styles = makeStyles((theme) => ({
    root: {
        height: '70vh',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center'
    },
    card: {
        width: theme.spacing(40),
        padding: theme.spacing(4)
    },
    cardWrp: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: theme.spacing(2)
    }
}))