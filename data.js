/**
 * 우리가 받은 날씨정보 객체에서
 * {
 *   weather: {
 *     main: '' // 이 값
 *   }
 * }
 * weather.main 에서 나올 수 있는 값들을 아래 객체의 key로 두었습니다.
 *
 * 나올 수 있는 값들에 대한 정보는 아래 link에서 확인하실 수 있습니다.
 * https://openweathermap.org/weather-conditions
 */
const imgLinks = {
  Clear: "sun.png",
  Rain: "rain.png",
  Drizzle: "rain.png",
  Snow: "snowing.png",
  Clouds: "cloudy.png",
  Haze: "haze.png",
  Mist: "haze.png",
  Fog: "haze.png",
  Thunderstorm: "storm.png",
  Smoke: "smoke.png",
  Ash: "smoke.png",
  Dust: "smoke.png"
};
const colorLinks = {
  Clear: ["#64b3f4", "#c2e59c"],
  Rain: ["#1f6298", "#8de0be"],
  Drizzle: ["#64b3f4", "#c2e59c"],
  Snow: ["#64b3f4", "#c2e59c"],
  Clouds: ["#64b3f4", "#c2e59c"],
  Haze: ["#7388b9", "#c2e59c"],
  Mist: ["#7388b9", "#b4bfba"],
  Fog: ["#7388b9", "#b4bfba"],
  Thunderstorm: ["#475b8a", "#272928"],
  Smoke: ["#568894", "#9a9a9a"],
  Ash: ["#525252", "#c2e59c"],
  Dust: ["#9e8e5a", "#8d9a86"],
};