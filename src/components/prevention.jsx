import React from "react";
import { Card, CardImg, CardText, CardBody, Row, Col } from "reactstrap";
import covid1 from "./assets/images/covid1.png";
import covid2 from "./assets/images/covid2.png";

class Prevent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{
					description: "ABCD",
					img: covid1,
				},
				{ description: "BCDE", img: covid2 },
			],
		};
	}

	render() {
		return (
			<Row>
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
