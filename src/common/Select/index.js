import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: '100%'
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const SimpleSelect = ({ label, values, onChange }) => {
  const classes = useStyles();
  const [selected, setSelected] = useState('');

  useEffect(() => {
    onChange(selected)
  }, [selected])

  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  return (
    <div style={{width: '100%'}}>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selected}
          onChange={handleChange}
          fullWidth
        >
          {values.map(v => <MenuItem value={v}>{v}</MenuItem>)}
        </Select>
      </FormControl>
    </div>
  );
}

SimpleSelect.propTypes = {
  label: PropTypes.string,
  values: PropTypes.array,
  onChange: PropTypes.func,
}

export default SimpleSelect