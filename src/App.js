// import React from "react"; no longer need this since Babel understands we need React
import ReactDOM from "react-dom";
// import Pet from "./Pet";
import SearchParams from "./SearchParams";

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
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
