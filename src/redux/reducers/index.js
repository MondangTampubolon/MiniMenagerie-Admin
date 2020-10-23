import { combineReducers } from "redux";

import admin from "./admin";
import auth from './auth';
import petCategory from './petCategory';
import breed from './breed';
import product from './product';
import image from './image';
import productPurchased from './productPurchased';
import listAdoptionTransaction from './listAdoptionTransaction'
import cats from './Cats';
import dogs from './Dogs';
import petCollection from './petCollection';




export default combineReducers({ admin, auth, petCategory, breed, product, image, productPurchased, listAdoptionTransaction, cats, dogs, petCollection });


