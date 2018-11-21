import React, {Component} from 'react';
import Header from './components/Header'
import WrapperInner from './components/WrapperInner'
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="wrapper container">
                <Header />
                <WrapperInner />
            </div>
        );
    }
}

export default App;
