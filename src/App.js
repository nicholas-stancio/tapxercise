import Leaderboard from './pages/LeaderBoard';
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
          {/* <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} /> */}
          {/* Reroute semua ke leaderboard */}
          <Route path="*" element={<Leaderboard />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
