import React, {useEffect, useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Container, Grid, Button, InputLabel, Select, FormControl } from "@material-ui/core";
import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { addBreed, getAllCategoryPet } from '../../../redux/actions';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        boxShadow: '0 0.7rem 1rem rgba(111, 115, 184, 0.8) !important',
    },
    field: {
        width: "100%",
    },
    error: {
        color: "red",
        fontStyle: "italic",
    },

}));

export default function AddBreed() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();

    let [category, setCategory] = useState([
        {_id: "5f636c3107ecf0153f55cfca", categoryName: 'Cat'},
        {_id: "5f64485746168f24214a72a5", categoryName: 'Dog'},
    ])
    console.log(setCategory);
    
    useEffect(() => {
        dispatch(getAllCategoryPet());
    },[dispatch])
    console.log(category[0]._id);
    const CustomField = (props) => {
        return (
            <TextField
                fullWidth
                variant="outlined"
                margin="normal"
                className={classes.field}
                required
                {...props}
            />
        );
    };

    const SelectField = (props) => {
        return (
            <Select
                native
                label="Pet Category"
                inputProps={{
                    name: 'idCategoryPet',
                }}
                {...props}
            ></Select>
        );
    };

    return (
        <Container  >
            <Formik 
                initialValues={{
                    idCategoryPet: "",
                    breedName: "",
                }}
                onSubmit={(values) => {
                    dispatch(addBreed(values, history));
                }}
            >
                {() => (
                <Form
                noValidate
                autoComplete="off"
            >
                <Grid 
                    container
                    justify="center"
                    direction="column"
                    alignItems="center"
                    spacing={2}
                >
                    <Grid container item xs={12} md={6} lg={6}>
                        <Field
                            type="breedName"
                            as={CustomField}
                            name="breedName"
                            label="Breed Name"
                            autoFocus
                        />
                    </Grid>
                    <Grid container item xs={12} md={6} lg={6}>
                    <FormControl variant="outlined" className={classes.field}>
                       
                        <InputLabel>
                            Category Pet
                        </InputLabel>
                        <Field 
                            name="idCategoryPet" 
                            as={SelectField} 
                            placeholder="Category Pet"
                            variant="outlined"
                            margin="normal"
                        >
                            <option value=""></option>
                            <option value={category[0]._id}>Cat</option>
                            <option value={category[1]._id}>Dog</option>
                             
                        
                        </Field>
                        
                    </FormControl>
                    </Grid>
                    <Grid container item xs={12} md={6} lg={6}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </Form>
             )}
            </Formik>
        </Container>
    );
}