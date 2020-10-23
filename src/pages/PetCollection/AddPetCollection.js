import React, { Fragment } from "react";
import { Grid, Container, Paper } from "@material-ui/core";
import { SubMenu } from "../../components";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import FormAddPetCollection from './FormAddPetCollection'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '60%',
        margin: 'auto',
    },
    box: {
        boxShadow: '0 0.7rem 1rem rgba(111, 115, 184, 0.8) !important',
    }
}));

export default function AddPetCollection() {
    const classes = useStyles();

    return (
        <Fragment>
            <Box className={classes.root}>
                <SubMenu title="Add Pet Collection" />
                <Container >
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={12} lg={12}>
                            <Paper 
                                className={classes.box}
                                style={{ padding: 50 }}>
                                <FormAddPetCollection />
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Fragment>
    );
}