import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

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

import image1 from "assets/img/decolonial-fotos/foto-piezaroy1.jpg";

import image2 from "assets/img/decolonial-fotos/foto-decolonial1.jpg";
import profile from "assets/img/decolonial-fotos/foto-bio.jpg";
import image3 from "assets/img/decolonial-fotos/foto-piezaroy1.jpg";

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

import styles1 from "assets/jss/material-kit-react/views/profilePage1.js";
// import styles2 from "assets/jss/material-kit-react/views/profilePage1.js";
import styles2 from "assets/jss/material-kit-react/components/parallaxStyle1.js";

const useStyles1 = makeStyles(styles1);
const useStyles2 = makeStyles(styles2);

export default function ProfilePage1(props) {
  const classes = useStyles1();
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
      backgroundImage: `url(${image3})`,
      height: "4200px",
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
            <GridContainer justify="left" >
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Roy F Guzmán</h3>
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
              {"Roy F Guzmán - Compositor de música electrónica algorítmica e instrumental, improvisador y poeta nacido en San Juan, Puerto Rico el 28 de junio de 1987."} <br></br><br></br>
              {"Sus temas de investigaciones previas y actuales son la teoría del caos para material estructural musical, el tema de “abstracciones” trabajado mediante partituras sonoras con instrumentos utilizándolas como una metáfora de la percepción de toda la realidad, “Música a Lo Pobre” que incluye el tema de la resiliencia, la estética que produce las limitaciones auténticas de los sistemas como universal abstracta del folklor, la no dualidad, el concepto de axiomas de objetos conceptuales y físicos, geometrías abstractas en formas musicales, el estudio y formalización de la lectura de partituras no tradicionales, la expansión de la parametrización y constructos musicales, la investigación del concepto de Formas Sonoras Plásticas donde crea técnicas para producir la ilusión de un sólido en un medio temporal con el programa El Cubo De Chuito para manipulación de audio en 3 dimensiones y la creación de música conceptual basada en teorías sobre la espiritualidad abstracta indígena Taina."}<br></br><br></br>
              {"Recientemente explora la Meta Composición donde se propone que la abstracción perceptual llamada realidad se ve afectada por las estructuras objetuales, constructos nuevos, formas, símbolos y textos composicionales."}<br></br><br></br>
              {"Creó la Poesía Concreta Multi Semiótica donde se explora el multi semiotismo sincrónico y asincrónico y la Meta Poesía Integral donde se explora el color semiótico como una integral de un multisemiotismo de una gestalt universal popular. También investiga y crea deducciones y creaciones sobre la metafísica de la espiritualidad ancestral latinoamericana y su potencial desarrollo axiomático y abstracto para la creación de nuevos constructos y filosofías que tienen el potencial de alterar la realidad perceptual."}
              {" "}
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
                          <iframe style = {{
                            display: "inline-block",
                            position: "relative",
                            border: 0, 
                            width: "300px", 
                            height: "420px", 
                            marginTop: "0%",
                            marginLeft:  "0%"}} 
                            src="https://bandcamp.com/EmbeddedPlayer/album=97623958/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/sin-t-tulo-28-12-20">sin-título[28-12-20] by Roy F Guzmán</a></iframe>
                          
                          <iframe style={{
                            display: "inline-block",
                            position: "relative",
                            border: 0, 
                            width: "300px", 
                            height: "420px", 
                            marginTop: "0%",
                            marginLeft:  "0%"}} 
                            src="https://bandcamp.com/EmbeddedPlayer/album=1694358983/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/m">[M] by Roy F Guzman</a></iframe>   
                         
                          <iframe style={{
                            display: "inline-block",
                            position: "relative",
                            border: 0, 
                            width: "300px", 
                            height: "420px", 
                            marginTop: "0%",
                            marginLeft:  "0%"}} 
                            src="https://bandcamp.com/EmbeddedPlayer/album=4107089838/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/sin-t-tulo-10-4-20-3">sin-título[10-4-20][3] by Roy F Guzmán</a></iframe> 
                          <iframe style={{
                            display: "inline-block",
                            position: "relative",
                            border: 0, 
                            width: "300px", 
                            height: "420px", 
                            marginTop: "0%",
                            marginLeft:  "0%"}} 
                            src="https://bandcamp.com/EmbeddedPlayer/album=3480594853/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/abstracciones-de-puerto-rico-para-cuarteto-de-cuerdas">Abstracciones de Puerto Rico para Cuarteto de Cuerdas by Roy F Guzmán</a></iframe>         
                          <iframe  style={{
      display: "inline-block",

      position: "relative",
      border: 0, 
      width: "300px", 
      height: "420px", 
      marginTop: "0%",
      marginLeft:  "0%"}} 
      src="https://bandcamp.com/EmbeddedPlayer/album=1768060898/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/x-05-x-08-x-2005-265">x = 0.5+x*(-0.8)*(x/[2.005..2.65]) by Roy F Guzmán</a></iframe>      

   
    <iframe  style={{
      display: "inline-block",

      position: "relative",
      border: 0, 
      width: "300px", 
      height: "420px", 
      marginTop: "0%",
      marginLeft:  "0%"}} 
      src="https://bandcamp.com/EmbeddedPlayer/album=4291500311/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/axiom-tica-j-bara-para-cuarteto-de-cuerdas">Axiomática Jíbara para Cuarteto de Cuerdas by Roy F Guzmán</a></iframe>    
   
   <iframe style={{
      display: "inline-block",

     position: "relative",
     border: 0, 
     width: "300px", 
      height: "420px", 
     marginTop: "0%",
     marginLeft:  "0%"}} 
     src="https://bandcamp.com/EmbeddedPlayer/album=1983507765/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/congas">congas by Roy F Guzmán</a></iframe>      
    
    <iframe style={{
      display: "inline-block",

     position: "relative",
     border: 0, 
     width: "300px", 
      height: "420px", 
     marginTop: "0%",
     marginLeft:  "0%"}} 
      src="https://bandcamp.com/EmbeddedPlayer/album=2664903003/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/tito-2">Tito by Roy F Guzman</a></iframe>
   
    <iframe style={{
      display: "inline-block",

     position: "relative",
      border: 0, 
      width: "300px", 
      height: "420px",  
      marginTop: "0%",
      marginLeft:  "0%"}} 
      src="https://bandcamp.com/EmbeddedPlayer/album=836594118/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/sin-t-tulo-25-12-20-1">sin-título[25-12-20][1] by Roy F Guzmán</a></iframe> 
                  
      <iframe style={{
      display: "inline-block",
      position: "relative",
      border: 0, 
      width: "300px", 
      height: "420px",  
      marginTop: "0%",
      marginLeft:  "0%"}} 
      src="https://bandcamp.com/EmbeddedPlayer/album=988926118/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/escardillos-para-trompeta">Escardillos Para Trompeta by Roy F Guzmán</a></iframe>               

      <iframe style={{
      display: "inline-block",
      position: "relative",
      border: 0, 
      width: "300px", 
      height: "420px",  
      marginTop: "0%",
      marginLeft:  "0%"}} 
      src="https://bandcamp.com/EmbeddedPlayer/album=802527053/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/01-06-21-improvisaciones-con-acorde-n">[01-06-21] Improvisaciones con Acordeón by Roy F Guzmán</a></iframe>                    
      <iframe style={{
      display: "inline-block",
      position: "relative",
      border: 0, 
      width: "300px", 
      height: "420px",  
      marginTop: "0%",
      marginLeft:  "0%"}}  
      src="https://bandcamp.com/EmbeddedPlayer/album=2829187536/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://royguzman.bandcamp.com/album/folclor-abstracto-i">Folclor Abstracto I by Roy F Guzmán</a></iframe>                      
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
  );
}
