import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() => (
    createStyles({
        "button": {
            borderColor: '#FFB549',
            color: '#FFB549',
            fontWeight: 600,
            marginBottom: '8px',
            "&:hover": {
                backgroundcolor: '#FFB549',
                color: '#fff'
            }
        }
    })
 ));
  

const Answer = (props) => {
    const classes = useStyles();
    
    return(
        <Button
            classes={classes.button} 
            variant="outlined" onClick={() => props.select(props.content, props.nextId)}>
            {props.content}
        </Button>
    )
}

export default Answer;