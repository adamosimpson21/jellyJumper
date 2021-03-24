import React, {useState, useEffect} from 'react';
import classNames from 'classnames';
import jelly from '../images/jello.png';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import * as emailjs from 'emailjs-com';
import './Landing.scss';

type Props = {

}

export default function Landing(props : Props){
    const [ hasSubmit, setHasSubmit] = useState(false);
    const [ username, setUserName] = useState('');
    const [ usersEmail, setUsersEmail] = useState('');
    const [ submitting, setSubmitting ] = useState(false);
    const [contactPermission, setContactPermission] = useState( false);
    const [ message, setMessage ] = useState('');
    const downloadLink = "https://drive.google.com/file/d/10zBriQlsixEsJfRNy5ohPAOY44HxD9rH/view?usp=sharing";

    // const emailForm = "";
    const Copyright = () => (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright ©BandsWithLegends '}
            {' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    )

    const useStyles = makeStyles((theme) => ({
        paper: {
            marginTop: theme.spacing(8),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        avatar: {
            margin: theme.spacing(1),
            backgroundColor: theme.palette.secondary.main,
        },
        form: {
            width: '100%', // Fix IE 11 issue.
            marginTop: theme.spacing(3),
        },
        submit: {
            margin: theme.spacing(3, 0, 2),
        },
    }));

    const classes = useStyles();

    const handleSubmit = (event:any) => {
        event.preventDefault();
        setSubmitting(true);

        if (username.length > 0 && message.length > 0){
            let templateParams = {
                from_name: username,
                message: message,
                from_email: usersEmail,
                contact_permission: contactPermission
            }

            emailjs.send(
                'service_dmg81eh',
                'template_wi0ny5g',
                templateParams,
                'user_PcwjuUyrXKIG6kSLD0cur'
            )

            resetForm();
            setHasSubmit(true);
        }
        setTimeout(() => setSubmitting(false), 1200);
    }

    const resetForm = () => {
        setMessage('');
        setUsersEmail('');
        setUserName('');
        setContactPermission(false);
    }

    const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
        const { value, name, checked } = event.currentTarget
        if(name === "firstName"){
            setUserName(value);
        } else if(name==="email"){
            setUsersEmail(value);
        } else if(name==="contactPermission"){
            setContactPermission(checked);
        } else if(name==="message"){
            setMessage(value);
        }
    }


    return (
        <div className="Landing">
            <Container maxWidth="md">
                <CssBaseline />
                <div className="landing-title">
                    <div className="landing-title-text">
                        Jelly
                    </div>
                    <img src={jelly} className="App-logo" alt="logo" />
                    <div className="landing-title-text">
                        Jumper
                    </div>
                </div>

                <br />
                <div className="landing-body">
                    Jelly Jumper, an exciting new action platformer from BandsWithLegends, is currently in the early stages of development.
                </div>
                <br/>
                <div className="landing-body">
                    Jump, dash, slide, collect, goop, flap, and, most importantly, RUUUNNNNN around epic levels full of obstacles, traps, platforms, and grass!
                </div>
                <div className="landing-body">
                    Download from the link below and start hoppin' around in the dirt today.
                </div>
                <br/>
                <Link href={downloadLink} target="_blank" referrerPolicy="no-referrer">
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Latest version of Jelly Jumper
                    </Button>
                </Link>
            </Container>
            {hasSubmit ?
                <Container component="main" maxWidth="sm">
                    <div className={classes.paper}>
                        Thanks for submitting! All feedback goes into making a better game 😀
                    </div>
                </Container>
                :
            <Container component="main" maxWidth="sm">
              <CssBaseline/>
              <div className={classNames("email-form", classes.paper)}>
                <Typography component="h1" variant="h5">
                  Let me know what you think of Jelly Jumper so far!<br/>Are you having fun? <br/>Any glitches,
                  exploits, or bugs? <br/>What levels were your favorite? <br/>Did you find any secrets?
                </Typography>
                <form
                  className={classes.form}
                  noValidate
                  onSubmit={handleSubmit}
                  name="EmailForm"
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        autoComplete="fname"
                        name="firstName"
                        variant="outlined"
                        required
                        fullWidth
                        id="firstName"
                        label="Your Name"
                        value={username}
                        onChange={handleChange}
                        autoFocus
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        value={usersEmail}
                        onChange={handleChange}
                        autoComplete="email"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField id="message"
                                 name="message"
                                 rows={6}
                                 variant="outlined"
                                 value={message}
                                 onChange={handleChange}
                                 label="Your Message*"
                                 fullWidth>
                      </TextField>
                    </Grid>
                    <Grid item xs={12}>
                      <FormControlLabel
                        control={<Checkbox value={contactPermission} name="contactPermission" onChange={handleChange}
                                           color="primary"/>}
                        label="I am open to being contacted"
                      />
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    disabled={hasSubmit || submitting || !(username.length > 0 && message.length > 0)}
                  >
                    Send Message
                  </Button>
                </form>
              </div>
              <Box mt={5}>
                <Copyright/>
              </Box>
            </Container>
            }
        </div>
    );
}
