import React from 'react'
import language from '../../utils/lang.json';
import { lang } from '../../../store/slices';
import { useSelector } from 'react-redux';
import SvgGithub from '../SVG/svg-github';
import SvgLinkedin from '../SVG/svg-linkedin';
import SvgTwitter from '../SVG/svg-twitter';
import SvgInstagram from '../SVG/svg-instagram';
import SvgGmail from '../SVG/svg-gmail';
import SvgForm from '../SVG/svg-form';
const Contact = () => {
    const $lang = useSelector(lang);
    const contactTitleSection = !$lang ? language.en.contactTitleSection : language.es.contactTitleSection;
    return (
        <div className="row">
            <div className="col-lg-12">
                <h2 className="text-center">{contactTitleSection}</h2>
            </div>
            <div className="col-lg-10 col-10 mx-auto mb-3 mt-3 background-contact">
                <div className="row pt-1">
                    <div className="col-lg-2 col-4 p-2">
                        <a href="https://github.com/willianndres" title="Github profile">
                            <SvgGithub />
                        </a>
                    </div>
                    <div className="col-lg-2 col-4 p-2">
                        <a href="https://www.linkedin.com/in/willian-candanoza-80621a186/" title="Linkedin profile">
                            <SvgLinkedin />
                        </a>
                    </div>
                    <div className="col-lg-2 col-4 p-2">
                        <a href="https://twitter.com/wacandanoza" title="Twitter profile">
                            <SvgTwitter />
                        </a>
                    </div>
                    <div className="col-lg-2 col-4 p-2">
                        <a href="https://www.instagram.com/willianndres" title="Instagram profile">
                            <SvgInstagram />
                        </a>
                    </div>
                    <div className="col-lg-2 col-4 p-2">
                        <a href="mailto:candanoza170@gmail.com" title="Send mail">
                            <SvgGmail />
                        </a>
                    </div>
                    <div className="col-lg-2 col-4 p-2">
                        <a href="#" title="Contact form">
                            <SvgForm />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact

