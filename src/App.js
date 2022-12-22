import './App.css';
import { Contact } from './components/Contact';
import { Herosection } from './components/Hero-section';
import { Mostsellingproducts } from './components/Most-selling-products';
import { Reviewsection } from './components/Review-section';


function App() {
  return (
    <>
    <Herosection/>
    <Mostsellingproducts/>
    <Reviewsection/>
    <Contact/>
    </>
  );
}

export default App;
