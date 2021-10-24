import React ,{useState,useEffect} from 'react';
import { RiArrowDropRightLine } from 'react-icons/ri';
import firebase from '../../Firebase';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './ProductPage.scss';

const ProductsPage = () => {

    const [lists, setLists] = useState({name:[]});
  useEffect(() => {
    const bites = [];
     firebase.database().ref().once("value", snapshot => {
    snapshot.forEach((child) => {
     

        setLists({
            name: child.key

        })

    });
  
    
});
 
}, []);

console.log("out",Object.values(lists).map(foodItem => foodItem))
   const productList =Object.values(lists).map(foodItem => foodItem)
    //  console.log("out",productList)
  
//    firebase.database().ref().once("value", snapshot => {
//     snapshot.forEach((child) => {
//         bites.push(child.val());

//     });
   // console.log("prod",bites.map(food=>food.title));
    
// });
// const productList = Object.values(bites).map(food=>food.title);
// const bitesList= bites
// console.log("bite",bitesList);
// const productList = "hi"
// console.log("prod",bites.);

    return (
        <React.Fragment>
            <div className="popular-products" id="about">
                <div className="row text-center ">
                    <div className="col-lg-6">
                        <h6 className="link-tree mt-5">Home <RiArrowDropRightLine /> Products</h6>
                    </div>
                </div>


                <div className="row text-center ">
                    <div className="col-lg-6">
                        <h1 className="product-title mt-5">Cookies</h1>
                    </div>
                </div>

                <div className="row text-center">
                    <div className="container">
                        <div className="col-md-12 mt-5 mb-5">
                            <div className="row ml-4" >
                                {productList}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
        )

}

export default ProductsPage;