// import React from "react"; no longer need this since Babel understands we need React
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
// import Pet from "./Pet";
import SearchParams from "./SearchParams";
import Details from "./Details";

// const App = () => {
//   return React.createElement("div", { id: "my-brand" }, [
//     React.createElement("h1", {}, "Adopt Me!"),
//     React.createElement(Pet, {
//       name: "Buddy Holly",
//       animal: "Snuggle Bug",
//       breed: "Boston Terrier mix",
//     }),
//     React.createElement(Pet, {
//       name: "Mac",
//       animal: "Good boy",
//       breed: "Doberman",
//     }),
//     React.createElement(Pet, {
//       name: "Ren",
//       animal: "Baby boy",
//       breed: "Papillon",
//     }),
//   ]);
// };

//below does the same as above under the hood / when transpiled
const App = () => {
  return (
    <div>
      <Router>
        <header>
          <Link to="/">
            <h1>Adopt Me!</h1>
          </Link>
        </header>
        <Switch>
          <Route path="/details/:id">
            <Details />
          </Route>
          <Route path="/">
            <SearchParams />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
