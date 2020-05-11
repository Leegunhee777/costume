import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './Purchase.css';



const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));



export default function SimpleSelect() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const [number, setNumber] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleChange2 = (event) => {
    setNumber(event.target.value);
  };

      return(  
        
           <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-deliver">택배사</InputLabel>
        <Select
          labelId="demo-simple-select-deliver"
          id="demo-simple-deliver"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value="kr.cjlogistics">CJ대한통운</MenuItem>
          <MenuItem value="kr.hanjin">한진택배</MenuItem>
          <MenuItem value="kr.logen">로젠택배</MenuItem>
        </Select>
      </FormControl>


      <input 
         type="text"
         value={number}
         placeholder=""
         onChange={handleChange2}
                    />
        <a href={"https://tracker.delivery/#/"+age+"/"+number} target="_blank">배송조회</a>
        {age}{number}
        </div>
        );   
    }

  