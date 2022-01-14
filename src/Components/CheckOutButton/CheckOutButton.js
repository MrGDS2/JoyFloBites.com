
import React from 'react';
import { Label } from 'reactstrap';
import QuantityButton from '../QuantityButton/QuantityButton';

const CheckOutButton = (props) => {

    const isEnabled = props.name.length > 0 && props.isVerified===true;

    return (

        <React.Fragment>
    
          <Label for="email" className="d-block text-left control-label">How many would you like?</Label>
          
            <QuantityButton 
            name={props.name}
            email={props.email}
            eta={props.eta}
            address={props.address}
            phone={props.phone}
            item={props.item}
            price={props.price} 
            isEnabled={isEnabled}/>

        </React.Fragment>
    )

}

export default CheckOutButton;