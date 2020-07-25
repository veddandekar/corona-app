import React from "react";
import CountryStats from "./countryStats";
import StatesPie from "./statesPie";
import CompareBar from "./compareBar";
import Footer from "./footer";
import { Container, Row, Col } from "reactstrap";

class Stats extends React.Component {
	constructor() {
		super();
		this.state = {};
		this.pieData = [];
		this.sortedStateNames = [];
	}

	componentWillMount = () => {
		// Fetch data from API
		fetch("https://api.covid19india.org/data.json")
			.then((res) => res.json())
			.then((res) => {
				// Extract state name, confirmed, active and deaths for State Pie charts
				res.statewise.forEach((ele, i) => {
					if (!i) return;
					let { state, confirmed, active, deaths } = ele;
					let info = {
						name: state,
						deaths: Number(deaths),
						confirmed: Number(confirmed),
						active: Number(active),
					};
					this.pieData.push(info);
					if (state !== "Total") this.sortedStateNames.push(state);
				});
				this.sortedStateNames.sort();
				this.setState({
					allStateStats: res.statewise, // Used to extract state specific data

					barData: {
						// Used to display last 5 days data in bar chart
						one: res.cases_time_series[res.cases_time_series.length - 1],
						two: res.cases_time_series[res.cases_time_series.length - 2],
						three: res.cases_time_series[res.cases_time_series.length - 3],
						four: res.cases_time_series[res.cases_time_series.length - 4],
						five: res.cases_time_series[res.cases_time_series.length - 5],
					},
				});
			});
	};
	//Compares user input to fetched data
	updateCountry = (e) => {
		let val = e.target.value.toLowerCase();
		this.state.allStateStats.forEach((ele) => {
			if (ele.state.toLowerCase() === val) {
				// If input state present in data, updates info
				this.setState({
					searchedStateStats: ele,
				});
			}
		});
	};

	render() {
		return (
			<Container>
				<br />
				<br />
				<Row className="text-center justify-content-center">
					<Col md={8}>
						<label style={{ color: "white" }} className="mr-4">
							Select a state
						</label>
						<select value={this.state.value} onChange={this.updateCountry}>
							<option value="none" selected disabled hidden>
								State/UT
							</option>
							<option value="total">INDIA</option>
							{this.sortedStateNames.map((item) => (
								<option key={item} value={item}>
									{" "}
									{item}{" "}
								</option>
							))}
						</select>
					</Col>
				</Row>
				<Row className="text-center justify-content-center">
					<Col md={8}>
						<CountryStats
							data={this.state.searchedStateStats}
							allData={this.state.allStateStats}
						/>
					</Col>
				</Row>
				{/* Recharts seems to have a problem with re-rendering, ternary operator used to present the chart from re-rendering too many times */}
				{this.pieData.length > 35 ? (
					<Row>
						<Col xs={12} md={6} lg={4}>
							<StatesPie data={this.pieData} keyField="active" />
						</Col>
						<Col xs={12} md={6} lg={4}>
							<StatesPie data={this.pieData} keyField="deaths" />
						</Col>
						<Col xs={12} md={6} lg={4}>
							<StatesPie data={this.pieData} keyField="confirmed" />
						</Col>
						<Col xs={12} md={6} lg={4}>
							<CompareBar data={this.state.barData} />
						</Col>
					</Row>
				) : (
					" "
				)}
				<Footer />
			</Container>
		);
	}
}

export default Stats;
