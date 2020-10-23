import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import {
  Container,
  Grid,
  Button,
  Select,
  InputLabel,
  MenuItem,
  FormControl,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../redux/actions";
import { useHistory } from "react-router-dom";
import ReactFilestack from "filestack-react";
const filestackapi = "AXQPEAHiQTeMTIKzisgugz";

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "0 0.7rem 1rem rgba(111, 115, 184, 0.8) !important",
  },
  field: {
    width: "600px",
  },
  error: {
    color: "red",
    fontStyle: "italic",
  },
  button: {
    margin: theme.spacing(1),
    backgroundColor: "#3f51b5",
    color: "white"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function AddProduct() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const [open, setOpen] = React.useState(false);
  let [values, setValues] = useState({
    productName: "",
    categories: "",
    price: "",
    stock: "",
    image: {
      id: "",
      image: "",
    },
  });

  // const handleChangeSelect = (event) => {
  //   setValues({values, ...event.target.value});
  // };
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    console.log(event);
    event.preventDefault();
    dispatch(addProduct(values, history));
  };

  return (
    <Container className={classes.field}>
      <FormControl onSubmit={handleSubmit}>
        <Grid
          container
          justify="center"
          direction="column"
          alignItems="center"
          spacing={2}
        >
          <TextField
            fullWidth
            variant="outlined"
            margin="normal"
            className={classes.field}
            id="standard-full-width"
            label="Product Name"
            name="productName"
            value={values.productName}
            onChange={handleChange}
          />
        <FormControl className={classes.formControl} onSubmit={handleSubmit}>
          <InputLabel id="demo-controlled-open-select-label">Categories</InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={values.categories}
            onChange={handleChange}
            name="categories"
          >
            <MenuItem value="">
              <em></em>
            </MenuItem>
            <MenuItem value="catfood">Cat Food</MenuItem>
            <MenuItem value="dogfood">Dog Food</MenuItem>
            <MenuItem value="acc">Acc</MenuItem>
            <MenuItem value="vitdrug">Vitdrugs</MenuItem>
          </Select>
          </FormControl>

          {/* <TextField
            fullWidth
            variant="outlined"
            margin="normal"
            className={classes.field}
            id="standard-full-width"
            label="Categories"
            name="categories"
            value={values.categories}
            onChange={handleChange}
          /> */}

          <TextField
            fullWidth
            variant="outlined"
            margin="normal"
            className={classes.field}
            id="standard-full-width"
            label="price"
            name="price"
            value={values.price}
            onChange={handleChange}
          />

          <TextField
            fullWidth
            variant="outlined"
            margin="normal"
            className={classes.field}
            id="standard-full-width"
            label="Stock"
            name="stock"
            value={values.stock}
            onChange={handleChange}
          />
          <ReactFilestack
            apikey={`${filestackapi}`}
            onSuccess={(result) => {
              setValues({
                ...values,
                image: {
                  id: "",
                  image: result.filesUploaded[0].url,
                },
              });
            }}
          />
          <br />
          <Button
            className={classes.button}
            variant="outlined"
            color="primary"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Grid>
      </FormControl>
    </Container>
  );
}
