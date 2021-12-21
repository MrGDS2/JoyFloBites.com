import React, { Component } from 'react'
import { ImHeart } from "react-icons/im";
import { Button } from 'react-bootstrap';
import firebase from '../../Firebase';

import './LikeButton.scss';

const Products = {
    name: 'cookies'
}

class LikeButton extends Component {

    constructor(props) {
        super(props);
        this.state = { count:0 , likedName: this.props.name};
        
    }

    incrementLike = () => {
        let newCount = this.state.count + 1
        console.log("newcount" + newCount);
        this.setState({
            count: newCount
        })
        firebase.database().ref(this.props.name).update({ 'Likes': newCount });
        console.log(this.state.count);
    }

    render() {
        return (

            <div className="counter">
  <Button type="submit" variant="danger" size="lg" onChange={this.handleCount} onClick={this.incrementLike}
   {...Products} id="heart"> <ImHeart />  {this.state.count} Likes</Button>

            </div>
        )
    }

}

export default LikeButton