import React from "react";
import BootNavbar from "./components/navbar";
import Stats from "./components/stats";
import Prevention from "./components/prevention";
import Hotline from "./components/hotline";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
	render() {
		return (
			<>
				<Router>
					<BootNavbar />
					<Switch>
						<Route path="/" exact>
							<Stats />
						</Route>
						<Route path="/prevention" exact>
							<Prevention />
						</Route>
						<Route path="/hotline" exact>
							<Hotline />
						</Route>
					</Switch>
				</Router>
			</>
		);
	}
}

export default App;
