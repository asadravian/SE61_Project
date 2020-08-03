import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function NativeSelects() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    age: "",
  });

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  const handleChange = (name) => (event) => {
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <div>
      <FormControl variant="outlined" style={{ width: "300px" }}>
        <InputLabel ref={inputLabel} htmlFor="outlined-age-native-simple">
          Change Membership Plan
        </InputLabel>
        <Select
          native
          value={state.age}
          onChange={handleChange("age")}
          labelWidth={labelWidth}
          inputProps={{
            name: "age",
            id: "outlined-age-native-simple",
          }}
        >
          <option value="" />
          <option value={1}>Basic</option>
          <option value={2}>Standard</option>
          <option value={3}>Premium</option>
        </Select>
      </FormControl>
    </div>
  );
}
