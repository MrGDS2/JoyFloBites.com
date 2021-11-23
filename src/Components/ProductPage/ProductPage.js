import React ,{useState,useEffect} from 'react';
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
 

//Peanut butter chocolate chip
    const [namePBCC, setNamePBCC] = useState('');
    const [imagePBCC, setImagePBCC] = useState('');
    const [descriptionPBCC, setDescriptionPBCC] = useState('');
   

//Peanut butter m&m
    const [namePBMM, setNamePBMM] = useState('');
    const [imagePBMM, setImagePBMM] = useState('');
    const [descriptionPBMM, setDescriptionPBMM] = useState('');
  

//m&m
const [nameMM, setNameMM] = useState('');
const [imageMM, setImageMM] = useState('');
const [descriptionMM, setDescriptionMM] = useState('');

//coconut
const [nameCOCO, setNameCOCO] = useState('');
const [imageCOCO, setImageCOCO] = useState('');
const [descriptionCOCO, setDescriptionCOCO] = useState('');


//Oatmeal raisin
const [nameOR, setNameOR] = useState('');
const [imageOR, setImageOR] = useState('');
const [descriptionOR, setDescriptionOR] = useState('');

//White chocolate macadamia
const [nameWCM, setNameWCM] = useState('');
const [imageWCM, setImageWCM] = useState('');
const [descriptionWCM, setDescriptionWCM] = useState('');


  useEffect(() => {
   firebase.database().ref("Chocolate Chip").once("value", snapshot => {
        setNameCC(snapshot.child("name").val());
        setImageCC(snapshot.child("image").val());
        setDescriptionCC(snapshot.child("description").val()); 
      });

      firebase.database().ref("Peanuts Butter Chocolate Chip").once("value", snapshot => {
        setNamePBCC(snapshot.child("name").val());
        setImagePBCC(snapshot.child("image").val());
        setDescriptionPBCC(snapshot.child("description").val()); 
      });


      firebase.database().ref("Peanut butter m&m").once("value", snapshot => {
        setNamePBMM(snapshot.child("name").val());
        setImagePBMM(snapshot.child("image").val());
        setDescriptionPBMM(snapshot.child("description").val()); 
      });


      firebase.database().ref("Peanut butter m&m").once("value", snapshot => {
        setNamePBMM(snapshot.child("name").val());
        setImagePBMM(snapshot.child("image").val());
        setDescriptionPBMM(snapshot.child("description").val()); 
      });


      firebase.database().ref("Plain m&m").once("value", snapshot => {
        setNameMM(snapshot.child("name").val());
        setImageMM(snapshot.child("image").val());
        setDescriptionMM(snapshot.child("description").val()); 
      });

      firebase.database().ref("Oatmeal raisin").once("value", snapshot => {
        setNameOR(snapshot.child("name").val());
        setImageOR(snapshot.child("image").val());
        setDescriptionOR(snapshot.child("description").val()); 
      });

      firebase.database().ref("White chocolate macadamia").once("value", snapshot => {
        setNameWCM(snapshot.child("name").val());
        setImageWCM(snapshot.child("image").val());
        setDescriptionWCM(snapshot.child("description").val()); 
      });
        firebase.database().ref("Coconut").once("value", snapshot => {
        setNameCOCO(snapshot.child("name").val());
        setImageCOCO(snapshot.child("image").val());
        setDescriptionCOCO(snapshot.child("description").val()); 
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
                              
                              <ProductCard name={nameCC} img={imageCC} des={descriptionCC}/>
                              <ProductCard name={namePBCC} img={imagePBCC} des={descriptionPBCC}/>
                              <ProductCard name={namePBMM} img={imagePBMM} des={descriptionPBMM}/>
                              <ProductCard name={nameMM} img={imageMM} des={descriptionMM}/>
                              <ProductCard name={nameOR} img={imageOR} des={descriptionOR}/>
                              <ProductCard name={nameWCM} img={imageWCM} des={descriptionWCM}/> 
                              <ProductCard name={nameCOCO} img={imageCOCO} des={descriptionCOCO}/>
                            </div>

                            <h1 className="product-title text-center">Cakes</h1>
                            <div className="row card-center" >
                               {/* place card here */}
                        
                            </div>

                            <h1 className="product-title text-center">Pies</h1>
                            <div className="row card-center" >
                               {/* place card here */}
                           
                            </div>
                            <h1 className="product-title text-center">More</h1>
                            <div className="row card-center" >
                               {/* place card here */}
                        
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
        )

}

export default ProductsPage;