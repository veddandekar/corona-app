import React, { Component } from "react";
import { Jumbotron } from "reactstrap";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";
class CompareBar extends Component {
	render() {
		let data = [];
		let {
			dailyconfirmed: dailyconfirmed1,
			dailydeceased: dailydeceased1,
			dailyrecovered: dailyrecovered1,
		} = this.props.data.one;
		let {
			dailyconfirmed: dailyconfirmed2,
			dailydeceased: dailydeceased2,
			dailyrecovered: dailyrecovered2,
		} = this.props.data.two;
		let {
			dailyconfirmed: dailyconfirmed3,
			dailydeceased: dailydeceased3,
			dailyrecovered: dailyrecovered3,
		} = this.props.data.three;
		let {
			dailyconfirmed: dailyconfirmed4,
			dailydeceased: dailydeceased4,
			dailyrecovered: dailyrecovered4,
		} = this.props.data.four;
		let {
			dailyconfirmed: dailyconfirmed5,
			dailydeceased: dailydeceased5,
			dailyrecovered: dailyrecovered5,
		} = this.props.data.five;
		data.push({
			name: "deaths",
			[this.props.data.one.date]: dailydeceased1,
			[this.props.data.two.date]: dailydeceased2,
			[this.props.data.three.date]: dailydeceased3,
			[this.props.data.four.date]: dailydeceased4,
			[this.props.data.five.date]: dailydeceased5,
		});
		data.push({
			name: "confirmed",
			[this.props.data.one.date]: dailyconfirmed1,
			[this.props.data.two.date]: dailyconfirmed2,
			[this.props.data.three.date]: dailyconfirmed3,
			[this.props.data.four.date]: dailyconfirmed4,
			[this.props.data.five.date]: dailyconfirmed5,
		});
		data.push({
			name: "recovered",
			[this.props.data.one.date]: dailyrecovered1,
			[this.props.data.two.date]: dailyrecovered2,
			[this.props.data.three.date]: dailyrecovered3,
			[this.props.data.four.date]: dailyrecovered4,
			[this.props.data.five.date]: dailyrecovered5,
		});

		return (
			<Jumbotron fluid>
				<h6 className="text-center mb-4 font-weight-bold">
					Compare last 5 days stats for India
				</h6>
				<hr />
				<ResponsiveContainer width="95%" aspect={4.0 / 3.0}>
					<BarChart data={data}>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Bar dataKey={this.props.data.one.date} fill="#8884d8" />
						<Bar dataKey={this.props.data.two.date} fill="#82ca9d" />
						<Bar dataKey={this.props.data.three.date} fill="#DC5355" />
						<Bar dataKey={this.props.data.four.date} fill="#F0CB69" />
						<Bar dataKey={this.props.data.five.date} fill="#6D53DC" />
					</BarChart>
				</ResponsiveContainer>
			</Jumbotron>
		);
	}
}

export default CompareBar;
