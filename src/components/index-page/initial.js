import React from 'react'
import Logo from '../logo';
import language from '../../utils/lang.json';
import { lang } from '../../../store/slices';
import { useSelector } from 'react-redux';
const Initial = () => {
    const $lang = useSelector(lang);
    const titlePrinicipal = !$lang ? language.en.titlePrincipal : language.es.titlePrincipal;
    const subTitlePrincipal = !$lang ? language.en.subTitlePrincipal : language.es.subTitlePrincipal;
    return (
        <div className="row mb-3">
            <div className="col-lg-8 mx-auto mt-5">
                <Logo />
            </div>
            <div className="col-lg-12 mb-4">
                <h2 className="text-center">{titlePrinicipal}</h2>
                <h3 className="text-center mt-3">{subTitlePrincipal}</h3>
            </div>
            <div className="col-lg-12">
                <hr className="hr-per" />
            </div>
        </div>
    )
}
export default Initial
