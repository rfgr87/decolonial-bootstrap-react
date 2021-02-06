import React from 'react';
import {Link} from 'react-router-dom';
import classNames from "classnames";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Header from "components/Header/Header.js";
import image1 from 'assets/img/decolonial-fotos/foto-releases.jpg';
import image4 from 'assets/img/decolonial-fotos/foto-aurora.jpg';
import image5 from 'assets/img/decolonial-fotos/foto-aurora.jpg';
import image6 from 'assets/img/decolonial-fotos/foto-bio.jpg';
import ReactPlayer from "react-player";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import styles1 from "assets/jss/material-kit-react/views/profilePage1.js";
import { makeStyles } from "@material-ui/core/styles";



const useStyles1 = makeStyles(styles1);

function Releases(props) {
    const classes = useStyles1();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgFluid
  );

  const { post } = props;

    return (
      <div style={{ 
      backgroundImage: `url(${image1})`,
      height: "3500px",
      position: "absolute",
      backgroundPosition: '0px 0px',
      backgroundSize: "100% 100%",  
      backgroundRepeat: "no-repeat",
      width: "100%",
      paddingBottom: "80%",  
      marginBottom: "100px",  
      marginTop: "-1%",
      paddingTop: 0,
      }}>
          <Header
        brand="Decolonial Records"
        rightLinks={<HeaderLinks />}
        fixed
        color="black"
        changeColorOnScroll={{
          height: 400,
          color: "black"
        }}
        {...rest}
      />

    <div>
    <h5 style={{
      color:"black", 
      fontFamily: "Menlo",
      fontSize: "50px",
      fontWeight: "normal",
      fontStyle: "normal",
      position: "relative",
      backgroundImage: `url(${image1})`, //"#000000",
      opacity: "1.0",   
      marginLeft: "5%",
      marginTop: "100px",
      width: "69%",
      padding: "10px",
       }}> 
       [Releases]<br></br></h5>
       </div>
       <GridItem  className={classes.navWrapper}>

       <GridContainer justify="center">
                          <GridItem >
                          <iframe style = {{
                            display: "inline-block",
                            position: "relative",
                            border: 0, 
                            width: "300px", 
                            height: "420px", 
                            marginTop: "0%",
                            marginLeft:  "0%"}} 
                            src="https://bandcamp.com/EmbeddedPlayer/album=3766938795/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://decolonialrecords.bandcamp.com/album/atractores">Atractores by Diego Villaseñor de Cortina</a></iframe>   
                          
                          <iframe style={{
                            display: "inline-block",
                            position: "relative",
                            border: 0, 
                            width: "300px", 
                            height: "420px", 
                            marginTop: "0%",
                            marginLeft:  "0%"}} 
                            src="https://bandcamp.com/EmbeddedPlayer/album=2510828521/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://decolonialrecords.bandcamp.com/album/paisajes-aumentados">Paisajes Aumentados by Felipe Corredor-Téllez</a></iframe>  
                         
                          <iframe style={{
                            display: "inline-block",
                            position: "relative",
                            border: 0, 
                            width: "300px", 
                            height: "420px", 
                            marginTop: "0%",
                            marginLeft:  "0%"}} 
                            src="https://bandcamp.com/EmbeddedPlayer/album=3937924049/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://decolonialrecords.bandcamp.com/album/runa-taki">Runa Taki by Daniel Flores Días</a></iframe>      
                            
                            <iframe style={{
                            display: "inline-block",
                            position: "relative",
                            border: 0, 
                            width: "300px", 
                            height: "420px", 
                            marginTop: "0%",
                            marginLeft:  "0%"}} 
                            src="https://bandcamp.com/EmbeddedPlayer/album=3799638859/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://decolonialrecords.bandcamp.com/album/ya-llegu-a-yerbateros">Ya Llegué A Yerbateros by Hurdes</a></iframe>      
                            
                            <iframe  style={{
      display: "inline-block",

      position: "relative",
      border: 0, 
      width: "300px", 
      height: "420px", 
      marginTop: "0%",
      marginLeft:  "0%"}} 
      src="https://bandcamp.com/EmbeddedPlayer/album=3918431720/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://decolonialrecords.bandcamp.com/album/7-ensayos-sobre-la-cosmovisi-n-andina">7 Ensayos Sobre La Cosmovisión Andina by Renzo Filinich</a></iframe>

   
    <iframe  style={{
      display: "inline-block",

      position: "relative",
      border: 0, 
      width: "300px", 
      height: "420px", 
      marginTop: "0%",
      marginLeft:  "0%"}} 
      src="https://bandcamp.com/EmbeddedPlayer/album=2610809688/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://decolonialrecords.bandcamp.com/album/axiomas-ind-genas">Axiomas Indígenas by Roy F Guzmán</a></iframe>   
   
   <iframe style={{
    display: "inline-block",
    position: "relative",
    border: 0, 
    width: "300px", 
    height: "420px", 
    marginTop: "0%",
    marginLeft:  "0%"}} 
    src="https://bandcamp.com/EmbeddedPlayer/album=3007672718/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://decolonialrecords.bandcamp.com/album/06-01-21-improvisaci-n-con-cuatro-puertorrique-o">[06-01-21] Improvisación con Cuatro Puertorriqueño by Roy F Guzmán</a></iframe>
   
   <iframe style={{
    display: "inline-block",
    position: "relative",
    border: 0, 
    width: "300px", 
    height: "420px", 
    marginTop: "0%",
    marginLeft:  "0%"}} 
    src="https://bandcamp.com/EmbeddedPlayer/album=834541099/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://decolonialrecords.bandcamp.com/album/propaganda-y-violencia">Propaganda y Violencia by Pedro Franco Fraticelli</a></iframe>   


<iframe style={{
    display: "inline-block",
    position: "relative",
    border: 0, 
    width: "300px", 
    height: "420px", 
    marginTop: "0%",
    marginLeft:  "0%"}} 
    src="https://bandcamp.com/EmbeddedPlayer/album=1008597476/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://decolonialrecords.bandcamp.com/album/boca-del-monte">Boca del Monte by Byron Muñoz</a></iframe>


<iframe style={{
    display: "inline-block",
    position: "relative",
    border: 0, 
    width: "300px", 
    height: "420px", 
    marginTop: "0%",
    marginLeft:  "0%"}} 
    src="https://bandcamp.com/EmbeddedPlayer/album=231442692/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://decolonialrecords.bandcamp.com/album/realidades-improbables">Realidades Improbables by Matías Fernández Rosales</a></iframe>

    </GridItem>      
    </GridContainer>
    </GridItem>

   </div>
  
    )
  }

  export default Releases
