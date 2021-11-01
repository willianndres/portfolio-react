import * as React from "react"
import SvgMoon from './SVG/svg-moon';
import SvgLan from './SVG/svg-lan';
import SvgDownload from './SVG/svg-download';
import SvgSun from './SVG/svg-sun';
import { theme, lang, changeLang, changeTheme } from '../../store/slices';
import { useSelector, useDispatch } from 'react-redux';
const Header = () => {

  const dispatch = useDispatch();
  const langRedux = useSelector(lang);
  const themeRedux = useSelector(theme);

  const _handleChangeLang = () => {
    dispatch(changeLang(!langRedux));
  }
  const _handleChangeTheme = () => {
    dispatch(changeTheme(!themeRedux));
  }

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item nav-op">
              <SvgDownload />
            </li>
            <li className="nav-item nav-op" onClick={() => _handleChangeLang()}>
              <SvgLan />
            </li>
            <li className="nav-item nav-op" on onClick={() => _handleChangeTheme()} >
              {!themeRedux ? <SvgMoon /> : <SvgSun />}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Header
