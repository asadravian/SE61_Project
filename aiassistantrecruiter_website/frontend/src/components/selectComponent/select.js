import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SelectGravity(props) {
  const classes = useStyles();
  const [gravity, setGravity] = React.useState("");

  const handleChange = (event) => {
    setGravity(event.target.value);
    props.saveGravityStateInsideParent(event.target.value);
  };

  return (
    <div>
      <FormControl required className={classes.formControl}>
        <InputLabel id="select-gravity-required">
          {props.field_name} gravity
        </InputLabel>
        <Select
          labelId="select-gravity-required"
          id="select-gravity-required"
          value={gravity}
          onChange={handleChange}
          className={classes.selectEmpty}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>Critical [100%]</MenuItem>
          <MenuItem value={0.8}>High [80%]</MenuItem>
          <MenuItem value={0.5}>Medium [50%]</MenuItem>
          <MenuItem value={0.3}>Low [30%]</MenuItem>
          <MenuItem value={0.1}>Insignificant [10%]</MenuItem>
        </Select>
        <FormHelperText>
          Required! Please set the gravity of {props.field_name} parameter
        </FormHelperText>
      </FormControl>
    </div>
  );
}
