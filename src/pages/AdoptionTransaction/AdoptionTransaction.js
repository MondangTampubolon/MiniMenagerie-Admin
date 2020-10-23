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
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";
import { acceptAdoptionTransaction, getAllListAdoptionTransaction, declineAdoptionTransaction } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Send, SentimentDissatisfied } from "@material-ui/icons";

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
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
      }
}));

getAllListAdoptionTransaction()
export default function AdoptionTransaction() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const adoptionTransaction = useSelector((state) => state.listAdoptionTransaction);
    
    useEffect(() => {
        dispatch(getAllListAdoptionTransaction());
    }, [dispatch]);
    console.log('====================================');
    console.log(adoptionTransaction);
    console.log('====================================');


    if(adoptionTransaction.length === 0){
        return <div>Loading....</div>
    } else {
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
                                <Typography className={classes.tablehead} variant="h4">List Adoption Transaction</Typography>
                            </Grid>
                            <Grid>
                                
                                <Link
                                    to="/dashboard/petAdoptionTransaction/add"
                                    className={classes.link}
                                >
                                    <Button
                                        disabled
                                        variant="contained"
                                        color="secondary"
                                        className={classes.button}
                                        startIcon={<AddIcon />}
                                    >
                                        Add Adoption Transaction
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
                                        <Typography  className={classes.text} variant="h6">No</Typography>
                                    </TableCell>
                                    <TableCell align="center">
                                        <Typography style={{width: "100px"}} className={classes.text} variant="h6">Pet Name</Typography>
                                    </TableCell>
                                    <TableCell align="center">
                                        <Typography  style={{width: "130px"}} className={classes.text} variant="h6">Pet Category</Typography>
                                    </TableCell>
                                    <TableCell align="center" >
                                        <Typography style={{width: "40px"}} className={classes.tablehead} variant="h6">Breed</Typography>
                                    </TableCell>
                                    <TableCell align="center" >
                                        <Typography style={{width: "160px"}} className={classes.tablehead} variant="h6">Owner Pet Name</Typography>
                                    </TableCell>
                                    <TableCell align="center" >
                                        <Typography style={{width: "170px"}} className={classes.tablehead} variant="h6">Adopter Pet Name</Typography>
                                    </TableCell>
                                    <TableCell align="center" >
                                        <Typography style={{width: "80px"}} className={classes.tablehead} variant="h6">Status</Typography>
                                    </TableCell>
                                    <TableCell align="center" >
                                        <Typography style={{width: "80px"}} className={classes.tablehead} variant="h6">Action</Typography>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {Array.isArray(adoptionTransaction) &&
                                adoptionTransaction.map((row, index) => (
                                    
                                    <TableRow key={row._id}>
                                        <TableCell component="th" scope="row">
                                            <Typography variant="subtitle">{index+1}</Typography>
                                        </TableCell>
                                        <TableCell align="center">
                                            <Typography variant="subtitle">{row.petName}</Typography>
                                        </TableCell>
                                        <TableCell align="center">
    
                                            <Typography variant="subtitle">{row.idPetUpForAdoption !== undefined && row.idPetUpForAdoption.idPet.idCategoryPet.categoryName}</Typography>
                                        </TableCell>
                                        <TableCell align="center">
                                            <Typography variant="subtitle">{row.idPetUpForAdoption !== undefined && row.idPetUpForAdoption.idPet.idBreed.breedName}</Typography>
                                        </TableCell>
                                        <TableCell align="center">
                                            <Typography variant="subtitle">{row.ownerPetName}</Typography>
                                        </TableCell>
                                        <TableCell align="center">
                                            <Typography variant="subtitle">{row.adopterPetName}</Typography>
                                        </TableCell>
                                        <TableCell align="center">
                                            <Typography variant="subtitle">{row.status}</Typography>
                                        </TableCell>
                                        <TableCell align="left">
                                        {index >= 0 &&
                                        <TableCell align="center">  
    
                                            {row.status === "Completed" ? <div>
                                            <Button
                                                variant="contained"
                                                color="secondary"
                                                className={classes.button}
                                                startIcon={<Send />}
                                                onClick={() =>
                                                    dispatch(acceptAdoptionTransaction("Accepted", row._id))
                                                }
                                            >
                                                Accept
                                            </Button>
    
                                            <Button
                                                variant="contained"
                                                color="secondary"
                                                className={classes.button}
                                                startIcon={<SentimentDissatisfied />}
                                                onClick={() =>
                                                    dispatch(declineAdoptionTransaction("Decline", row._id))
                                                }
                                            >
                                                Decline
                                            </Button>
                                            </div> : <div>
                                            <Button
                                                variant="contained"
                                                disabled
                                                color="secondary"
                                                className={classes.button}
                                                startIcon={<Send />}
                                                onClick={() =>
                                                    dispatch(acceptAdoptionTransaction("Accepted", row._id))
                                                }
                                            >
                                                Accept
                                            </Button>
    
                                            <Button
                                                variant="contained"
                                                color="secondary"
                                                disabled
                                                className={classes.button}
                                                startIcon={<SentimentDissatisfied />}
                                                onClick={() =>
                                                    dispatch(declineAdoptionTransaction("Decline", row._id))
                                                }
                                            >
                                                Decline
                                            </Button>
                                            </div> }
                                            
                                        
                                        </TableCell>
                                        }
                                         
                                        </TableCell>
                                        
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Fragment>
        );
    }
   
}