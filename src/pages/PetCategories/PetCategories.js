import React, { Fragment, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { Box } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";
import { getAllAdmin, getAllCategoryPet } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import Swal from 'sweetalert2'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '80%',
        margin: 'auto',
        boxShadow: '0 0.7rem 1rem rgba(111, 115, 184, 0.8) !important',
        backgroundColor: '#3a6986',
    },
    table: {
        padding: theme.spacing(3),
    },
    tablehead: {
        marginRight: theme.spacing(5),
        color: 'white',
        marginLeft: theme.spacing(5),
    },
    button: {
        margin: theme.spacing(1),
        backgroundColor: '#d16473'
    },
    link: {
        textDecoration: "none",
    },
    text: {
        color: 'white',
        backgroundColor: '#5c84a6',
    }
}));


export default function Admin() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const petCategory = useSelector((state) => state.petCategory);
    console.log(petCategory)


    useEffect(() => {
        dispatch(getAllAdmin());
        dispatch(getAllCategoryPet());
    }, [dispatch]);

    return (
        <Fragment >
            <Box component={Paper} className={classes.root}>
                <Container >
                    <Grid
                        container
                        direction="row"
                        justify="space-between"
                        alignItems="center"
                    >
                        <Grid>
                            <Typography className={classes.tablehead} variant="h4">List Pet Category</Typography>
                        </Grid>
                        <Grid>
                            
                            <Link
                                // to="/dashboard/petCategory/create"
                                to="#"
                                className={classes.link}
                            >
                                <Button
                                    variant="contained"
                                    disabled
                                    color="secondary"
                                    className={classes.button}
                                    startIcon={<AddIcon />}
                                >
                                    Add
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>
                </Container>

                <TableContainer component={Paper} className={classes.table} >
                    <Table aria-label="a dense table" size="small">
                        <TableHead className={classes.text} >
                            <TableRow  > 
                                <TableCell >
                                    <Typography className={classes.text} variant="h6">No</Typography>
                                </TableCell>
                                <TableCell align="left">
                                    <Typography className={classes.text} variant="h6">Category Name</Typography>
                                </TableCell>
                                <TableCell align="right" >
                                    <Typography className={classes.tablehead} variant="h6">Action</Typography>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {Array.isArray(petCategory) &&
                            petCategory.map((row, index) => (
                                
                                <TableRow key={row._id}>
                                    <TableCell component="th" scope="row">
                                        <Typography variant="h6">{index+1}</Typography>
                                    </TableCell>
                                    <TableCell align="left">
                                        <Typography variant="h6">{row.categoryName}</Typography>
                                    </TableCell>
                                    {index >= 0 &&
                                    <TableCell align="right">
                                        <Link
                                            // to={`/dashboard/petCategory/edit/${row._id}`}
                                            to="#"
                                            className={classes.link}
                                        >
                                            <Button
                                                variant="contained"
                                                disabled
                                                color="secondary"
                                                className={classes.button}
                                                startIcon={<EditIcon />}
                                                onClick={() =>
                                                Swal.fire({
                                                    icon: 'error',
                                                    title: 'Oops...',
                                                    text: 'Something went wrong!',
                                                    footer: '<a href>Why do I have this issue?</a>'
                                                  })

                                                }
                                            >
                                                Edit
                                            </Button>
                                    </Link>
                                        
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            disabled
                                            className={classes.button}
                                            startIcon={<DeleteIcon />}
                                            onClick={() =>
                                                Swal.fire({
                                                    icon: 'error',
                                                    title: 'Oops...',
                                                    text: 'Something went wrong!',
                                                    footer: '<a href>Why do I have this issue?</a>'
                                                  })
                                                // dispatch(deletePetCategory(row._id))
                                            }
                                        >
                                            Delete
                                        </Button>
                                    
                                    </TableCell>
                                    }
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Fragment>
    );
}