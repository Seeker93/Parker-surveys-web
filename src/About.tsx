
import { Header } from './components/Header';
import { Footer } from './components/Footer'
import totalStation from './static/images/total-station.jpg';

function About() {
    return (
        <div className="bg-light">
            <Header text="About Us" />
            <div className="about-us container d-flex align-items-center  ">
                <div className="row">
                    <div className="col-lg-6 mb-4 ">
                        <img src={totalStation} height="280px" alt="esah" />
                    </div>
                    <div className="text-lg-left col-lg-6">
                        <p><strong>Parker Surveys</strong> was started in 2002 and has been a leading force in the Land surveying industry ever since. From large SANRAL contracts to individual home surveys, we provide high quality surveying services for both large orginizations and individuals.</p>
                        <p>We strive for the highest quality and are knowledgable in both traditional survey methods, and the latest surveying technologies. We do whatever is best suited for the job at hand. </p>
                        <p>We have a strong track record of projects ranging from very large national contracts to personal property surveys. Give us a call and we will be glad to help you.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )

}
export { About };