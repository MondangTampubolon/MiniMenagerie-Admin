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
import { getSmallCat } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
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


export default function SmallCat() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const cats = useSelector((state) => state.cats);
    console.log(cats);

    useEffect(() => {
        dispatch(getSmallCat());
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
                            <Typography className={classes.tablehead} variant="h4">Small Cats Collections</Typography>
                        </Grid>
                        {/* <Grid>
                            
                            <Link
                                to="/dashboard/breeds/create"
                                className={classes.link}
                            >
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    className={classes.button}
                                    startIcon={<AddIcon />}
                                >
                                    Add
                                </Button>
                            </Link>
                        </Grid> */}
                    </Grid>
                </Container>

                <TableContainer component={Paper} className={classes.table} >
                    <Table aria-label="a dense table" size="medium">
                        <TableHead className={classes.text} >
                            <TableRow  > 
                                <TableCell >
                                    <Typography className={classes.text} variant="h6">No</Typography>
                                </TableCell>
                                <TableCell align="left">
                                    <Typography className={classes.text} variant="h6">Category</Typography>
                                </TableCell>
                                <TableCell align="left">
                                    <Typography className={classes.text} variant="h6">Breed</Typography>
                                </TableCell>
                                <TableCell align="left">
                                    <Typography className={classes.text} variant="h6">Size</Typography>
                                </TableCell>
                                <TableCell align="left">
                                    <Typography className={classes.text} variant="h6">Weight</Typography>
                                </TableCell>
                                <TableCell align="left">
                                    <Typography className={classes.text} variant="h6">Gender</Typography>
                                </TableCell>
                                <TableCell align="left" >
                                    <Typography className={classes.tablehead} variant="h6">Action</Typography>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {Array.isArray(cats) &&
                            cats.sort().map((row, index) => (
                                
                                <TableRow key={row._id}>
                                    <TableCell component="th" scope="row">
                                        <Typography variant="h6">{index+1}</Typography>
                                    </TableCell>
                                    <TableCell align="left">
                                        <Typography variant="h6">{row.category}</Typography>
                                    </TableCell>
                                    <TableCell align="left">
                                        <Typography variant="h6">{row.breed}</Typography>
                                    </TableCell>
                                    <TableCell align="left">
                                        <Typography variant="h6">{row.size}</Typography>
                                    </TableCell>
                                    <TableCell align="left">
                                        <Typography variant="h6">{row.weight}</Typography>
                                    </TableCell>
                                    <TableCell align="left">
                                        <Typography variant="h6">{row.gender}</Typography>
                                    </TableCell>
                                    {index >= 0 &&
                                    <TableCell align="left">
                                        {/* <Link
                                            to={`/dashboard/petCollection/edit/${row.id}`}
                                            className={classes.link}
                                        >
                                            <Button
                                                variant="contained"
                                                color="secondary"
                                                className={classes.button}
                                                startIcon={<EditIcon />}
                                            >
                                                Add to Collection
                                            </Button>
                                    </Link>
                                         */}
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            className={classes.button}
                                            startIcon={<DeleteIcon />}
                                            disabled
                                            onClick={() =>
                                                null
                                                // dispatch(deleteBreed(row._id))
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