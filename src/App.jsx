import Counter from './components/Counter';
import Empl from './components/Employee';
import Footer from './components/Footer';
import Header from './components/Header';
import Akash from './components/Welcome';

function App() {

  return (
    <div>
      <Header/>
      <Akash/>
      <Empl empName="Akash" basicSalary={3000000}/>
      <Counter/>
      <Footer/>
    </div>
  );

}

export default App;