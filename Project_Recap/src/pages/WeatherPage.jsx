import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import WeatherCard from "../components/WeatherCard";

const WeatherPage = () => {
  const API_KEY = "72ffdd8c80c19b46daa6223c1ea4cd90";
  const [weather, setWeather] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const getWeatherData = async (city) => {
    try {
      const res = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather",
        {
          params: {
            q: city,
            appid: API_KEY,
            units: "metric",
          },
        },
      );

      setWeather(res.data);
    } catch (error) {
      console.log("weather api error:", error);
    }
  };

  useEffect(() => {
    getWeatherData("Delhi");
  }, []);

  const searchWeather = (data) => {
    getWeatherData(data.city);
    reset();
  };

  return (
    <WeatherCard
      register={register}
      handleSubmit={handleSubmit}
      errors={errors}
      searchWeather={searchWeather}
      weather={weather}
    />
  );
};

export default WeatherPage;
