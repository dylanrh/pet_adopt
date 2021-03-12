// import React from "react"; no longer need this since Babel understands we need React
import { StrictMode, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
// import Pet from "./Pet";
import SearchParams from "./SearchParams";
import Details from "./Details";
import ThemeContext from "./ThemeContext";

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
  const theme = useState("darkblue");

  return (
    <ThemeContext.Provider value={theme}>
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
    </ThemeContext.Provider>
  );
};

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
