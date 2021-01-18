import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";


// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax2 from "components/Parallax/Parallax2.js";

import image1 from "assets/img/decolonial-fotos/foto-pedro2.jpg";

import image2 from "assets/img/decolonial-fotos/foto-decolonial1.jpg";
import profile from "assets/img/decolonial-fotos/foto-pedro1.png";

import studio1 from "assets/img/examples/studio-1.jpg";
import studio2 from "assets/img/examples/studio-2.jpg";
import studio3 from "assets/img/examples/studio-3.jpg";
import studio4 from "assets/img/examples/studio-4.jpg";
import studio5 from "assets/img/examples/studio-5.jpg";
import work1 from "assets/img/examples/olu-eletu.jpg";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";
import work3 from "assets/img/examples/cynthia-del-rio.jpg";
import work4 from "assets/img/examples/mariya-georgieva.jpg";
import work5 from "assets/img/examples/clem-onojegaw.jpg";

import styles from "assets/jss/material-kit-react/views/profilePage5.js";
import styles2 from "assets/jss/material-kit-react/components/parallaxStyle2.js";

const useStyles = makeStyles(styles);
const useStyles2 = makeStyles(styles2);

export default function ProfilePage4(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgGallery);

  const classes2 = useStyles2();
  return (
    <div style={{ 
      position: "absolute",
      backgroundImage: `url(${image1})`,
      height: "2200px",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: "100%",
      margin: 0,
      padding: 0}}>
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
        <div>  {/* <div style = {{border: "black", borderWidth: "3px", borderStyle: "outset",backgroundColor: "white", width: "75%", marginLeft: "12.5%", marginTop: "15%"}}> */}
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
   
          <div className={classes.container} style = {{paddingBottom: "80px"}}>
            <GridContainer justify="left" >
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Pedro Emanuel Franco Fraticelli</h3>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-twitter"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-instagram"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-facebook"} />
                    </Button>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
              {"Pedro Emanuel Franco Fraticelli (1988-)"}<br></br><br></br>
              {"Es un guitarrista eléctrico, cantautor, productor de conciertos y compositor puertorriqueño. El trabajo de Pedro se ha realizado en Carnegie Mellon School of Drama; Nuyorican Poets Cafe; Casa Cultural Ruth Hernández; Universidad de Puerto Rico; Ateneo Puertorriqueño; The Gallery Inn; Paseo de los Artistas VIP; y el Conservatorio de Música de Puerto Rico, entre otros. También músico, Pedro es fundador del podcast Colectivo Simbiosis, Conversaciones Simbióticas y la Serie de Conciertos de Jóvenes Artistas."}<br></br><br></br>
              {"Pedro tiene una licenciatura en Composición Musical del Conservatorio de Música de Puerto Rico. Su trabajo composicional es experimental y sensible a la conciencia del escucha; vacila constantemente entre la experimentación musical y el formato de concierto. Algunos de sus temas de investigación son: el “poli-arte”, incorporando elementos teatrales, culturales y urbanos (como el reggaetón y el trap); además del “folclor boricua”, como la utilización del jíbaro y el cuatro puertorriqueño (instrumento nacional), apagones y la utilización de generadores de electricidad, entre otras particularidades humorísticas -y otras no tanto- del curso de la vida -y lo que pudiera considerarse “la odisea de sobrevivir”- en la isla de Puerto Rico."}<br></br><br></br> 
              {"Otro de los temas importantes que utiliza para sus propuestas musicales es la priorización del mensaje, enfatizando en lo literal y directo, más que en la estética y abstracción musical. Esto se ve en obras de índole de crítica social, y de protesta, tocando temas como: la religión, la violencia de género, la austeridad, sátiras al (ex)gobernador corrupto (destituido recientemente de la gobernación) y en la animación de voces violentas asesinadas por alguna injusticia social; entre otras... de nuevo, particularidades puertorriqueñas."}           
              </p>
            </div>
            
          </div>
          
        </div>
      </div>
      <div>
      <GridContainer justify="center">
              <GridItem  className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="black"
                  tabs={[
                    {
                      tabButton: "Música",
                      // tabIcon: Camera,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem >
                          <ReactPlayer   
                      style={{
                        display: "inline-block",
                        position: "relative",
                       
                        border: 0,
                        marginTop: "0%",
                        marginLeft:  "0%"}} 
                        width="80%"
                  height="20%"
                  url="https://soundcloud.com/pedrofraticellimusic/cadaveres-violentos-en-vivo-recital-de-graduacion"
                  ></ReactPlayer>      

                   <ReactPlayer   
                      style={{
                      display: "inline-block",
                      position: "relative",     
                      border: 0,
                      marginTop: "0%",
                      marginLeft:  "0%"}} 
                      width="80%"
                      height="20%"
                      url="https://soundcloud.com/pedrofraticellimusic/propaganda-y-violencia-en-vivo-recital-flores-marchitas-flores-nuevas"
                      ></ReactPlayer>   

                      <ReactPlayer   
                      style={{
                      display: "inline-block",
                      position: "relative",     
                      border: 0,
                      marginTop: "0%",
                      marginLeft:  "0%"}} 
                      width="80%"
                      height="20%"
                      url="https://soundcloud.com/pedrofraticellimusic/lo-bonito-y-lo-violento"
                      ></ReactPlayer>       
          
    <iframe style={{
    display: "inline-block",
    position: "relative",
    width: "380px", 
    height: "260px",  
    border: 0,
    marginTop: "0%",
    marginLeft:  "0%"}} width="200px" height="150px" 
    src="https://www.youtube.com/embed/gzowS2qa6vE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    <iframe style={{
     display: "inline-block",
     position: "relative",
     width: "380px", 
     height: "260px", 
     border: 0,
     marginTop: "0%",
     marginLeft:  "0%"}} width="200px" height="150px" 
     src="https://www.youtube.com/embed/gzowS2qa6vE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    
      </GridItem>      
      </GridContainer>
        )
      }
                   // {
                    //   tabButton: "Partituras",
                    //   // tabIcon: Palette,
                    //   tabContent: (
                    //     <GridContainer justify="center">
                    //       <GridItem xs={12} sm={12} md={4}>
                    //         <img
                    //           alt="..."
                    //           src={work1}
                    //           className={navImageClasses}
                    //         />
                    //         <img
                    //           alt="..."
                    //           src={work2}
                    //           className={navImageClasses}
                    //         />
                    //         <img
                    //           alt="..."
                    //           src={work3}
                    //           className={navImageClasses}
                    //         />
                    //       </GridItem>
                    //       <GridItem xs={12} sm={12} md={4}>
                    //         <img
                    //           alt="..."
                    //           src={work4}
                    //           className={navImageClasses}
                    //         />
                    //         <img
                    //           alt="..."
                    //           src={work5}
                    //           className={navImageClasses}
                    //         />
                    //       </GridItem>
                    //     </GridContainer>
                    //   )
                    // },
                    // {
                    //   tabButton: "Textos",
                    //   tabContent: (
                    //     <GridContainer justify="center">
                    //       <GridItem xs={12} sm={12} md={4}>
                    //         <img
                    //           alt="..."
                    //           src={work4}
                    //           className={navImageClasses}
                    //         />
                    //         <img
                    //           alt="..."
                    //           src={studio3}
                    //           className={navImageClasses}
                    //         />
                    //       </GridItem>
                    //       <GridItem xs={12} sm={12} md={4}>
                    //         <img
                    //           alt="..."
                    //           src={work2}
                    //           className={navImageClasses}
                    //         />
                    //         <img
                    //           alt="..."
                    //           src={work1}
                    //           className={navImageClasses}
                    //         />
                    //         <img
                    //           alt="..."
                    //           src={studio1}
                    //           className={navImageClasses}
                    //         />
                    //       </GridItem>
                    //     </GridContainer>
                    //   )
                    // }
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
          </div>
    </div>
  );
}
