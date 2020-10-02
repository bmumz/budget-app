console.log("App.js is running!");

const app = {
  title: "Indecision App",
  headline: "Making decisions so you don't have to!",
  options: [],
};

const onFormSubmit = (event) => {
  event.preventDefault();

  const option = event.target.elements.option.value;

  if (option) {
    app.options.push(option);
    event.target.elements.option.value = "";
    renderOptionsArray();
  }
};

const onRemoveOptions = () => {
  app.options = [];
  renderOptionsArray();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};

// JSX - JavaScript XML

const appRoot = document.getElementById("app");

const renderOptionsArray = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.headline && <p>{app.headline}</p>}
      <p>{app.options.length > 0 ? "Here are your options" : "No Options"}</p>

      <button disabled={app.options.length === 0} onClick={onMakeDecision}>
        What should I do?
      </button>
      <button onClick={onRemoveOptions}>Remove All</button>

      <ol>
        {app.options.map((option) => {
          return <li key={option}>Option: {option}</li>;
        })}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

renderOptionsArray();
