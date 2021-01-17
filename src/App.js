import './App.css';

function App() {
  let date = new Date();
  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  return (
    <div className="App">
      Aktuell: {date.getHours()}:{date.getMinutes()} {days[date.getDay()]}  {date.getDate()}. {months[date.getMonth() + 1]} {date.getFullYear()}
    </div>
  );
}

export default App;
