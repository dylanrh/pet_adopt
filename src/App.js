/* global React */

const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("h3", {}, props.animal),
    React.createElement("h3", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", { id: "my-brand" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Buddy Holly",
      animal: "Snuggle Bug",
      breed: "Boston Terrier mix",
    }),
    React.createElement(Pet, {
      name: "Mac",
      animal: "Good boy",
      breed: "Doberman",
    }),
    React.createElement(Pet, {
      name: "Ren",
      animal: "Baby boy",
      breed: "Papillon",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
