import './App.css';
import logo from './static/images/parker-surveys-logo.png';
import esah from './static/images/ps-esah.jpg';
import topo from './static/images/topo-survey.jpg';
import certificate from './static/images/certificate.jpg';
import scan from './static/images/scan.jpg';

import { ContactUs } from './ContactUs'
import { About } from './About'
import { Projects } from './Projects'

import { Header } from './components/Header';
import { Footer } from './components/Footer';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    <div>
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
              <a className="navbar-brand" href="/">
                <img src={logo} height="65" alt="logo" />
              </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <Link className="nav-link" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/projects">Projects</Link>
                  </li>
                  
                  <li className="nav-item">
                    <Link className="nav-link" to="/contactUs">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/contactUs">
              <ContactUs />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>

      </Router>
    </div>
  );
}

function Home() {
  return (
    <div className="bg-light">
      <Header text="Land surveying firm South Africa"/>
      <div className="about-us container d-flex align-items-center">
        <div className="row">
          <div className="col-lg-6 mb-4 ">
            <img src={esah} height="280px" alt="esah" />
          </div>
    
          <div className="text-lg-left col-lg-6">
            <h6>OUR LEGACY</h6><h2>Producing high quality surveys<br /></h2><div className="about-since">Since 2002</div>
            <p><strong>Parker Surveys</strong> was started in 2002 and has been a leading force in the Land surveying industry ever since. From large SANRAL contracts to individual home surveys, we provide high quality surveying services for both large orginizations and individuals. <br/> We strive for the highest quality and will not rest until you deliver the quality demanded from us.</p><a className="btn-about" href="/about">More Details</a>
          </div>
        </div>
      </div>


      <div className="our-services py-5 px-2">
        <div className="m-auto text-center">
          <div className="section-title">
            <h6>OUR SERVICES</h6>
            <h2>We provide a variety of services, such as:</h2>
          </div>
        </div>
        <div className="container row justify-content-around m-auto">
          <div className="card text-dark col-sm-3 col-8 p-0 m-2" >
            <img className="card-img-top" src={topo} alt="Card cap" />
            <div className="card-body">
              <p className="card-text"><strong>Topographical surveys</strong></p>
            </div>
          </div>
          <div className="card text-dark col-sm-3 col-8 p-0 m-2 " >
            <img className="card-img-top" src={certificate} alt="Card cap" />
            <div className="card-body">
              <p className="card-text"><strong>Surveying certificates</strong></p>
            </div>
          </div>
          <div className="card text-dark col-sm-3 col-8 p-0 m-2" >
            <img className="card-img-top" src={scan} alt="Card cap" />
            <div className="card-body">
              <p className="card-text"><strong>High quality scans</strong></p>
            </div>
          </div>
        </div>
      </div>

      <div className="our-team d-flex text-light row m-0">
        <div className="text-left col-lg-4 mr-5">
          <h6>OUR TEAM</h6>
          <h2>Meet the owners</h2>
          <br />
          <p><b>Esah Parker</b> is the founder of Parker Surveys in 2002 and is a highly experienced surveyor with experience working for private companies as well as Surveys and Mapping. 
            <br/><br/>
            <b>Cassiem Parker</b> joined Parker surveys in 2008, having previously worked as a professional mechanical engineer. He brings a great deal of technical expertise <br/>
          </p>
        </div>
        
        <div className=" row justify-content-around col-sm-6 col-12 ">
          <div className="card text-dark  col-sm-3 col-8 p-0 m-2  " >
            <img className="card-img-top portrait-card" src="https://image.shutterstock.com/image-photo/close-portrait-young-smiling-handsome-260nw-1180874596.jpg" alt="Card cap" />
            <div className="card-body">
              <p className="card-text"><strong>Esah Parker</strong><br /> Owner</p>
            </div>
          </div>
          <div className="card text-dark  col-sm-3 col-8 p-0 m-2 portrait-card"   >
            <img className="card-img-top  portrait-card" src="https://image.shutterstock.com/image-photo/close-young-handsome-man-beard-260nw-1918610528.jpg"  alt="Card cap" />
            <div className="card-body">
              <p className="card-text"><strong>Cassiem Parker</strong><br />Owner</p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
