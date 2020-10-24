import React from 'react'
import ReactDOM from 'react-dom'
import './root.css'
import Aux from './components/HOC/HOC'
import NavBar from './components/Navbar/Navbar'
import Body from './components/Body/Body'
import Footer from './components/Footer/Footer'



function Root() {
    return (
        <Aux>
            <NavBar />
             <Body />
            <Footer />
        </Aux>   
    );
}

export default Root;
if (document.getElementById('root')) {
    ReactDOM.render(<Root />, document.getElementById('root'));
}
else{
    <h1>Nothing here</h1>
}