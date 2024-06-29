import "./content.css";

const Content = () => {
  return (
    <div>
      <div className="content">
        <h1>Welcome to Breathe Easy - Your Air Quality Companion!</h1>
        <p>
          Breathe Easy is your go-to app for monitoring air quality, making a
          positive impact through tree planting, and expanding your knowledge on
          environment health. With interactive features and engaging content, we
          empower you to control the air you breathe in. By leveraging advanced
          algorithms and real-time data, Breathe Easy offers precise
          recommendations tailored to your location. Whether you’re a city
          planner, an environmental activist, or a concerned citizen, Breathe
          Easy empowers you to make a tangible difference. Join us in creating a
          healthier world, one breathe at a time.
        </p>
        <a href="#">
          <button>Learn More</button>
        </a>
      </div>
      <div className="aqi" id="aqi">
        <h1>About Air Quality Levels</h1>
        <table>
            <tr>
                <th className="column1">AQI</th>
                <th className="column2">Air Pollution Level</th>
                <th className="column3">Health Implications</th>
                <th className="column4">Cautionary Statement (for PM2.5)</th>
            </tr>
            <tr>
                <td className="column1">0-50</td>
                <td className="column2">Good</td>
                <td>Air quality is considered satisfactory, and air pollution poses little or no risk</td>
                <td>None</td>
            </tr>
            <tr>
                <td className="column1">51-100</td>
                <td className="column2">Moderate</td>
                <td>Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.</td>
                <td>Active children and adults, and people with respiratory disease, such as asthma, should limit prolonged outdoor exertion.</td>
            </tr>
            <tr>
                <td className="column1">101-150</td>
                <td className="column2">Unhealthy for Sensitive Groups</td>
                <td>Members of sensitive groups may experience health effects. The general public is not likely to be affected.</td>
                <td>Active children and adults, and people with respiratory disease, such as asthma, should limit prolonged outdoor exertion.</td>
            </tr>
            <tr>
                <td className="column1">151-200</td>
                <td className="column2">Unhealthy</td>
                <td>Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects</td>
                <td>Active children and adults, and people with respiratory disease, such as asthma, should avoid prolonged outdoor exertion; everyone else, especially children, should limit prolonged outdoor exertion</td>
            </tr>
            <tr>
                <td className="column1">201-300</td>
                <td className="column2">Very Unhealthy</td>
                <td>Health warnings of emergency conditions. The entire population is more likely to be affected.</td>
                <td>Active children and adults, and people with respiratory disease, such as asthma, should avoid all outdoor exertion; everyone else, especially children, should limit outdoor exertion.</td>
            </tr>
            <tr>
                <td className="column1">300+</td>
                <td className="column2">Hazardous</td>
                <td>Health alert: everyone may experience more serious health effects</td>
                <td>Everyone should avoid all outdoor exertion</td>
            </tr>
        </table>
      </div>
    </div>
  );
};

export default Content;
