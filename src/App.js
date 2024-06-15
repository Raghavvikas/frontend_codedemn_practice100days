import logo from './logo.svg';
import './App.css';
import Accordion from './tests/CustomAccordion/Accordion';
import WobbleCards from './tests/WobbleGallery/WobbleCards';
import TableData from './tests/TableDataWithPagination/TableData';
import FormValidation from './tests/formValidation/FormValidation';
import NetworkInfo from './tests/NetworkInfoAPI/NetworkInfo';
function App() {
  return (
    <div className="App">
      <NetworkInfo />
    </div>
  );
}

export default App;
