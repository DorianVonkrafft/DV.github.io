// Librairies générales
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LibraryMusicTwoToneIcon from '@mui/icons-material/LibraryMusicTwoTone';
// Librairies pour les icônes
import NewspaperTwoToneIcon from '@mui/icons-material/NewspaperTwoTone';
import OndemandVideoTwoToneIcon from '@mui/icons-material/OndemandVideoTwoTone';
import SendIcon from "@mui/icons-material/Send";
import ShareIcon from "@mui/icons-material/Share";
import TodayTwoToneIcon from '@mui/icons-material/TodayTwoTone';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
// Librairies boutons 
import Button from "@mui/material/Button";
// (avec une section)
import ButtonBase from '@mui/material/ButtonBase';
// Librairies cartes
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Collapse from "@mui/material/Collapse"; // Section de texte extensible
// Librairies couleurs et thèmes
import { deepPurple, grey } from '@mui/material/colors';
import Grid from '@mui/material/Grid';
// (avec des icônes)
import IconButton from "@mui/material/IconButton";
import Paper from '@mui/material/Paper';
import Stack from "@mui/material/Stack";
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import * as React from 'react';
// Import const
import { dateList, musiqueList, newsList, videoList } from "./bdd/data.js";













function getCurrentDate(){

  let newDate = new Date()
  let date_raw = newDate.getDate();
  let month_raw = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  var date, month
  

  if (date_raw<10)  {  
    date ="0"+date_raw.toString()
  } else {  
    date =date_raw.toString()
  }

  if (month_raw<10)  { 
    month ="0"+month_raw.toString()
  } else {  
    month =month_raw.toString()
  }

  return (
    <div>{date} / {month} / {year}</div>
  );
}



// div avec des CSS
const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  maxWidth: 1000,
  color: theme.palette.text.primary,
}));

// Titres de chaque section
const messageN = `Dernière news`;
const messageD = `Dernière date`;
const messageV = `Dernière vidéo`;
const messageM = `Dernière musique`;

// Mise en forme de l'objet "icône fonctionnelle"
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest
  })
}));

// Mise en forme de l'objet "images"
const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});




// _________________________________________________________________________________________________________________________________________________________________________________________
// Fonction pour obtenir la dernière news depuis data.js
function News() {
  const newsCardList = newsList.map(a => <DerniereNewsCard news={a} />);
  /*Les maps sont itérables et ordonnées, mais ce ne sont pas des tableaux, elles n'ont donc aucun accès indexé. On itérer donc jusqu'à l'élément final. */
  const getLastItemInMapNews = Array.from(newsCardList.values()).pop();
  return (
    <div>
      {getLastItemInMapNews}
    </div>
  );
}

// Fonction pour obtenir la dernière date depuis data.js
function Day() {
  const dateCardList = dateList.map(a => <DateGrid dates={a} />);
  /*Les maps sont itérables et ordonnées, mais ce ne sont pas des tableaux, elles n'ont donc aucun accès indexé. On itérer donc jusqu'à l'élément final. */
  const getLastItemInMapDate = Array.from(dateCardList.values()).pop();
  return (
    <div>
      {getLastItemInMapDate}
    </div>
  );
}

// Fonction pour obtenir la dernière vidéo depuis data.js
function Video() {
  const videoCardList = videoList.map(a => <VideoGrid videos={a} />);
  /*Les maps sont itérables et ordonnées, mais ce ne sont pas des tableaux, elles n'ont donc aucun accès indexé. On itérer donc jusqu'à l'élément final. */
  const getLastItemInMapVideo = Array.from(videoCardList.values()).pop();
  return (
    <div>
      {getLastItemInMapVideo}
    </div>
  );
}

// Fonction pour obtenir la dernière musique depuis data.js
function Musique() {
  const musiqueCardList = musiqueList.map(a => <MusiqueGrid musiques={a} />);
  /*Les maps sont itérables et ordonnées, mais ce ne sont pas des tableaux, elles n'ont donc aucun accès indexé. On itérer donc jusqu'à l'élément final. */
  const getLastItemInMapMusique = Array.from(musiqueCardList.values()).pop();
  return (
    <div>
      {getLastItemInMapMusique}
    </div>
  );
}
// _________________________________________________________________________________________________________________________________________________________________________________________



// Fonction de la section "Dernière news"
function DerniereNewsCard({news}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card 
      elevation={0}
      sx={{ 
        p: 5,
        margin: 'auto',
        maxWidth: 750,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}>
      
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Stack direction="row" spacing={2}>
              <Img alt="Image de la news" src={news.image} />
            </Stack>
          </ButtonBase>
        </Grid>

        <Grid item xs={12} sm container>
          <CardHeader
            title={news.name}
            subheader={news.date}
          />

          <CardContent>
            <Typography variant="body2" color="text.secondary">
            <Typography paragraph>Appuyez pour en savoir plus :</Typography>
            </Typography>
          </CardContent>
        </Grid>
      </Grid>

      <CardActions disableSpacing>
        {" "}
        {/* Mettre l'icone à droite */}
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
        <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            {news.corpus}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}



// Fonction de la section "Dernière date"
function DateGrid({dates}) {

  return (
    <Paper
      elevation={0}
      sx={{
        p: 5,
        margin: 'auto',
        maxWidth: 750,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
          <Stack direction="row" spacing={2}>
            <Avatar sx={{ width: 110, height: 110, bgcolor: grey[400],}}>{dates.date_concert}</Avatar>
          </Stack>
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <CardHeader
                title={dates.name}
                subheader={dates.date_concert}
              />
              <Typography variant="body2" color="text.secondary">
                Lieu : {dates.lieu}
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer'}} color="common.white" variant="body2">
                <Stack direction="row" spacing={2}>
                <Button 
                    color="secondary" 
                    variant="contained" 
                    endIcon={<SendIcon />} 
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = dates.article;
                    }}>
                    Accédez à l'article online
                  </Button>

                  <Button 
                    color="secondary" 
                    variant="contained" 
                    endIcon={<SendIcon />} 
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = dates.liens_facebook;
                    }}>
                    Accédez au post Facebook
                  </Button>
                </Stack>
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              {/* Possibilité d'ajouter du texte*/} 
            </Typography>
            
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}



// Fonction de la section "Dernière vidéo"
function VideoGrid({videos}) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 5,
        margin: 'auto',
        maxWidth: 750,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
          <Stack direction="row" spacing={2}>
            <Img alt="Image de la vidéo" src={videos.image_de_couverture} />
          </Stack>
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <CardHeader
                title={videos.name}
                subheader={videos.date}
              />
              <Typography variant="body2" color="text.secondary">
                {videos.description}
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer'}} color="common.white" variant="body2">
                <Stack direction="row" spacing={2}>
                  <Button color="secondary" variant="contained" endIcon={<SendIcon />}>
                    Regardez-la maintenant
                  </Button>
                </Stack>
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              {/* Possibilité d'ajouter du texte*/} 
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}



// Fonction de la section "Dernière musique"
function MusiqueGrid({musiques}) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 5,
        margin: 'auto',
        maxWidth: 750,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item> 
          <ButtonBase sx={{ width: 128, height: 128 }}>
          <Stack direction="row" spacing={2}>
            <Img alt="Image de la musique" src={musiques.image_de_couverture} />
          </Stack>
            {/*<CardMedia
              component="iframe"
              image="https://www.youtube.com/embed/2WPYPg-iDrk"
            />*/}
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <CardHeader
                title={musiques.name}
                subheader={musiques.date}
              />
              <Typography variant="body2" color="text.secondary">
                {musiques.description}
              </Typography>
            </Grid>
            <Grid item>
              <Typography sx={{ cursor: 'pointer'}} color="common.white" variant="body2">
                <Stack direction="row" spacing={2}>
                  <Button color="secondary" variant="contained" endIcon={<SendIcon />}>
                    Écoutez-la maintenant
                  </Button>
                </Stack>
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              {/* Possibilité d'ajouter du texte*/} 
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}



// Fonction principale renvoyant le résultat
function Accueil() {
  /*new Date().toLocaleString() + ""*/
  return (
      <div>
        <Typography color="black" variant="body2">
          {getCurrentDate()}
        </Typography>
        
        <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}> {/* La propriété CSS overflow est une propriété raccourcie qui définit comment gérer le dépassement du contenu d'un élément dans son bloc.  */}
          <StyledPaper elevation={10} sx={{ my: 5, mx: 'auto', p: 5, }}>
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item>
                <Avatar component={Paper} elevation={10} sx={{ width: 80, height: 80, bgcolor: deepPurple[500] }} ><NewspaperTwoToneIcon sx={{ width: 45, height: 45 }}></NewspaperTwoToneIcon></Avatar>
              </Grid>
              <Grid item xs>
                <Typography>{messageN}</Typography>
                <News></News>
                <div>
                  <button>TRY</button>
                </div>
              </Grid>
            </Grid>
          </StyledPaper>

          <StyledPaper elevation={10} sx={{ my: 5, mx: 'auto', p: 5, }}>
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item>
                <Avatar component={Paper} elevation={10} sx={{ width: 80, height: 80, bgcolor: deepPurple[500] }} ><TodayTwoToneIcon sx={{ width: 45, height: 45 }} ></TodayTwoToneIcon></Avatar>
              </Grid>
              <Grid item xs>
                <Typography>{messageD}</Typography>
                <Day></Day>
                <div>
                  <button>TRY</button>
                </div>
              </Grid>
            </Grid>
          </StyledPaper>

          <StyledPaper elevation={10} sx={{ my: 5, mx: 'auto', p: 5, }}>
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item>
                <Avatar component={Paper} elevation={10} sx={{ width: 80, height: 80, bgcolor: deepPurple[500] }} ><OndemandVideoTwoToneIcon sx={{ width: 45, height: 45 }} ></OndemandVideoTwoToneIcon></Avatar>
              </Grid>
              <Grid item xs>
                <Typography>{messageV}</Typography>
                <Video></Video>
              </Grid>
            </Grid>
          </StyledPaper>

          <StyledPaper elevation={10} sx={{ my: 5, mx: 'auto', p: 5, }}>
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item>
                <Avatar component={Paper} elevation={10} sx={{ width: 80, height: 80, bgcolor: deepPurple[500] }} ><LibraryMusicTwoToneIcon sx={{ width: 45, height: 45 }} ></LibraryMusicTwoToneIcon></Avatar>
              </Grid>
              <Grid item xs>
              <Typography>{messageM}</Typography>
              <Musique></Musique>
              </Grid>
            </Grid>
          </StyledPaper>
        </Box>        
      </div>
  );
}



export default Accueil;