import Navbar from '../components/Navbar'
import Tutor from '../components/Tutor'
import Partner from '../components/Partner'

import { courseSection } from '../data/CourseSection'
import { homeSection } from '../data/HomeSection'
import { partnerSection, partnerList } from '../data/PartnerSection'
import { tutorSection, tutorList } from '../data/TutorSection'
import { contactSection } from '../data/ContactSection'

import parse from 'html-react-parser'

function Home() {
  return (
    <>
        <Navbar />
        <div className="wrapper">
            {/* home */}
            <section id="home">
                <img src={homeSection.image}/>
                <div className="kolom">
                    {parse(homeSection.content)}
                </div>
            </section>

            {/* course */}
            <section id="courses">
                <div className="kolom">
                    {parse(courseSection.content)}
                </div>
                <img src={courseSection.image}/>
            </section>

            {/* tutors */}
            <section id="tutors">
                <div className="tengah">
                    <div className="kolom">
                        {parse(tutorSection.content)}
                    </div>

                    <Tutor tutorList={tutorList} />
                
                </div>
            </section>

            {/* partners */}
            <section id="partners">
                <div className="tengah">
                    <div className="kolom">
                        {parse(partnerSection.content)}
                    </div>

                    <Partner partnerList={partnerList} />

                </div>
            </section>            

        </div>

        {/* contact */}
        <div id="contact">
            {parse(contactSection.content)}
        </div>

        {/* footer */}
        <div id="copyright">
            <div class="wrapper">
                &copy; 2024. <b>Alvin R.S</b> All Rights Reserved.
            </div>
        </div>

    </>
  )
}

export default Home