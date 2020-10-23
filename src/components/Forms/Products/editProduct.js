// import React, { useEffect } from "react";
import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Button,FormControl } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
import { addImage } from "../../../redux/actions";
import ReactFilestack from "filestack-react";
const filestackapi = "AXQPEAHiQTeMTIKzisgugz";


const useStyles = makeStyles((theme) => ({
    field: {
        width: "100%",
    },
    error: {
        color: "red",
        fontStyle: "italic",
    },
}));

export default function EditProduct() {
    const classes = useStyles();

    const dispatch = useDispatch();
    const { pathname } = useLocation();
    // const product = useSelector((state) => state.Product);
    const history = useHistory();

    const id = pathname.split("/")[4];

    // useEffect(() => {
    //     dispatch(getAdminByID(id));
    // }, [dispatch, id]);
    let [values, setValues] = useState({
        idProduct: id,
        urlImage: ''
      });
      const handleSubmit = (event) => {
        console.log(event);
        event.preventDefault();
        dispatch(addImage(values, history));
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
            Add Image
          <ReactFilestack
            apikey={`${filestackapi}`}
            onSuccess={(result) => {
              setValues({
                ...values,
                  urlImage: result.filesUploaded[0].url,
              });
            }}
          />
        <br/>
          <Button className={classes.button} variant="outlined" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Grid>
      </FormControl>
        </Container>
    );
}