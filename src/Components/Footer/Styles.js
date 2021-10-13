import { makeStyles } from "@mui/styles";

export const styles = makeStyles((theme) => ({
    root: {
        height: '20vh',

    },
    content: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'start',
        padding: '2rem 0'
    },
    contactWrp: {

        textAlign: 'left',
        width: '100%'
    },
    linkWrp: {
        alignContent: 'left',
        width: '100%'

    },
    contactLogo: {
        width: theme.spacing(25)
    }
}))