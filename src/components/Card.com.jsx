import React from "react";
import { useContext } from "react";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";
import { PostContext } from "../context/PostContext";

const CardCom = ({ item }) => {
  const { id, title, author, details } = item;
  const { deletePost } = useContext(PostContext);
  return (
    <Card key={id}>
      <CardBody>
        <CardTitle tag="h5">{title}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {author}
        </CardSubtitle>
        <CardText>{details}</CardText>
        <Button color="outline-danger" onClick={() => deletePost(id)}>
          Delete
        </Button>
      </CardBody>
    </Card>
  );
};

export default CardCom;
