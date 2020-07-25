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
						<Route path="/corona-app/" exact>
							<Stats />
						</Route>
						<Route path="/corona-app/prevention" exact>
							<Prevention />
						</Route>
						<Route path="/corona-app/hotline" exact>
							<Hotline />
						</Route>
					</Switch>
				</Router>
			</>
		);
	}
}

export default App;
