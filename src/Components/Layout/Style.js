import { makeStyles } from "@mui/styles";

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
        width: '35%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    lgContainer: {
        width: '65%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    card: {
        width: theme.spacing(65),
        padding: theme.spacing(2)
    }
}))