
import { Header } from './components/Header';
import { Footer } from './components/Footer'

function Projects() {
    return (
        <div className="bg-light">
            <Header text="Past Projects" />

            <div className="about-us container align-items-center">
                <h5>Century City Business Park</h5>
                <div className="row mt-4">
                    <div className="col-lg-6">
                        <img src="https://www.rabie.co.za/wp-content/uploads/2013/09/Century_City_Business_Centre1.jpg" height="280px" alt="esah" />
                    </div>
                    <div className="text-lg-left col-lg-6">
                        <p><strong>Century City Business Park</strong> was started in 2002 and has been a leading force in the Land surveying industry ever since. From large SANRAL contracts to individual home surveys, we provide high quality surveying services for both large orginizations and individuals.</p>
                        <p>We strive for the highest quality and are knowledgable in both traditional survey methods, and the latest surveying technologies. We do whatever is best suited for the job at hand. </p>
                        <p>We have a strong track record of projects ranging from very large national contracts to personal property surveys. Give us a call and we will be glad to help you.</p>
                    </div>
                </div>
            </div>

            <div className="about-us container align-items-center">
                <h5>Klipfontein corridor </h5>
                <div className="row mt-4">
                    <div className="col-lg-6">
                        <img src="https://image-prod.iol.co.za/16x9/410?source=https://xlibris.public.prod.oc.inl.infomaker.io:8443/opencontent/objects/6483e4b0-a464-515e-b853-439ae7efaf5c" height="280px" alt="esah" />
                    </div>
                    <div className="text-lg-left col-lg-6">
                        <p>The <strong>Klipfontein corridor</strong> was started in 2002 and has been a leading force in the Land surveying industry ever since. From large SANRAL contracts to individual home surveys, we provide high quality surveying services for both large orginizations and individuals.</p>
                        <p>We strive for the highest quality and are knowledgable in both traditional survey methods, and the latest surveying technologies. We do whatever is best suited for the job at hand. </p>
                        <p>We have a strong track record of projects ranging from very large national contracts to personal property surveys. Give us a call and we will be glad to help you.</p>
                    </div>
                </div>


            </div>
            <div className="about-us container align-items-center">
                <h5>Huguenot tunnel </h5>
                <div className="row mt-4">
                    <div className="col-lg-6">
                        <img src="https://pbs.twimg.com/media/D_BEkYcXsAAdYvc.jpg" height="280px" alt="esah" />
                    </div>
                    <div className="text-lg-left col-lg-6">
                        <p>the <strong>Huguenot tunnel</strong> was started in 2002 and has been a leading force in the Land surveying industry ever since. From large SANRAL contracts to individual home surveys, we provide high quality surveying services for both large orginizations and individuals.</p>
                        <p>We strive for the highest quality and are knowledgable in both traditional survey methods, and the latest surveying technologies. We do whatever is best suited for the job at hand. </p>
                        <p>We have a strong track record of projects ranging from very large national contracts to personal property surveys. Give us a call and we will be glad to help you.</p>
                    </div>
                </div>
            </div>



            <Footer />
        </div>
    )

}
export { Projects };