import Navbar from './components/Navbar/Navbar';
import CreateNote from './pages/CreateNote/CreateNote';
import EditNote from './pages/EditNote/EditNote';
import Notes from './pages/Notes/Notes';
import "./app.scss"
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className={`app-container`}>
        <Navbar />
        <div className={`app-wrapper`}>
          <Route path="/" exact component={Notes} />
          <Route path="/create" component={CreateNote} />
          <Route path="/edit/:id" component={EditNote} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
