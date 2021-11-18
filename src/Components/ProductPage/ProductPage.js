import React ,{useState,useEffect} from 'react';
import firebase from '../../Firebase';
import { RiArrowDropRightLine } from 'react-icons/ri';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ProductCard from "../MuiCard/MuiCard.js";
import './ProductPage.scss';

const ProductsPage = () => {


    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [show, setShowName] = useState('');

  useEffect(() => {
   firebase.database().ref("Chocolate Chip").once("value", snapshot => {
        setName(snapshot.child("name").val());
        setImage(snapshot.child("image").val());
        setDescription(snapshot.child("description").val()); 
      });

    console.log("name =>" + name)

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
                            <div className="row card-center" >
                               {/* place card here */}
                              
                              <ProductCard name={name} img={image} />
                            
                            </div>

                            <h1 className="product-title text-center">Cakes</h1>
                            <div className="row card-center" >
                               {/* place card here */}
                            {/* {productNames.map((object, i) => <ProductCard obj={object} key={i} />)} */}
                            </div>

                            <h1 className="product-title text-center">Pies</h1>
                            <div className="row card-center" >
                               {/* place card here */}
                            {/* {productNames.map((object, i) => <ProductCard obj={object} key={i} />)} */}
                            </div>
                            <h1 className="product-title text-center">More</h1>
                            <div className="row card-center" >
                               {/* place card here */}
                            {/* {productNames.map((object, i) => <ProductCard obj={object} key={i} />)} */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
        )

}

export default ProductsPage;