const Pet = () => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, "Buddy Holly"),
    React.createElement("h3", {}, "Snuggle bug"),
    React.createElement("h3", {}, "Boston Terrier Mix"),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet),
    React.createElement(Pet),
    React.createElement(Pet),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
