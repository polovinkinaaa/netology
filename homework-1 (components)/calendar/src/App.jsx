import "./App.css";
import Calendar from "./components/Calendar/Calendar.jsx";
import moment from "moment/min/moment-with-locales";
moment.locale("ru");

function App() {
  //const now = moment('2017-03-08'); ��� � �������
  const now = moment(new Date());
  return <Calendar date={now} />;
}

export default App;
