import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Container, Grid, Button } from "@material-ui/core";
import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { addPetCategory } from '../../../redux/actions';
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

export default function AddPetCategory() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    // const loggedAdmin = jwtDecode(localStorage.getItem('token'))
    // console.log(loggedAdmin.role, "logged")

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

    // const SelectField = (props) => {
    //     return (
    //         <Select
    //             native
    //             label="Role"
    //             inputProps={{
    //                 name: 'role',
    //             }}
    //             {...props}
    //         ></Select>
    //     );
    // };

    return (
        <Container  >
            <Formik 
                initialValues={{
                    categoryName: "",
                }}
                onSubmit={(values) => {
                    dispatch(addPetCategory(values, history));
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
                            type="categoryName"
                            as={CustomField}
                            name="categoryName"
                            label="Category Name"
                            autoFocus
                        />
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