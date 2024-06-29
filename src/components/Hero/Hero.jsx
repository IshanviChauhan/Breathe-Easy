import axios from "axios";
import { useState } from "react";
import './hero.css';
import treesData from "./treesAndPollutant.json";

const UNSPLASH_ACCESS_KEY = "VO7EZkLXdRKwVgNX2cYbTqMHMEaBPztYzIVWDKUWMpw";

const Hero = () => {
    const [aqiData, setAqiData] = useState(null);
    const [city, setCity] = useState("");
    const [error, setError] = useState("");
    const [treeImages, setTreeImages] = useState({});
    const [showAllTrees, setShowAllTrees] = useState(false);
    const [allPollutantsSafe, setAllPollutantsSafe] = useState(true);

    const pollutantThresholds = {
        co: 35,
        no2: 53,
        o3: 70,
        pm10: 150,
        pm25: 35,
        so2: 75
    };

    const pollutantNames = {
        co: 'CO (Carbon Monoxide)',
        no2: 'NO2 (Nitrogen Dioxide)',
        o3: 'O3 (Ozone)',
        pm10: 'PM10 (Particulate Matter 10)',
        pm25: 'PM2.5 (Particulate Matter 2.5)',
        so2: 'SO2 (Sulfur Dioxide)'
    };

    const fetchData = async (city) => {
        try {
            const response = await fetch(`https://api.waqi.info/feed/${city}/?token=0b493c657f141d9301261960c8b4a2a2a5490fbf`);
            if (!response.ok) {
                throw new Error("City not found");
            }
            const json = await response.json();
            if (json.status === "error") {
                throw new Error(json.data);
            }
            setAqiData(json);
            setError("");
            checkPollutantSafety(json);
        } catch (error) {
            setError(error.message);
            setAqiData(null);
            setAllPollutantsSafe(true);
        }
    }

    const checkPollutantSafety = (data) => {
        const pollutants = ['co', 'no2', 'o3', 'pm10', 'pm25', 'so2'];
        for (let pollutant of pollutants) {
            if (data.data.iaqi[pollutant] && data.data.iaqi[pollutant].v > pollutantThresholds[pollutant]) {
                setAllPollutantsSafe(false);
                return;
            }
        }
        setAllPollutantsSafe(true);
    }

    const fetchTreeImage = async (treeName) => {
        try {
            const response = await axios.get("https://api.unsplash.com/search/photos", {
                params: {
                    query: treeName,
                    client_id: UNSPLASH_ACCESS_KEY,
                    per_page: 1
                }
            });
            if (response.data.results.length > 0) {
                return response.data.results[0].urls.small;
            } else {
                return null;
            }
        } catch (error) {
            console.error(`Error fetching image for ${treeName}: `, error);
            return null;
        }
    }

    const handleSearch = () => {
        if (city) {
            fetchData(city);
        }
    }

    const renderTrees = (pollutant, value) => {
        if (value > pollutantThresholds[pollutant]) {
            const trees = treesData[pollutant].trees;
            const treesToShow = showAllTrees ? trees : trees.slice(0, 2);
            return (
                <div>
                    <h2>The Major Pollutant is {pollutantNames[pollutant]}</h2>
                    <h3>For Removal of {pollutantNames[pollutant]}, Plant these</h3>
                    <ul>
                        {treesToShow.map((tree, index) => (
                            <li key={index}>
                                {tree}
                                {treeImages[tree] ? (
                                    <img src={treeImages[tree]} alt={tree} width="100" height="100" />
                                ) : (
                                    <button className="load-image-button" onClick={() => fetchAndSetTreeImage(tree)}>Load Image</button>
                                )}
                            </li>
                        ))}
                    </ul>
                    {!showAllTrees && (
                        <button onClick={() => setShowAllTrees(true)}>Load More Trees</button>
                    )}
                </div>
            );
        }
        return null;
    }

    const fetchAndSetTreeImage = async (treeName) => {
        const imageUrl = await fetchTreeImage(treeName);
        setTreeImages(prevImages => ({
            ...prevImages,
            [treeName]: imageUrl
        }));
    }

    return (
        <div className="BreatheSearch">
            <input
                type="text"
                placeholder="Search your city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {aqiData && (
                <>
                    <h2>The AQI of {city} is {aqiData.data.aqi}</h2>
                    <h2 className="">The trees needed to be planted are:</h2>
                    {aqiData.data.iaqi.co && renderTrees("co", aqiData.data.iaqi.co.v)}
                    {aqiData.data.iaqi.no2 && renderTrees("no2", aqiData.data.iaqi.no2.v)}
                    {aqiData.data.iaqi.o3 && renderTrees("o3", aqiData.data.iaqi.o3.v)}
                    {aqiData.data.iaqi.pm10 && renderTrees("pm10", aqiData.data.iaqi.pm10.v)}
                    {aqiData.data.iaqi.pm25 && renderTrees("pm25", aqiData.data.iaqi.pm25.v)}
                    {aqiData.data.iaqi.so2 && renderTrees("so2", aqiData.data.iaqi.so2.v)}
                    {allPollutantsSafe && (
                        <h2>Your air is safe but keep planting trees</h2>
                    )}
                </>
            )}
        </div>
    );
}

export default Hero;
