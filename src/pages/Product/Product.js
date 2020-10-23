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
import { CardMedia } from '@material-ui/core';
import { Link } from "react-router-dom";
import NumberFormat from 'react-number-format';
import { getAllAdmin, getAllProducts, deleteProduct, updateProduct, getAllImage } from "../../redux/actions";
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
        marginRight: theme.spacing(3),
        color: 'white',
        marginLeft: theme.spacing(3),
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
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
      }
}));


export default function Product() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const product = useSelector((state) => state.product);
    // console.log(product)
    // console.log(urlImage)


    useEffect(() => {
        dispatch(getAllAdmin());
        dispatch(getAllProducts());
        dispatch(updateProduct());
        dispatch(getAllImage());
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
                            <Typography className={classes.tablehead} variant="h6">List Products</Typography>
                        </Grid>
                        <Grid>
                            
                            <Link
                                to="/dashboard/product/add"
                                className={classes.link}
                            >
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    className={classes.button}
                                    startIcon={<AddIcon />}
                                >
                                    Add Product
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
                                <TableCell align="center">
                                    <Typography className={classes.text} variant="h6">Product Name</Typography>
                                </TableCell>
                                {/* <TableCell align="center">
                                    <Typography className={classes.text} variant="h6">Categories</Typography>
                                </TableCell> */}
                                <TableCell align="right" >
                                    <Typography className={classes.tablehead} variant="h6">Price</Typography>
                                </TableCell>
                                <TableCell align="right" >
                                    <Typography className={classes.tablehead} variant="h6">Quantity</Typography>
                                </TableCell>
                                <TableCell align="right" >
                                    <Typography className={classes.tablehead} variant="h6">Image</Typography>
                                </TableCell>
                                <TableCell align="center" >
                                    <Typography className={classes.tablehead} variant="h6">Action</Typography>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {Array.isArray(product) &&
                            product.map((row, index) => (
                                
                                <TableRow key={row._id}>
                                    <TableCell component="th" scope="row">
                                        <Typography variant="subtitle">{index+1}</Typography>
                                    </TableCell>
                                    <TableCell align="left">
                                        <Typography variant="subtitle">{row.productName}</Typography>
                                    </TableCell>
                                    {/* <TableCell align="center">
                                        <Typography variant="subtitle">{row.categories}</Typography>
                                    </TableCell> */}
                                    <TableCell align="center">
                                        <Typography variant="subtitle"><NumberFormat value={row.price} dswq displayType={'text'} thousandSeparator={true} prefix={'Rp.'} /></Typography>
                                    </TableCell>
                                    <TableCell align="center">
                                        <Typography variant="subtitle">{row.stock}</Typography>
                                    </TableCell>
                                    <TableCell align="left">
                                    <CardMedia
                                            className={classes.media}
                                            image={row.image[0].image}
                                            title="urlImage"
                                        />
                                     
                                   
                                     
                                    </TableCell>
                                    {index >= 0 &&
                                    <TableCell align="center">
                                    
                                    <Link
                                            to={`/dashboard/product/edit/${row._id}`}
                                            className={classes.link}
                                        >
                                            <Button
                                                style={{width: '150px'}}
                                                variant="contained"
                                                color="secondary"
                                                className={classes.button}
                                                startIcon={<AddIcon />}
                                            >
                                                Add Image
                                            </Button>
                                        </Link>
                                        <Link
                                            to={`/dashboard/product/editItem/${row._id}`}
                                            className={classes.link}
                                        >
                                            <Button
                                                style={{width: '150px'}}
                                                variant="contained"
                                                color="secondary"
                                                className={classes.button}
                                                startIcon={<EditIcon />}
                                            >
                                                Edit
                                            </Button>
                                        </Link>  


                                        <Button
                                            style={{width: '150px'}}
                                            variant="contained"
                                            color="secondary"
                                            className={classes.button}
                                            startIcon={<DeleteIcon />}
                                            onClick={() =>
                                                
                                                dispatch(deleteProduct(row._id))
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