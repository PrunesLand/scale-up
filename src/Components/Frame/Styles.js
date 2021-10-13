import { makeStyles } from "@material-ui/core";

export const styles = makeStyles((theme) => ({
    root: {

    },
    logo: {
        width: theme.spacing(25),
        cursor: 'pointer',

    },
    appBar: {
        background: (props) => props.bgColor,
        height: theme.spacing(10)
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'left',
    },
}))