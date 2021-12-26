import "./styles.css";
import Todo from "./todo";
import Header from './header'
import Footer from "./footer";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <div className="container">
      <Header />
      <Todo />
      <Footer/>
    </div>
  );
}

