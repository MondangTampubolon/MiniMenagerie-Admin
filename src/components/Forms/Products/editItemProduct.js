// import React, { useEffect } from "react";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Container, Grid, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
// import { useDispatch } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
import { Formik, Form, Field} from "formik";
import { updateProduct } from "../../../redux/actions";

const useStyles = makeStyles((theme) => ({
    field: {
        width: "100%",
    },
    error: {
        color: "red",
        fontStyle: "italic",
    },
}));

export default function EditAdmin() {
    const classes = useStyles();

    const CustomField = (props) => {
        return (
            <TextField
                fullWidth
                variant="outlined"
                margin="normal"
                className={classes.field}
                {...props}
            />
        );
    };

    const dispatch = useDispatch();
    const { pathname } = useLocation();
    const history = useHistory();


    const id = pathname.split("/")[4];

    // useEffect(() => {
    //     dispatch(getAdminByID(id));
    // }, [dispatch, id]);

    return (
        <Container>
            <Formik
                initialValues={{
                   productName: '',
                   categories: '',
                   price: '',
                   stock: '',
                }}
                enableReinitialize={true}
               
                onSubmit={(values) => {
                    dispatch(updateProduct(values, id, history));
                }}
            >
                {() => (
                    <Form className={classes.form}>
                        <Grid
                            container
                            justify="center"
                            direction="column"
                            alignItems="center"
                            spacing={2}
                        >
                            <Grid container item xs={12} md={6} lg={6}>
                                <Field
                                    type="text"
                                    as={CustomField}
                                    name="productName"
                                    label="Product Name"
                                    required
                                    autoFocus
                                />
                              
                            </Grid>
                            <Grid container item xs={12} md={6} lg={6}>
                                <Field
                                    type="text"
                                    as={CustomField}
                                    name="categories"
                                    label="Categories"
                                />
                            </Grid>
                            <Grid container item xs={12} md={6} lg={6}>
                                <Field
                                    type="text"
                                    as={CustomField}
                                    name="price"
                                    label="Price"
                                />
                            </Grid>
                            <Grid container item xs={12} md={6} lg={6}>
                                <Field
                                    type="text"
                                    as={CustomField}
                                    name="stock"
                                    label="Stock"
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
                                    Update
                                </Button>
                            </Grid>
                        </Grid>
                    </Form>
                )}
            </Formik>
        </Container>
    );
}