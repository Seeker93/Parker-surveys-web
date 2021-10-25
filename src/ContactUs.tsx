import { GoogleMap, LoadScript } from '@react-google-maps/api'
import { BsFillTelephoneFill } from 'react-icons/bs';

import { MdEmail } from 'react-icons/md';
import { Marker } from '@react-google-maps/api';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

const containerStyle = {
    width: '300px',
    height: '300px'
};

const center = {
    lat: -33.975272006449245,
    lng: 18.515303710918385,
};

function ContactUs() {

    return (
        <div>
            <Header text="Contact Us" />
            <div className="container mt-4">

                <div className="d-flex flex-row justify-content-between mt-5 mb-5">

                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title">Contact Us </h3>
                            <p className="card-text">179 Belgravia Road <br />
                                Athlone <br />
                                Cape Town<br />
                                7780 <br />
                                <BsFillTelephoneFill className="mr-3" />021 691 3339 <br />
                                <MdEmail className="mr-3" />info@parkersurveys.co.za</p>
                        </div>
                    </div>
                    <LoadScript
                        googleMapsApiKey=""
                    >
                        <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={center}
                            zoom={16}
                        >
                            <Marker
                                position={center}
                            />
                            <></>
                        </GoogleMap>
                    </LoadScript>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export { ContactUs };