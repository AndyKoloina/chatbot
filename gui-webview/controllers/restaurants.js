class Restaurants {
    constructor() {
        this.restaurants = [
            {
              id: 1,
              name: 'restaurant1',
              description: 'restaurant1 description'
            },
            {
              id: 2,
              name: 'restaurant2',
              description: 'Adopt description'
            },
            {
              id: 3,
              name: 'restaurant3',
              description: 'test description'
            }
        ]
    }
  

  getlistRestaurant() {
    return  this.restaurants;
  }

  getRestaurantById(restaurantId) {
    return this.restaurants.filter(restaurant => restaurant.id === restaurantId);
  }
  
}


export default Restaurants;