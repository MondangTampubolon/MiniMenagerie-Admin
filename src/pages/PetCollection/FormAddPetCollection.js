// import React, { useEffect } from "react";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Container, Grid, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
import { Formik, Form, Field} from "formik";
import { addPetCollection } from "../../redux/actions";

const useStyles = makeStyles((theme) => ({
    field: {
        width: "100%",
    },
    error: {
        color: "red",
        fontStyle: "italic",
    },
}));

export default function FormAddPetCollection() {
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
    // const breeds = useSelector((state) => state.breed);
    const history = useHistory();

    // console.log(admins, 'ssss')

  

    // useEffect(() => {
    //     dispatch(getAdminByID(id));
    // }, [dispatch, id]);

    return (
        <Container>
            <Formik
                initialValues={{
                    collectionName: "",
                    idPet: pathname.split("/")[4]
                }}
                enableReinitialize={true}
               
                onSubmit={(values) => {
                    dispatch(addPetCollection(values, history));
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
                                    name="collectionName"
                                    label="Collection Name"
                                    required
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
                                    Add Pet to Collection
                                </Button>
                            </Grid>
                        </Grid>
                    </Form>
                )}
            </Formik>
        </Container>
    );
}