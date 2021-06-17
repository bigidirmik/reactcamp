import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button, Card, Image } from 'semantic-ui-react'
import ProductService from "../Services/productService";

export default function ProductDetail() {

  // useParams() :id :categoryId vesaire parametreleri bize veriyor. Destructure yaparak id'yi alalım
  let { id } = useParams(); // normalde id:id ancak iki taraf da aynı ise birini yazmamız yeterli


  const [product, setProduct] = useState({}); // tek bir obje geldiği için ilk değer array değil objedir

  useEffect(() => {
    let productService = new ProductService();
    productService
      .findById(id)
      .then((result) => setProduct(result.data.data));
  }, []);

  return (
    <div>
      <Card.Group>
        <Card fluid>
          <Card.Content>
            <Image
              floated="right"
              size="mini"
              src="/images/avatar/large/steve.jpg"
            />
            <Card.Header>{product.productName}</Card.Header>
            <Card.Meta>{product.category.categoryName}</Card.Meta>
            <Card.Description>
              Steve wants to add you to the group <strong>best friends</strong>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green">
                Approve
              </Button>
              <Button basic color="red">
                Decline
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
}
