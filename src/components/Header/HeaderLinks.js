/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";


const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
      <Link to="/" className={classes.navLink}>
              Home
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
      <Link to="/manifesto" className={classes.navLink}>
              Manifesto
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Compositores"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          // buttonIcon={Apps}
          dropdownList={[
          <Link to={"/royfguzman"} className={classes.dropdownLink}>
              Roy F Guzmán
          </Link>,
           
          <Link to={"/renzofilinich"} className={classes.dropdownLink}>
            Renzo Filinich
          </Link>,
          <Link to={"/diegovillasenordecortina"} className={classes.dropdownLink}>
            Diego Villaseñor de Cortina
          </Link>,
          <Link to="/felipecorredortrellez" className={classes.dropdownLink}>
            Felipe Corredor Tréllez
          </Link>,
          <Link to="/danielfloresdias" className={classes.dropdownLink}>
            Daniel Flores Dias
          </Link>,
          <Link to="/pedrofrancofraticelli" className={classes.dropdownLink}>
            Pedro Emanuel Franco Fraticelli
          </Link>,
          <Link to="/byronmunoz" className={classes.dropdownLink}>
          Byron Muñoz
        </Link>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
      <Link to="/releases" className={classes.navLink}>
              Releases
        </Link>
      </ListItem>
      
      <ListItem className={classes.listItem}>
        {/*<Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>*/}
        <Tooltip
          id="instagram-twitter"
          title="Follow us on twitter"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://twitter.com/CreativeTim?ref=creativetim"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-twitter"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/CreativeTim?ref=creativetim"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
