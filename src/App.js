import logo from './logo.svg';
import './App.css';



import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Header/Dialogs/Dialogs';
import { Route, BrowserRouter } from 'react-router-dom';



const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                {/* <Profile/> */}
                <div className='app-wrapper-content'>
                    <Route path="/dialogs" component={Dialogs}/>
                    <Route path="/profile" component={Profile}/>                
                </div>
            </div>
        </BrowserRouter>
    );
}





export default App;
