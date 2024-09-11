import './styles/Header.scss';
import './styles/Title.scss';
import './styles/Menu.scss';
import Header from './components/Header';
import Carousel from './components/Carousel';
import Title from './components/Title';
import Menu from './components/Menu';

function App() {
  return (
    <div>
      <header>
        <Header/>
      </header>
      <body>
        <Carousel/>
        <Title/>
        <Menu/>
      </body>
    </div>
  );
}

export default App;
