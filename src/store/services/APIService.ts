import axios from "axios";

interface TypeResponse {
  weather: any;
}

export async function fetchWeather(city: string): Promise<TypeResponse> {
  return await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=871e5e40bdcc1860b997404cc7ca1042`
  );
}
