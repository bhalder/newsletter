import logo from './logo.svg';
import './App.css';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Post from './Post';
import Popup from './Popup';

function App() {
  return (
    <div className="App">
	<Popup />
	<Post />
    </div>
  );
}

export default App;
