import React, { Component } from "react";
import { Jumbotron } from "reactstrap";
import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";
class StatesPie extends Component {
  render() {
    let data = JSON.parse(JSON.stringify(this.props.data));
    data.sort((a, b) =>
      a[this.props.keyField] > b[this.props.keyField] ? -1 : 1
    );
    data[0].fill = "#DC5355";
    data[1].fill = "#F0CB69";
    data[2].fill = "#6D53DC";
    data[3].fill = "#AB91C5";
    data[4].fill = "#8EC3A7";
    return (
      <Jumbotron fluid>
        <h6 className="text-center mb-4 font-weight-bold">
          State wise number of {this.props.keyField} cases
        </h6>
        <hr />
        <ResponsiveContainer width="95%" aspect={4.0 / 3.0}>
          <PieChart>
            <Pie
              dataKey={this.props.keyField}
              isAnimationActive={false}
              data={data}
              fill="#ABB8F0"
              label
            />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </Jumbotron>
    );
  }
}

export default StatesPie;
