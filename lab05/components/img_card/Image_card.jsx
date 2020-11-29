import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      margin:"100px"
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        title={props.name}
        subheader={props.data.date_time}
      />
          <div><img src={"/images/" + props.data.file_name} alt="" style={{ width: "100%" }} /></div>
          {
              props.data.comments?(<CardActions disableSpacing>
        <Typography>See Comments</Typography>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>):""
          }
      
      <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                  {props.data.comments?(
                      props.data.comments.map((el, ind) => {
                          return (
                              <div className="Comment" key={ind}>
                                  <div><Link to={`/users/${el.user._id}`}>{`${el.user.first_name} ${el.user.last_name}`}</Link><span>{el.date_time }</span></div>
                                  <Typography paragraph>
                                      {el.comment}
                                  </Typography>
                              </div>
                          )
                      })):""
                  }
        </CardContent>
      </Collapse>
    </Card>
  );
}