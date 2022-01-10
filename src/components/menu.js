import React, { Component } from 'react';
import { Media,Card, CardImg,CardBody,CardTitle,CardText,CardImgOverlay} from 'reactstrap';

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: [{
        id: 0,
        name: 'Life venue',
        image: '../assets/life.jpeg',
        location: "Jieh",

        phone: '71-500691'
    },
    {
        id: 1,
        name: 'Hilton',
        image: '../assets/R.jpeg',
        location: "Beirut",

        phone: '01-500666'
    },
    {
        id: 2,

        name: 'Phoenicia',
        image: '../assets/P.jpg ',
        location: "Beirut",

        phone: '01-369100'
    },
    {
        id: 3,

        name: 'Four seasons hotel',
        image: '../assets/F.jpg',
        location: "Beirut",

        phone: '01-761000'
    },


]

    }
  }
          render() {
            const menu = this.state.dishes.map((dish) => {
          return (
                  <div  className="col-12 col-md-5 col-lg-10 center m-1 pb-3">
                    <Card key={dish.id}>
                      <CardImg width="100%" src={dish.image} alt={dish.name} />
                      <CardImgOverlay>
                          <CardTitle>{dish.id}-{dish.name}</CardTitle>
                      </CardImgOverlay>
                      <CardBody>
                    <CardTitle style={{color:"black"}}>Name: {dish.name}</CardTitle>
                    <CardText style={{color:"black"}}>Location: {dish.location}</CardText>
                    <CardText style={{color:"black"}}>Phone: {dish.phone}</CardText>
                  </CardBody>
                    </Card>
                  </div>
                );
          })
          return (
            <div className="container">
              <div className="col-12">
                <Media list>
                    {menu}
                </Media>
              </div>
            </div>
          );
            
          
        }
      }

export default Menu;
