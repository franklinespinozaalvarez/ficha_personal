import React, {useState} from 'react';
import {Card, CardHeader, CardMedia} from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import {makeStyles} from '@material-ui/core/styles';
import {red} from '@material-ui/core/colors';
import {yellow} from '@material-ui/core/colors';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    }
});

const DialogTitle = withStyles(styles)(props => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles(theme => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: yellow[350],
    },
    espacioBoton: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 260
        }
    },
    fondoTitle: {
        background: '#1176b6',
        padding: '10px 0',
        color: 'white',
        textAlign : 'center'
    },
    fondo: {
        background: '#1176b6',
        color: 'white'
    },
    preview: {
        padding: '0px 0px'
    }
}));

const Preview = () => {
    const classes = useStyles();
    //const [expand, setExpand] = useState(false);

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true); console.log('llega');
    };
    const handleClose = () => {
        setOpen(false);
    };

    const viewDetalle = (props) =>{
        //handleOpen();
        return (
          <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
              <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                  Modal title
              </DialogTitle>
              <DialogContent dividers>
                  <Typography gutterBottom>
                      Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                      in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                  </Typography>
                  <Typography gutterBottom>
                      Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                      lacus vel augue laoreet rutrum faucibus dolor auctor.
                  </Typography>
                  <Typography gutterBottom>
                      Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                      scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
                      auctor fringilla.
                  </Typography>
              </DialogContent>
              <DialogActions>
                  <Button autoFocus onClick={handleClose} color="primary">
                      Save changes
                  </Button>
              </DialogActions>
          </Dialog>
        );
    };

    /*const viewLaboral = (props) =>{
        handleOpen();
        return (
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Modal title
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                        in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    </Typography>
                    <Typography gutterBottom>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                        lacus vel augue laoreet rutrum faucibus dolor auctor.
                    </Typography>
                    <Typography gutterBottom>
                        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                        scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
                        auctor fringilla.
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose} color="primary">
                        Save changes
                    </Button>
                </DialogActions>
            </Dialog>
        );
    };

    const viewDetalle = (props) =>{
        handleOpen();
        return (
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Modal title
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                        in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                    </Typography>
                    <Typography gutterBottom>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
                        lacus vel augue laoreet rutrum faucibus dolor auctor.
                    </Typography>
                    <Typography gutterBottom>
                        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
                        scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
                        auctor fringilla.
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose} color="primary">
                        Save changes
                    </Button>
                </DialogActions>
            </Dialog>
        );
    };*/

    return (
        <div className="row justify-content-between " >
            <Card className="col-sm-6 justify-content-sm-between" onClick={handleOpen}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            I
                        </Avatar>
                    }
                    title="INFORMACIÓN LABORAL"
                    className={classes.fondo}
                />
                <CardMedia
                    className={classes.media}
                    image="assets/images/laboral.jpg"
                    title="Laboral"
                />
            </Card>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} >
                <DialogTitle id="customized-dialog-title" onClose={handleClose} className={classes.fondoTitle}>
                    DETALLE
                </DialogTitle>
                <DialogContent className={classes.espacioBoton} dividers>
                    <TextField id="standard-read-only-input" label="Cargo" defaultValue="Técnico Administración Bases de Datos" InputProps={{ readOnly: true,}}/>
                    <TextField id="standard-read-only-input" label="Fecha Ingreso" defaultValue="02/01/2018" InputProps={{ readOnly: true,}}/>
                    <TextField id="standard-read-only-input" label="Nro NUA" defaultValue="44786050" InputProps={{ readOnly: true,}}/>
                    <TextField id="standard-read-only-input" label="Nro Cuenta" defaultValue="10000025240718" InputProps={{ readOnly: true,}}/>
                    <TextField id="standard-read-only-input" label="Nro Seguro" defaultValue="86-0226-EAF" InputProps={{ readOnly: true,}}/>
                    <TextField id="standard-read-only-input" label="Email Coorporativo" defaultValue="franklin.espinoza@boa.bo" InputProps={{ readOnly: true,}}/>
                    <TextField id="standard-read-only-input" label="Codigo Biométrico" defaultValue="5242" InputProps={{ readOnly: true,}}/>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose} color="primary" variant={"outlined"}>
                       Aceptar
                    </Button>
                </DialogActions>
            </Dialog>
            <Card className="col-sm-6">
                <CardHeader
                    avatar={
                        <Avatar severity="warning" aria-label="recipe" className={classes.avatar}>
                            V
                        </Avatar>
                    }
                    title="HISTORIAL DE VACACIONES"
                    className={classes.fondo}
                />
                <CardMedia
                    className={classes.media}
                    image="assets/images/vacacion.jpg"
                    title="Historial Vacaciones"
                />
            </Card>
            <Card className="col-sm-6">
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            E
                        </Avatar>
                    }
                    title="ENTRENAMIENTOS BOA"
                    className={classes.fondo}
                />
                <CardMedia
                    className={classes.media}
                    image="assets/images/entrenamiento.jpg"
                    title="Entrenamiento"
                />
            </Card>
        </div>


    );
};

export default Preview;
