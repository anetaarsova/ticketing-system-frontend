import React from "react";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory, Link } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import Moment from "react-moment";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginBottom: "20px",
    marginLeft: "20px",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  cardProperties: {
    display: "inline-block",
  },
}));

function Ticket(props) {
  const classes = useStyles();
  const history = useHistory();
  const [expanded, setExpanded] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isOpen = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  console.log("props in details", props);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  let content = null;
  const openCheckout = () => {
    history.push("/checkout");
  };

  if (props.listing.tickets) {
    content = props.listing.tickets.map((ticket, key) => (
      <div key={ticket.id} className={classes.cardProperties}>
        <Card className={classes.root}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                R
              </Avatar>
            }
            // action={
            //   <IconButton
            //     aria-label="settings"
            //     aria-controls="fade-menu"
            //     aria-haspopup="true"
            //     onClick={handleClick}
            //   >
            //     <MoreVertIcon />
            //     <Menu
            //       id="fade-menu"
            //       anchorEl={anchorEl}
            //       keepMounted
            //       open={isOpen}
            //       onClose={handleClose}
            //       TransitionComponent={Fade}
            //     >
            //       <MenuItem onClick={handleClose}>Edit</MenuItem>
            //       <MenuItem onClick={handleClose}>Delete</MenuItem>
            //     </Menu>
            //   </IconButton>
            // }
            title={ticket.caption}
            subheader={
              <Moment parse="YYYY-MM-DD hh:mm" date={ticket.created_at} />
            }
            // subheader={ticket.created_at} //format="YYYY-MM-DD"
          />
          <CardMedia
            className={classes.media}
            image={`http://127.0.0.1:8000/storage/${ticket.image}`}
            title="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {ticket.description}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton
              aria-label="edit ticket"
              onClick={() => {
                props.onEdit("edit", ticket);
              }}
            >
              <EditRoundedIcon />
            </IconButton>
            <IconButton
              aria-label="delete ticket"
              onClick={() => {
                props.onDelete(ticket);
              }}
            >
              <DeleteRoundedIcon />
            </IconButton>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            {/* <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton> */}
            <IconButton aria-label="add to cart" onClick={openCheckout}>
              <ShoppingCartRoundedIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit></Collapse>
        </Card>
      </div>
    ));
  }
  return <div>{content}</div>;
}
export default Ticket;
