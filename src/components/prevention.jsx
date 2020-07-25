import React from "react";
import {
  Card,
  CardTitle,
  CardImg,
  CardText,
  CardBody,
  Row,
  Col,
} from "reactstrap";
import covid1 from "./assets/images/covid1.png";
import covid2 from "./assets/images/covid2.png";
import covid3 from "./assets/images/covid3.png";
import covid4 from "./assets/images/covid4.png";
import covid5 from "./assets/images/covid5.png";
import covid6 from "./assets/images/covid6.jpg";

class Prevent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          title: "Exercise",
          description:
            "Reseach has shown even working out for just half an hour a day will significantly increase immunity against covid-19 and will also boost the overall mood.",
          img: covid1,
        },
        {
          title: "Healthy Diet",
          description:
            "Maintaining a proper, complete diet, will give your body the immunity boost it needs to fight the virus.",
          img: covid2,
        },
        {
          title: "Social Distancing",
          description:
            "Maintain at least 6 feet distance from each other when being in public spaces. Maintain a safe distance from anyone who is coughing or sneezing.",
          img: covid3,
        },
        {
          title: "Wash Hands",
          description:
            "Clean your hands often. Use soap and water, or an alcohol-based hand rub for safest results.",
          img: covid4,
        },
        {
          title: "Stay Home",
          description:
            "The best way to minimise the contact with the virus and also to prevent further spread, is to stay home as much as possible.",
          img: covid5,
        },
        {
          title: "Wear mask and gloves",
          description:
            "If it is essential to go out, take proper precautions by wearing a mask and a pair of gloves at all times.",
          img: covid6,
        },
      ],
    };
  }

  render() {
    return (
      <Row className="mt-5">
        {this.state.data.map((obj) => {
          return (
            <Col xs={12} md={6} lg={4}>
              <Card className="ml-4 mt-4" style={{ height: "350px" }}>
                <img
                  style={{ margin: "auto" }}
                  top
                  width="200px"
                  src={obj.img}
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle style={{ fontWeight: "bold" }}>
                    {obj.title}
                  </CardTitle>
                  <CardText>{obj.description}</CardText>
                </CardBody>
              </Card>
            </Col>
          );
        })}
      </Row>
    );
  }
}

export default Prevent;
