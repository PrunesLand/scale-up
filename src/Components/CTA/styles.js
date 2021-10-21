import { makeStyles } from "@material-ui/core";

export const styles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh',
        [theme.breakpoints.up('sm')]: {
            flexDirection: 'column',
        },

    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
        },
        alignItems: 'center'

    },
    header: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            padding: '0 3rem',
            width: '50%',
            justifyContent: 'end',
        }
    },
    title: {
        fontSize: theme.typography.h4.fontSize,
        padding: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            fontSize: theme.typography.h2.fontSize
        }
    },
    image: {
        width: theme.spacing(30),
        maxWidth: theme.spacing(65),
        padding: theme.spacing(2)
    },
    contactInfo: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '50%',
        }
    },
    logo: {
        height: theme.spacing(3),
        paddingRight: theme.spacing(1),
        paddingTop: theme.spacing(1),
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: theme.spacing(2),
        paddingTop: theme.spacing(1)

    },
    contactWrapper: {
        display: 'flex',
        flexDirection: 'row',
        paddingBottom: theme.spacing(1),
        alignItems: 'center',
        justifyContent: 'left'
    },
    text: {
        fontSize: theme.typography.h6.fontSize,

    },
    whatsappButton: {
        width: theme.spacing(20),
        backgroundColor: '#51c960'
    }

}))