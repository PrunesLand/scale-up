import { makeStyles } from "@material-ui/core";

export const styles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
    },
    title: {
        fontSize: theme.spacing(5),
        padding: theme.spacing(2)
    },
    image: {
        height: theme.spacing(30),
        maxWidth: theme.spacing(65),
        padding: theme.spacing(2)
    },
    contactInfo: {
        display: 'flex',
        flexDirection: 'column'
    },
    logo: {
        height: theme.spacing(3),
        paddingRight: theme.spacing(1),
        paddingTop: theme.spacing(1),
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
    },
    contactWrapper: {
        display: 'flex',
        flexDirection: 'row',
        paddingBottom: theme.spacing(1),
        alignItems: 'center',
        justifyContent: 'left'
    }

}))