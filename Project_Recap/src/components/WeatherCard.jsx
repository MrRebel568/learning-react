import React from "react";
import {
  Search,
  MapPin,
  Droplets,
  Wind,
  Thermometer,
  Eye,
  Sun,
} from "lucide-react";

const WeatherCard = ({
  register,
  handleSubmit,
  searchWeather,
  errors,
  weather,
}) => {
  return (
    <div className="mx-auto w-full max-w-3xl">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Weather</h1>
        <p className="text-sm text-gray-500">
          Search any city to see the weather
        </p>
      </div>

      {/* Search */}
      <div className="mb-6 rounded-2xl bg-white p-4 shadow-sm">
        <form
          onSubmit={handleSubmit(searchWeather)}
          className="flex flex-col gap-3 sm:flex-row"
        >
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <input
              {...register("city", {
                required: "City name is required",
              })}
              type="text"
              placeholder="Enter city name..."
              className="w-full rounded-lg border border-gray-300 py-2.5 pl-10 pr-4 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.city && (
              <p className="mt-1.5 text-xs font-medium text-red-600">
                {errors.city.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            <Search className="h-5 w-5" />
            Search
          </button>
        </form>
      </div>

      {/* Main Weather Card */}
      <div className="mb-6 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-500 p-6 text-white shadow-sm sm:p-8">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-1.5 text-blue-100">
              <MapPin className="h-4 w-4" />
              <p className="text-sm font-medium">
                {weather
                  ? `${weather.name} ${weather.sys.country}`
                  : "City, Country"}
              </p>
            </div>
            <p className="mt-1 text-xs text-blue-100">Tuesday, 24 November</p>
          </div>
          <Sun className="h-14 w-14 text-yellow-300 sm:h-16 sm:w-16" />
        </div>

        <div className="mt-6 flex items-end gap-2">
          <p className="text-6xl font-bold tracking-tight sm:text-7xl">
            {weather ? `${Math.round(weather.main.temp)}` : "--°"}
          </p>
          <p className="mb-2 text-lg font-medium text-blue-100">C</p>
        </div>
        <p className="mt-1 text-base font-medium text-blue-50">
          {weather ? `${weather.weather[0].description}` : "Weather condition"}
        </p>
      </div>

      {/* Details Grid */}
      {/* <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <div className="rounded-2xl bg-white p-4 shadow-sm">
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
            <Thermometer className="h-5 w-5" />
          </div>
          <p className="text-xs text-gray-500">Feels like</p>
          <p className="text-lg font-bold text-gray-800">
            {weather ? `${Math.round(weather.main.feels_like)}°C` : "--°C"}
          </p>
        </div>

        <div className="rounded-2xl bg-white p-4 shadow-sm">
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
            <Droplets className="h-5 w-5" />
          </div>
          <p className="text-xs text-gray-500">Humidity</p>
          <p className="text-lg font-bold text-gray-800">
            {weather ? `${weather.main.humidity}%` : "--%"}
          </p>
        </div>

        <div className="rounded-2xl bg-white p-4 shadow-sm">
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
            <Wind className="h-5 w-5" />
          </div>
          <p className="text-xs text-gray-500">Wind speed</p>
          <p className="text-lg font-bold text-gray-800">
            {weather
              ? `${Math.round(weather.wind.speed * 3.6)} km/h`
              : "-- km/h"}
          </p>
        </div>

        <div className="rounded-2xl bg-white p-4 shadow-sm">
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
            <Eye className="h-5 w-5" />
          </div>
          <p className="text-xs text-gray-500">Visibility</p>
          <p className="text-lg font-bold text-gray-800">
            {weather
              ? `${(weather.visibility / 1000).toFixed(1)} km`
              : "-- km"}
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default WeatherCard;
