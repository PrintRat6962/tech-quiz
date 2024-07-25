import React from "react"
import Header from './components/Header';
import Moon from './components/Moon'
import ProgBar from './components/ProgBar';
import TaskCont from './components/TaskCont';
import Footer from "./components/footer";
import './App.css';

function App() {
  const [completeCount, setCompleteCount] = React.useState(0);

  return (
    <div className='body'>
      <Header />
      <Moon />
      <ProgBar completeCount = {completeCount}/>
      <TaskCont setCompleteCount = {setCompleteCount}/>
      <Footer/>
    </div>
  );
}

export default App;