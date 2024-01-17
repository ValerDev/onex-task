import s from './App.module.scss';
import { Dashboard } from './components/Dashboard/Dashboard';
import { SideBar } from './components/SideBar/SideBar';
function App() {
  return (
    <div className={s.app}>
      <SideBar />
      <Dashboard />
    </div>
  );
}

export default App;
