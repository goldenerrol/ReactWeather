var React = require('react');

// var About = React.createClass({
//   render: function () {
//     return (
//       <h3>About Component</h3>
//     );
//   }
// });

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>This is a weather application built on React. I have built this
        for The Complete React App Developer Course.
      </p>
      <p>
        Here are some of the toold I used:
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - This was the
            JavaScript framework used.
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - Open Weather
            Map was used to search for weather data by city name.
        </li>
        <li>
          <a href="https://github.com/goldenerrol/ReactWeather">React Weather on GitHub</a> - See my code on GitHub
        </li>
      </ul>
    </div>
  )
};

module.exports = About;
