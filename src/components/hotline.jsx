import React from "react";
import { Container, Jumbotron, Row, Col, Table } from "reactstrap";

class Hotline extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
		fetch("https://api.rootnet.in/covid19-in/contacts")
			.then((res) => res.json())
			.then((data) => this.setState({ data }));
	}

	render() {
		return (
			<Container className="mt-4">
				<Jumbotron>
					<Table>
						<thead>
							<tr style={{ fontWeight: "bold" }}>
								<td>State</td>
								<td>Number</td>
							</tr>
						</thead>
						<tbody>
							{this.state.data
								? this.state.data.data.contacts.regional.map((each) => {
										return (
											<tr>
												<td>{each.loc}</td>
												<td>{each.number}</td>
											</tr>
										);
								  })
								: ""}
						</tbody>
					</Table>
				</Jumbotron>
			</Container>
		);
	}
}

export default Hotline;
