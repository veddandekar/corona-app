import React, { Component } from "react";
import { Container, Row, Col, Jumbotron, Label } from "reactstrap";
import CountUp from "react-countup";

class CountryStats extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		fetch("https://api.rootnet.in/covid19-in/hospitals/beds")
			.then((res) => res.json())
			.then((data) => {
				data.data.regional.map((each) => {
					if (each.state.toUpperCase() === "INDIA")
						this.setState({
							hospitals: each.totalHospitals,
							beds: each.totalBeds,
						});
				});
			});
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps == this.props) return;
		fetch("https://api.rootnet.in/covid19-in/hospitals/beds")
			.then((res) => res.json())
			.then((data) => {
				let stateName = this.props.data
					? this.props.data.state.toUpperCase()
					: "INDIA";
				let found = false;
				data.data.regional.map((each) => {
					if (each.state.toUpperCase() === stateName) {
						found = true;
						this.setState({
							hospitals: each.totalHospitals,
							beds: each.totalBeds,
						});
					}
				});
				if (!found) this.setState({ hospitals: 0, beds: 0 });
			});
	}

	render() {
		return (
			<Jumbotron fluid>
				{/* Prints state name if present, else county */}
				<h2 className="text-center font-weight-bold">
					{this.props.data ? this.props.data.state.toUpperCase() : "INDIA"}
				</h2>
				<hr />
				<Row>
					<Container fluid>
						<Col className="text-center">
							<div style={{ fontSize: "3em" }}>
								{this.props.data ? (
									<CountUp
										preserveValue={true}
										start={0}
										end={Number(this.props.data.active)}
									/>
								) : this.props.allData ? (
									this.props.allData[0].active
								) : (
									0
								)}
							</div>
							<Label>Active</Label>
						</Col>

						<Col className="text-center">
							<div style={{ fontSize: "3em" }}>
								{this.props.data ? (
									<CountUp
										preserveValue={true}
										end={Number(this.props.data.deaths)}
									/>
								) : this.props.allData ? (
									this.props.allData[0].deaths
								) : (
									0
								)}
							</div>
							<Label>Deaths</Label>
						</Col>

						<Col className="text-center">
							<div style={{ fontSize: "3em" }}>
								{this.props.data ? (
									<CountUp
										preserveValue={true}
										end={Number(this.props.data.confirmed)}
									/>
								) : this.props.allData ? (
									this.props.allData[0].confirmed
								) : (
									0
								)}
							</div>
							<Label>Confirmed</Label>
						</Col>

						<Col className="text-center">
							<div style={{ fontSize: "3em" }}>
								{this.props.data ? (
									<CountUp
										preserveValue={true}
										end={Number(this.props.data.recovered)}
									/>
								) : this.props.allData ? (
									this.props.allData[0].recovered
								) : (
									0
								)}
							</div>
							<Label>Recovered</Label>
						</Col>

						<Col className="text-center">
							<div style={{ fontSize: "3em" }}>
								<CountUp
									preserveValue={true}
									end={Number(this.state.hospitals || 0)}
								/>
							</div>
							<Label>Hospitals</Label>
						</Col>

						<Col className="text-center">
							<div style={{ fontSize: "3em" }}>
								<CountUp
									preserveValue={true}
									end={Number(this.state.beds || 0)}
								/>
							</div>
							<Label>Beds</Label>
						</Col>
					</Container>
				</Row>
				<hr />
				<div className="text-center mt-4">
					Scroll down to see graphical stats
				</div>
			</Jumbotron>
		);
	}
}

export default CountryStats;
