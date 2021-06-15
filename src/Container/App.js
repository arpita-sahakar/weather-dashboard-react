import "./App.css";
import Display5DaysForecast from "../components/Display5DaysForecast";
import DisplayCitiesName from "../components/DisplayCitiesName";
import DisplayCityForcast from "../components/DisplayCityForcast";
import SearchBar from "../components/SearchBar";
import SearchBtn from "../components/SearchBtn";


function App() {
  return (
    <div className="App">
      <SearchBar/>
      <SearchBtn/>
      <DisplayCitiesName/>
      <DisplayCityForcast/>
      <Display5DaysForecast/>
    </div>
  );
}

export default App;
