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

import image1 from "assets/img/decolonial-fotos/leonelsegovia2.jpg";

import image2 from "assets/img/decolonial-fotos/foto-decolonial1.jpg";
import profile from "assets/img/decolonial-fotos/leonelsegovia.png";

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

import styles from "assets/jss/material-kit-react/views/profilePage7.js";
import styles2 from "assets/jss/material-kit-react/components/parallaxStyle2.js";

const useStyles = makeStyles(styles);
const useStyles2 = makeStyles(styles2);

export default function ProfilePage8(props) {
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
      height: "3200px",
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
                    <h3 className={classes.title}>Leonel Segovia</h3>
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
              {"Leonel Segovia (Buenos Aires, 1989). Licenciatura en Artes Musicales en la Universidad Nacional de las Artes (Argentina) con los maestros Fernando Maglia y Santiago Santero. Su interés radica en explorar la resultante de la mixtura de las músicas de tradición europea y del arte sudamericano. Además le preocupa el distanciamiento que hay entre la academia y el pueblo. Su idea es que su arte no sea consumida únicamente por el público adepto a la música culta, sino que piensa formas en la que ésta se pueda acercar a oídos nuevos."}<br></br><br></br>
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
                            src="https://bandcamp.com/EmbeddedPlayer/track=3199779872/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://hurdes.bandcamp.com/track/ya-llegu-a-yerbateros">Ya llegué a Yerbateros by Hurdes</a></iframe>

                          <iframe style={{
                            display: "inline-block",
                            position: "relative",
                            border: 0, 
                            width: "300px", 
                            height: "420px", 
                            marginTop: "0%",
                            marginLeft:  "0%"}} 
                            src="https://bandcamp.com/EmbeddedPlayer/album=698691658/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://hurdes.bandcamp.com/album/hendiduras">Hendiduras by Hurdes</a></iframe>
   
      </GridItem>      
      </GridContainer>
        )
      }
        
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
          </div>
    </div>
  );
}
