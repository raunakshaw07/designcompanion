import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { Link } from "react-router-dom";

const drawerWidth = 140;

const useStyles = makeStyles((theme) => ({
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    background: "rgba(0,0,0,0.7)",
    color: "#ffffff",
    overflow: "hidden",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className="navbar" style={{ overflow: "hidden" }}>
      <div style={{ marginRight: "2rem" }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          className={clsx(open && classes.hide)}
        >
          {/* <MenuIcon fontSize="large" color="inherit" /> */}
          <i className="fas fa-bars" style={{ color: "#ffffff" }}></i>
        </IconButton>
      </div>
      <Drawer
        // variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div>
          <IconButton onClick={handleDrawerClose} color="inherit">
            <ChevronRightIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <ul>
            <Link to="/" style={{ textDecoration: "none" }}>
              <li style={style.li}>Home</li>
            </Link>
            <Link to="/about" style={{ textDecoration: "none" }}>
              <li style={style.li}>About</li>
            </Link>
            <Link to="/services" style={{ textDecoration: "none" }}>
              <li style={style.li}>Services</li>
            </Link>
            <Link to="/works" style={{ textDecoration: "none" }}>
              <li style={style.li}>Works</li>
            </Link>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <li style={style.li}>Contact</li>
            </Link>
          </ul>
        </List>
      </Drawer>
    </div>
  );
};

const style = {
  li: {
    listStyle: "none",
    color: "#ffffff",
    margin: "5rem 2rem 5rem 0rem",
    fontSize: "1.4rem",
    transform: "rotate(90deg)",
  },
};

export default Navbar;
