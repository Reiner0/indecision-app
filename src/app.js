console.log("App.js is running!");

// var is pre ES6

/*
babel src/playground/es6-let-const.js 
  --out-file=public/scripts/app.js --presets=env,react --watch
*/

let app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: ['One', 'Two']
};
let template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
    <ol>
      <li>Item One</li>
      <li>Item Two</li>
    </ol>
  </div>
);

let user = {
  name: 'Reiner Leal',
  age: 33,
  location: 'Phoenix'
};
function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  }
}
let templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);

let appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
