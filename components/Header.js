import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faGem from '@fortawesome/fontawesome-free-regular/faGem'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
          <img src="/static/images/odia_logo.jpg" alt="O.D.I.A." />
        </div>
        <div className="content">
            <div className="inner">
                <h1>Observatorio de Derecho Informático Argentino</h1>
                <p>Ámbito de intercambio y aprendizaje mutuo entre abogadxs e informáticxs.</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('quienes_somos')}}>&iquest;Quiénes somos?</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('proyectos')}}>Proyectos</a></li>
                <li><a href="https://twitter.com/odiaasoc" target="_blank">Twitter</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
