import React from 'react'; 
import './styles/index.scss';
import Header from './components/layout/Header/Header.jsx';
import Main from './components/layout/Main/Main';
import Footer from './components/layout/Footer/Footer';

function App() {
  return (
    <div className="page-wrapper">
        <div className="app">
          <React.Fragment>
            <Header />
            <Main />
            <Footer />
          </React.Fragment>
        </div>
    </div>
  );
}

export default App;