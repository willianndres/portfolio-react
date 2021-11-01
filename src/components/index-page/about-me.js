import React from 'react'
import language from '../../utils/lang.json';
import { lang } from '../../../store/slices';
import { useSelector } from 'react-redux';
import SvgBackend from '../SVG/svg-backend';
import SvgFrontend from '../SVG/svg-frontend';
import SvgMovil from '../SVG/svg-movil';
const AboutMe = () => {
    const $lang = useSelector(lang)
    const titleSecondSection = !$lang ? language.en.titleSecondSection : language.es.titleSecondSection;
    const subTitle1SecondSection = !$lang ? language.en.subTitle1SecondSection : language.es.subTitle1SecondSection;
    const subTitle2SecondSection = !$lang ? language.en.subTitle2SecondSection : language.es.subTitle2SecondSection;
    const shortDescription = !$lang ? language.en.shortDescription : language.es.shortDescription;
    const titleMobile = !$lang ? language.en.titleMobile : language.es.titleMobile;
    return (
        <div className="row mb-3">
            <div className="col-lg-12">
                <h2 className="text-center">{titleSecondSection}</h2>
            </div>
            <div className="col-lg-12">
                <div class="row mt-4 mb-3">
                    <div className="col-lg-6 mb-3">
                        <h3 className="text-center">{subTitle1SecondSection}</h3>
                        <div className="col-lg-10 mx-auto short-des mt-3">
                            <p className="mb0">{shortDescription}</p>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-3">
                        <h3 className="text-center">{subTitle2SecondSection}</h3>
                        <div className="col-lg-10 mx-auto mt-3">
                            <div className="row">
                                <div className="col-lg-4 col-6">
                                    <SvgBackend />
                                    <p className="text-center pt-1">Back-end</p>
                                </div>
                                <div className="col-lg-4 col-6">
                                    <SvgFrontend />
                                    <p className="text-center pt-1">Front-end</p>
                                </div>
                                <div className="col-lg-4 col-12">
                                    <SvgMovil />
                                    <p className="text-center pt-1">{titleMobile}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-12">
                <hr className="hr-per" />
            </div>
        </div>
    )
}
export default AboutMe


