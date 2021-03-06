/**
 * Copyright 2017-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable react/react-in-jsx-scope */

import React , {Component} from "react";
import Loading from './loading.jsx';
import axios from 'axios';
import WebviewControls from '../messenger-api-helpers/webview-controls';
/**
 * Component for each gift category
 * Conditionally renders an indicator is the categoyr is selected
 */
class Restaurants extends Component {
    constructor(props) {
        super(props);
        this.state= {
            restaurants: []
        }
        this.clickRestaurants = this.clickRestaurants.bind(this);
    }

    clickRestaurants(restaurantID,userId) {
        console.log(restaurantID);
        console.log(userId);
       
        const content = this.getRestaurantById(restaurantID);
        console.log(`Push data: ${JSON.stringify(content)}`);
        fetch(`/restaurants/${userId}/restaurant/${restaurantID}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(content)
          }).then((response) => {
            if (response.ok) {
                
              console.log(`Data successfully updated on the server!${userId}`);
              
              return;
            }
      
            console.error(
              response.status,
              `Unable to save store data for User ${userId}'`
            );
          }).catch((err) => console.error('Error pushing data', err)).then(() => {
            WebviewControls.close();
          });
    }
   

    
      /* ----------  Formatters  ---------- */
    
      // Format state for easy printing or transmission
     
    componentDidMount() {
         // //https://8bf35645.ngrok.io/api/store/alpha
        axios.get('./restaurants.json')
        .then(response => { 
        this.setState({ restaurants: response.data.restaurants })
        })
        .catch(error => console.log(error));
    
    }

    getRestaurantById(ID) {
        let desc = this.state.restaurants.filter(restaurant => restaurant.Id === ID)
        console.log('desc',desc[0])
        console.log('subtitle',desc[0].Subtitle);
        return desc[0];
    }
    

    render() {

        const style = {
            background: 'grey',
            padding: '25px 15px',
            color:'white',
            fontSize: '16px'
        }
        console.log('uid',this.props.userId);
        const restaurantList = this.state.restaurants.map((restaurant, index) => {
            return (
               <li onClick = {() => this.clickRestaurants(restaurant.Id,this.props.userId)} key={index} style={style} className='restaurant-list'>
                   {restaurant.Title}
               </li>
            )
        })

        if (!this.state.restaurants) {
            return <Loading />;
        }

        return (
            <div>
              <ul>
                  {restaurantList}
              </ul>
            </div>
        )
    }
}



export default Restaurants;
