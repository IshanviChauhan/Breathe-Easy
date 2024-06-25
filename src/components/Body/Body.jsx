import "./body.css";

const Body= () => {
    return(
        <div>
            <div className="main">
                <h4>Features</h4>
                <h1>Discover Key Features</h1>
                <p>Explore the functionalities that make Breathe Easy your go-to app for air quality monitoring and tree planting initiatives.</p>
                <div className="features-box">
                    <a href="#">
                        <div className="feature">
                            <h3><i className='bx bx-cross'></i>Track Air Quality</h3>
                            <p>Monitor real-time air quality data and pollutant concentrations to stay informed about your surroundings.</p>
                        </div>
                    </a>
                    <a href="#">
                        <div className="feature">
                            <h3><i className='bx bxs-shield-plus'></i>Tree Planting Impact</h3>
                            <p>Visualize the positive impact of planting trees on improving air quality and track the number of trees needed to reach target AQI levels.</p>
                        </div>
                    </a>
                    <a href="#">
                        <div className="feature">
                            <h3><i className='bx bxs-tree'></i>Suitable Tree Selection</h3>
                            <p>Explore a variety of tree species tailored to your local climate and soil conditions to make informed decisions for tree planting initiatives.</p>
                        </div>
                    </a>
                    <a href="#">
                        <div className="feature">
                            <h3><i className='bx bxs-map'></i>Interactive Map</h3>
                            <p>Navigate a 3D topographic map displaying color- coded AQI levels, allowing you to explore detailed air quality information for specific areas.</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Body;