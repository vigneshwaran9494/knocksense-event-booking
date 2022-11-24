import './App.css';
import Homepage from './Homepage';
import BookTickets from './BookTickets';
import Checkout from './Checkout';
import Thankyoupage from './Thankyoupage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/:eventId" element={<Homepage />} />
          <Route exact path="/bookTickets" element={<BookTickets />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route exact path="/thankyoupage" element={<Thankyoupage />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;