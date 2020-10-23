import React from "react";
import { Switch, Route } from "react-router-dom";


import { Dashboard, Admins, Login, 
        CreateAdmin, PetCategories, 
        CreatePetCategory, EditPetCategory, Product, EditProduct, AddProduct, Breeds,
        CreateBreed, EditBreed,
        Transaction, ProductPurchased, AdoptionTransaction, EditItemProduct, CreateAdoptionTransaction, 
        CatCollection, Pets, DogCollection, AddPetCollection
    } from "../pages";


export default function Routes() {
    return (
        <Switch>
            <Route exact path="/">
                <Login />
            </Route>
            <Route exact path="/dashboard/dashboard">
                <Dashboard />
            </Route>
            <Route exact path="/dashboard/admins">
                <Admins />
            </Route>
            <Route exact path="/dashboard/admins/create">
                <CreateAdmin />
            </Route>
            <Route exact path="/dashboard/product">
                <Product />
            </Route>
            <Route exact path="/dashboard/product/add">
                <AddProduct />
            </Route>
            <Route exact path="/dashboard/product/edit/:id">
                <EditProduct />
            </Route>
            <Route exact path="/dashboard/product/editItem/:id">
                <EditItemProduct />
            </Route>
            
            
            {/* <Route exact path="/dashboard/admins/edit/:id">
                <EditAdmin />
            </Route> */}
            <Route exact path="/dashboard/petCategory">
                <PetCategories />
            </Route>
            <Route exact path="/dashboard/petCategory/create">
                <CreatePetCategory />
            </Route>
            <Route exact path="/dashboard/petCategory/edit/:id">
                <EditPetCategory/>
            </Route>
            <Route exact path="/dashboard/breeds">
                <Breeds/>
            </Route>
            <Route exact path="/dashboard/breeds/edit/:id">
                <EditBreed/>
            </Route>
            <Route exact path="/dashboard/petCollection/edit/:id">
                <AddPetCollection/>
            </Route>
            /dashboard/petCollection/edit
            <Route exact path="/dashboard/breeds/create">
                <CreateBreed/>
            </Route>

            <Route exact path="/dashboard/transaction">
                <Transaction/>
            </Route>
            <Route exact path="/dashboard/transaction/productPurchased">
                <ProductPurchased/>
            </Route>
            <Route exact path="/dashboard/petAdoptionTransaction/">
                <AdoptionTransaction/>
            </Route>
             <Route exact path="/dashboard/petAdoptionTransaction/add">
                <CreateAdoptionTransaction/>
            </Route>
            <Route exact path="/dashboard/pets">
                <Pets/>
            </Route>
            <Route exact path="/dashboard/pets/cat-collections">
                <CatCollection/>
            </Route>
            <Route exact path="/dashboard/pets/dog-collections">
                <DogCollection/>
            </Route>

        </Switch>
    );
}