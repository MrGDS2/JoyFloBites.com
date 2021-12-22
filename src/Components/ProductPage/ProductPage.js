import React, { useState, useEffect } from 'react';
import firebase from '../../Firebase';
import { RiArrowDropRightLine } from 'react-icons/ri';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ProductCard from "../MuiCard/MuiCard.js";
import './ProductPage.scss';
import ItemPurchase from '../ItemPurchase/ItemPurchase';

const ProductsPage = () => {


  /**Cookies**/
  //Chocolatechip
  const [nameCC, setNameCC] = useState('');
  const [imageCC, setImageCC] = useState('');
  const [descriptionCC, setDescriptionCC] = useState('');
  const [priceCC, setPriceCC] = useState('');
  

  //Peanut butter chocolate chip
  const [namePBCC, setNamePBCC] = useState('');
  const [imagePBCC, setImagePBCC] = useState('');
  const [descriptionPBCC, setDescriptionPBCC] = useState('');
  const [pricePBCC, setPricePBCC] = useState('');


  //Peanut butter m&m
  const [namePBMM, setNamePBMM] = useState('');
  const [imagePBMM, setImagePBMM] = useState('');
  const [descriptionPBMM, setDescriptionPBMM] = useState('');
  const [pricePBMM, setPricePBMM] = useState('');


  //m&m
  const [nameMM, setNameMM] = useState('');
  const [imageMM, setImageMM] = useState('');
  const [descriptionMM, setDescriptionMM] = useState('');
  const [priceMM, setPriceMM] = useState('');

  //coconut
  const [nameCOCO, setNameCOCO] = useState('');
  const [imageCOCO, setImageCOCO] = useState('');
  const [descriptionCOCO, setDescriptionCOCO] = useState('');
  const [priceCOCO, setPriceCOCO] = useState('');


  //Oatmeal raisin
  const [nameOR, setNameOR] = useState('');
  const [imageOR, setImageOR] = useState('');
  const [descriptionOR, setDescriptionOR] = useState('');
  const [priceOR, setPriceOR] = useState('');

  //White chocolate macadamia
  const [nameWCM, setNameWCM] = useState('');
  const [imageWCM, setImageWCM] = useState('');
  const [descriptionWCM, setDescriptionWCM] = useState('');
  const [priceWCM, setPriceWCM] = useState('');



  /**cakes**/


  //red Velvet
  const [nameRV, setNameRV] = useState('');
  const [imageRV, setImageRV] = useState('');
  const [descriptionRV, setDescriptionRV] = useState('');
  const [priceRV, setPriceRV] = useState('');

  //pound
  const [namePD, setNamePD] = useState('');
  const [imagePD, setImagePD] = useState('');
  const [descriptionPD, setDescriptionPD] = useState('');
  const [pricePD, setPricePD] = useState('');



  //LousianaCrunch
  const [nameLC, setNameLC] = useState('');
  const [imageLC, setImageLC] = useState('');
  const [descriptionLC, setDescriptionLC] = useState('');
  const [priceLC, setPriceLC] = useState('');
  

  //butter pound
  const [nameBPD, setNameBPD] = useState('');
  const [imageBPD, setImageBPD] = useState('');
  const [descriptionBPD, setDescriptionBPD] = useState('');
  const [priceBPD, setPriceBPD] = useState('');



  /***Cultural treat */

  //meat pies
  const [nameMP, setNameMP] = useState('');
  const [imageMP, setImageMP] = useState('');
  const [descriptionMP, setDescriptionMP] = useState('');
  const [priceMP, setPriceMP] = useState('');

  //banana bread
  const [nameBB, setNameBB] = useState('');
  const [imageBB, setImageBB] = useState('');
  const [descriptionBB, setDescriptionBB] = useState('');
  const [priceBB, setPriceBB] = useState('');




  useEffect(() => {
    firebase.database().ref("Chocolate Chip").once("value", snapshot => {
      setNameCC(snapshot.child("name").val());
      setImageCC(snapshot.child("image").val());
      setDescriptionCC(snapshot.child("description").val());
      setPriceCC(snapshot.child("price").val());
    });

    firebase.database().ref("Peanut Butter Chocolate Chip").once("value", snapshot => {
      setNamePBCC(snapshot.child("name").val());
      setImagePBCC(snapshot.child("image").val());
      setDescriptionPBCC(snapshot.child("description").val());
      setPricePBCC(snapshot.child("price").val());
    });


    firebase.database().ref("Peanut Butter M&M").once("value", snapshot => {
      setNamePBMM(snapshot.child("name").val());
      setImagePBMM(snapshot.child("image").val());
      setDescriptionPBMM(snapshot.child("description").val());
      setPricePBMM(snapshot.child("price").val());
    });

    firebase.database().ref("Plain M&M").once("value", snapshot => {
      setNameMM(snapshot.child("name").val());
      setImageMM(snapshot.child("image").val());
      setDescriptionMM(snapshot.child("description").val());
      setPriceMM(snapshot.child("price").val());
    });

    firebase.database().ref("Oatmeal Raisin").once("value", snapshot => {
      setNameOR(snapshot.child("name").val());
      setImageOR(snapshot.child("image").val());
      setDescriptionOR(snapshot.child("description").val());
      setPriceOR(snapshot.child("price").val());
    });

    firebase.database().ref("White Chocolate Macadamia").once("value", snapshot => {
      setNameWCM(snapshot.child("name").val());
      setImageWCM(snapshot.child("image").val());
      setDescriptionWCM(snapshot.child("description").val());
      setPriceWCM(snapshot.child("price").val());

    });
    firebase.database().ref("Toasted Coconut").once("value", snapshot => {
      setNameCOCO(snapshot.child("name").val());
      setImageCOCO(snapshot.child("image").val());
      setDescriptionCOCO(snapshot.child("description").val());
      setPriceCOCO(snapshot.child("price").val());
    });


    //cakes 

    firebase.database().ref("Louisiana Crunch Cake").once("value", snapshot => {
      setNameLC(snapshot.child("name").val());
      setImageLC(snapshot.child("image").val());
      setDescriptionLC(snapshot.child("description").val());
      setPriceLC(snapshot.child("price").val());
    });


    firebase.database().ref("Red Velvet With Cream Cheese Glaze").once("value", snapshot => {
      setNameRV(snapshot.child("name").val());
      setImageRV(snapshot.child("image").val());
      setDescriptionRV(snapshot.child("description").val());
      setPriceRV(snapshot.child("price").val());
    });

    firebase.database().ref("Butter Pound Cake").once("value", snapshot => {
      setNameBPD(snapshot.child("name").val());
      setImageBPD(snapshot.child("image").val());
      setDescriptionBPD(snapshot.child("description").val());
      setPriceBPD(snapshot.child("price").val());
    });

    firebase.database().ref("Pound Cake").once("value", snapshot => {
      setNamePD(snapshot.child("name").val());
      setImagePD(snapshot.child("image").val());
      setDescriptionPD(snapshot.child("description").val());
      setPricePD(snapshot.child("price").val());
    });



    //cultural treats


    firebase.database().ref("Banana Bread").once("value", snapshot => {
      setNameBB(snapshot.child("name").val());
      setImageBB(snapshot.child("image").val());
      setDescriptionBB(snapshot.child("description").val());
      setPriceBB(snapshot.child("price").val());
    });


    firebase.database().ref("Nigerian Meat pies").once("value", snapshot => {
      setNameMP(snapshot.child("name").val());
      setImageMP(snapshot.child("image").val());
      setDescriptionMP(snapshot.child("description").val());
      setPriceMP(snapshot.child("price").val());
    });



  }, []);

  return (
    <React.Fragment>
      <div className="popular-products" id="about">
        <div className="row text-center ">
          <div className="col-lg-6">
            <h6 className="link-tree mt-5">Home <RiArrowDropRightLine /> Products</h6>
          </div>
        </div>


        <div className="row text-center ">
          {/* <div className="col-lg-6">
                        <h1 className="top-title mt-5">Taste The Joy Of...</h1>
                    </div> */}
        </div>

        <div className="row text-center">
          <div className="container">

            <div className="col-md-12 mt-5 ml-5 mb-5">

              <h1 className="product-title text-center">Cookies</h1>
              <div className="row card-center mb-5" >
                {/* place card here */}

                <ProductCard name={nameCC} img={imageCC} des={descriptionCC} price={priceCC}/>
                <ProductCard name={namePBCC} img={imagePBCC} des={descriptionPBCC} price={pricePBCC} />
                <ProductCard name={namePBMM} img={imagePBMM} des={descriptionPBMM} price={pricePBMM} />
                <ProductCard name={nameMM} img={imageMM} des={descriptionMM} price={priceMM}/>
                <ProductCard name={nameOR} img={imageOR} des={descriptionOR} price={priceOR}/>
                <ProductCard name={nameWCM} img={imageWCM} des={descriptionWCM} price={priceWCM}/>
                <ProductCard name={nameCOCO} img={imageCOCO} des={descriptionCOCO} price={priceCOCO}/>
              </div>

              <h1 className="product-title text-center mb-5">Cakes</h1>
              <div className="row card-center" >
                {/* place card here */}
                <ProductCard name={nameLC} img={imageLC} des={descriptionLC} price={priceLC}/>
                <ProductCard name={nameRV} img={imageRV} des={descriptionRV} price={priceRV}/>
                <ProductCard name={namePD} img={imagePD} des={descriptionPD} price={pricePD}/>
                <ProductCard name={nameBPD} img={imageBPD} des={descriptionBPD} price={priceBPD}/>
                {/* <ProductCard name="CHEESE CAKE" img={imageBPD} des={descriptionBPD}/> */}
              </div>


              <h1 className="product-title text-center mt-5">Cultural Treats</h1>
              <div className="row card-center" >
                {/* place card here */}
                <ProductCard name={nameBB} img={imageBB} des={descriptionBB} price={priceBB}/>
                <ProductCard name={nameMP} img={imageMP} des={descriptionMP} price={priceMP}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )

}

export default ProductsPage;