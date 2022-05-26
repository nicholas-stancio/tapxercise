import Leaderboard from './pages/LeaderBoard';
import ChangePlayer from './pages/changePlayer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/App.css';


function App() {
  // return (
  //   <Leaderboard></Leaderboard>
  // );
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Leaderboard />}>
        </Route>
        <Route path="/change-player" element={<ChangePlayer />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
