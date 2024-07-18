import Header from './components/Header';
import Moon from './components/Moon'
import ProgBar from './components/ProgBar';
import TaskCont from './components/TaskCont';
import './App.css';

function App() {
  return (
    <div className='body'>
      <Header />
      <Moon />
      <ProgBar />
      {Array.from({ length: 4 }).map((_, index) =>(
                <TaskCont
                  rep = {index}
                />
      ))}
    </div>
  );
}

export default App;
