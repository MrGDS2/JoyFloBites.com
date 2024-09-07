import React, { useState, useEffect } from 'react';
import firebase from '../../Firebase';
import { RiArrowDropRightLine } from 'react-icons/ri';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ProductCard from "../MuiCard/MuiCard.js";
import './ProductPage.scss';

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

  //Oatmeal CC
  const [nameOMCC, setNameOMCC] = useState('');
  const [imageOMCC, setImageOMCC] = useState('');
  const [descriptionOMCC, setDescriptionOMCC] = useState('');
  const [priceOMCC, setPriceOMCC] = useState('');



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

  //carrot cake
  const [nameCarr, setNameCarr] = useState('');
  const [imageCarr, setImageCarr] = useState('');
  const [descriptionCarr, setDescriptionCarr] = useState('');
  const [priceCarr, setPriceCarr] = useState('');

  //Peach Cobbler Pound Cake
  const [namePCPC, setNamePCPC] = useState('');
  const [imagePCPC, setImagePCPC] = useState('');
  const [descriptionPCPC, setDescriptionPCPC] = useState('');
  const [pricePCPC, setPricePCPC] = useState('');

  //Strawberry Crunch Cake
  const [nameSCC, setNameSCC] = useState('');
  const [imageSCC, setImageSCC] = useState('');
  const [descriptionSCC, setDescriptionSCC] = useState('');
  const [priceSCC, setPriceSCC] = useState('');


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

  //Pecan Bars
  const [namePB, setNamePB] = useState('');
  const [imagePB, setImagePB] = useState('');
  const [descriptionPB, setDescriptionPB] = useState('');
  const [pricePB, setPricePB] = useState('');


  //Carrot Cake MINI
  const [nameCCM, setNameCCM] = useState('');
  const [imageCCM, setImageCCM] = useState('');
  const [descriptionCCM, setDescriptionCCM] = useState('');
  const [priceCCM, setPriceCCM] = useState('');


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


    firebase.database().ref("Oatmeal Chocolate Chip").once("value", snapshot => {
      setNameOMCC(snapshot.child("name").val());
      setImageOMCC(snapshot.child("image").val());
      setDescriptionOMCC(snapshot.child("description").val());
      setPriceOMCC(snapshot.child("price").val());
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


    firebase.database().ref("Carrot Cake").once("value", snapshot => {
      setNameCarr(snapshot.child("name").val());
      setImageCarr(snapshot.child("image").val());
      setDescriptionCarr(snapshot.child("description").val());
      setPriceCarr(snapshot.child("price").val());
    });

    firebase.database().ref("Peach Cobbler Pound Cake").once("value", snapshot => {
      setNamePCPC(snapshot.child("name").val());
      setImagePCPC(snapshot.child("image").val());
      setDescriptionPCPC(snapshot.child("description").val());
      setPricePCPC(snapshot.child("price").val());
    });

    firebase.database().ref("Strawberry Crunch Cake").once("value", snapshot => {
      setNameSCC(snapshot.child("name").val());
      setImageSCC(snapshot.child("image").val());
      setDescriptionSCC(snapshot.child("description").val());
      setPriceSCC(snapshot.child("price").val());
    });



    //treats
    firebase.database().ref("Banana Bread").once("value", snapshot => {
      setNameBB(snapshot.child("name").val());
      setImageBB(snapshot.child("image").val());
      setDescriptionBB(snapshot.child("description").val());
      setPriceBB(snapshot.child("price").val());
    });


    firebase.database().ref("Pecan Bars").once("value", snapshot => {
      setNamePB(snapshot.child("name").val());
      setImagePB(snapshot.child("image").val());
      setDescriptionPB(snapshot.child("description").val());
      setPricePB(snapshot.child("price").val());
    });


    firebase.database().ref("Carrot Cake MINIs").once("value", snapshot => {
      setNameCCM(snapshot.child("name").val());
      setImageCCM(snapshot.child("image").val());
      setDescriptionCCM(snapshot.child("description").val());
      setPriceCCM(snapshot.child("price").val());
    });

    //cultural Bites
    firebase.database().ref("Nigerian Meat pies").once("value", snapshot => {
      setNameMP(snapshot.child("name").val());
      setImageMP(snapshot.child("image").val());
      setDescriptionMP(snapshot.child("description").val());
      setPriceMP(snapshot.child("price").val());
    });




  }, []);

  return (
    <React.Fragment>
      <div className="popular-products product-body" id="about">
        <div className="row text-center ">
          <div className="col-lg-6 product-body product-title">
            <h6 className="link-tree mt-5 "><a href="/" className='home-link'>Home</a> <RiArrowDropRightLine /> Products</h6>
          </div>
        </div>

        <div className="row text-center product-body">
          <div className="container">

            <div className="col-md-12 mt-5 ml-5 mb-5">

              <h1 className="product-title text-center" id="Cookies">Cookies</h1>
              <div className="row card-center mb-5" >

                <ProductCard name={nameCC} img={imageCC} des={descriptionCC} price={priceCC} isCookie={true} />
                <ProductCard name={namePBCC} img={imagePBCC} des={descriptionPBCC} price={pricePBCC} isCookie={true} />
                <ProductCard name={namePBMM} img={imagePBMM} des={descriptionPBMM} price={pricePBMM} isCookie={true} />
                <ProductCard name={nameMM} img={imageMM} des={descriptionMM} price={priceMM} isCookie={true} />
                <ProductCard name={nameOR} img={imageOR} des={descriptionOR} price={priceOR} isCookie={true} />
                <ProductCard name={nameOMCC} img={imageOMCC} des={descriptionOMCC} price={priceOMCC} isCookie={true} />
                <ProductCard name={nameWCM} img={imageWCM} des={descriptionWCM} price={priceWCM} isCookie={false} />
                <ProductCard name={nameCOCO} img={imageCOCO} des={descriptionCOCO} price={priceCOCO} isCookie={true} />
              </div>

              <h1 className="product-title text-center mb-5" id="Cakes">Cakes</h1>
              <div className="row card-center" >

                <ProductCard name={nameLC} img={imageLC} des={descriptionLC} price={priceLC} isCookie={false} />
                <ProductCard name={nameRV} img={imageRV} des={descriptionRV} price={priceRV} isCookie={false} />

                <ProductCard name={nameBPD} img={imageBPD} des={descriptionBPD} price={priceBPD} isCookie={false} />
                <ProductCard name={nameCarr} img={imageCarr} des={descriptionCarr} price={priceCarr} isCookie={false} />
                <ProductCard name={namePCPC} img={imagePCPC} des={descriptionPCPC} price={pricePCPC} isCookie={false} />
                <ProductCard name={nameSCC} img={imageSCC} des={descriptionSCC} price={priceSCC} isCookie={false} />
              </div>

              <h1 className="product-title text-center mt-5">Treats</h1>
              <div className="row card-center" id="treats" >

                <ProductCard name={nameBB} img={imageBB} des={descriptionBB} price={priceBB} isCookie={false} />
                <ProductCard name={nameCCM} img={imageCCM} des={descriptionCCM} price={priceCCM} isCookie={false} />
                <ProductCard name={namePB} img={imagePB} des={descriptionPB} price={pricePB} isCookie={false} />
              </div>

              <h1 className="product-title text-center mt-5">Cultural Bites</h1>
              <div className="row card-center" id="treats" >

                <ProductCard name={nameMP} img={imageMP} des={descriptionMP} price={priceMP} isCookie={false} />

              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )

}

export default ProductsPage;