import React, {useState, useEffect} from 'react';
import classNames from 'classnames';
import jelly from '../images/jello.png';
import Button from '@material-ui/core/Button';
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import * as emailjs from 'emailjs-com';
import twitterLogo from '../images/twitterLogo.png';
import birdieImage from '../images/birbie.png';
import bouldieImage from '../images/bouldie.png';
import levelOneImage from '../images/Level1Demo.png';
import levelTwoImage from '../images/Level2Demo.png';
import levelThreeImage from '../images/Level3Demo.png';
import levelFourImage from '../images/Level4Demo.png';
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
        media: {
            height: '28vw',
        },
        card: {
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
        },
        cardMedia: {
            paddingTop: '56.25%', // 16:9
            backgroundSize: 'contain',
        },
        cardContent: {
            flexGrow: 1,
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

    const handleChange = (event: any) => {
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
            {/* nav bar */}
            <nav className="navbar navbar-expand-lg " id="Home">
                <a className="navbar-brand" href="#Home">Jelly Jumper</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#Home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Carousel">Carousel</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Download">Download</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Contact">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Download">Available on Windows for FREE!</a>
                        </li>
                    </ul>
                    <a className="navbar-brand" href="https://twitter.com/BandsWithLegend" target="_blank" referrerPolicy="no-referrer">
                      <img src={twitterLogo} alt="BandsWithLegends' Twitter"  style={{ height: '3vw'}} />
                    </a>
                </div>
            </nav>

            {/* carousel */}
            <div className="bd-example" id="About">
                <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={levelOneImage} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h2>Jelly Jumper, an exciting new action platformer from BandsWithLegends, is currently in the early stages of development.</h2>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={levelTwoImage} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h2> Jump, dash, slide, collect, goop, flap, and, most importantly, RUUUNNNNN around epic levels full of obstacles, traps, platforms, and grass!</h2>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={levelThreeImage} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h2>Includes many secrets and secret levels</h2>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={levelFourImage} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h2>Download from the link below and start hoppin' around in the dirt today.</h2>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button"
                       data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleCaptions" role="button"
                       data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
            <Container maxWidth="xl" >
                <Typography component="h1" variant="h1">
                    Introducing
                </Typography>
                <Grid container spacing={4}>
                    <Grid item key="birbie" xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.cardMedia}
                                image={birdieImage}
                                title="Birbie"
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Birbie
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item key="bouldie" xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.cardMedia}
                                image={bouldieImage}
                                title="Bouldie"
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Bouldie
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item key="Jello" xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                    <CardMedia
                        className={classes.cardMedia}
                        image={jelly}
                        title="Jelly"
                    />
                    <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                            Jelly
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
                </Grid>
                <Link href={downloadLink} target="_blank" referrerPolicy="no-referrer" id="Download">
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        id="downloadButtonLatest"
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
            <Container component="main" maxWidth="sm" id="Contact">
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
