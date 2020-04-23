import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter'
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="quienes_somos" className={`${this.props.article === 'quienes_somos' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">&iquest;Quiénes somos?</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut consectetur nunc, a consectetur eros. Etiam sodales non mauris non varius. Etiam metus sem, luctus sit amet mauris ut, dictum ornare urna. Aliquam erat volutpat. In sed dui ex. Aliquam commodo metus a est sodales, nec commodo urna consectetur. Donec eleifend tellus eget feugiat suscipit. Nulla facilisi. Praesent lacus ex, molestie non sem eget, cursus pharetra mi.</p>
          <p>Mauris urna orci, tristique eu rutrum id, vestibulum ac neque. Mauris sodales venenatis scelerisque. In viverra sem ex, in facilisis ex ullamcorper nec. Cras eu cursus sapien. Fusce luctus dapibus orci, eget molestie nunc malesuada at. Etiam ac orci nunc. Suspendisse a tellus non nisl condimentum aliquet. Sed quis tempus eros. Nulla in feugiat neque. Fusce dapibus turpis fermentum sem euismod pellentesque a id purus. Pellentesque sed nulla neque. Duis ultrices consequat mauris, et porttitor purus pulvinar tempor. Mauris fringilla libero sed massa consequat tincidunt. Vivamus cursus accumsan neque, eget maximus erat vestibulum sit amet.</p>
          <p>Integer imperdiet ipsum a mi vestibulum, porttitor efficitur enim fermentum. Phasellus convallis sapien in nibh varius, ut ultrices magna rhoncus. In at augue id nisi condimentum tempor. Pellentesque eget nulla ac urna eleifend luctus a vitae dui. Sed dictum malesuada nulla, sed rutrum justo aliquam sit amet. Nulla eget libero turpis. Etiam ultricies diam ac nisl efficitur vestibulum non posuere lacus. Donec turpis mauris, pretium sit amet metus sit amet, imperdiet tempus nisl. Quisque diam urna, interdum quis nulla a, luctus consectetur tortor. Cras pharetra felis a orci molestie, imperdiet faucibus elit semper. Nulla in tortor neque. Ut sem purus, dapibus at tempus vel, sodales sed leo. Suspendisse venenatis tincidunt augue, eget blandit massa eleifend eu.</p>
          {close}
        </article>

        <article id="proyectos" className={`${this.props.article === 'proyectos' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Proyectos</h2>
          <p>Fusce quis finibus lorem. Duis blandit in augue quis tincidunt. Etiam eget sem a nunc consectetur pulvinar. Duis sed turpis dictum, accumsan turpis eget, pellentesque ipsum. Duis laoreet mauris mauris, non euismod dolor pharetra eu. Fusce sed dictum arcu. Proin elementum justo at dolor fermentum consectetur. Suspendisse lobortis, tellus vel luctus imperdiet, est dui tempor est, vel convallis orci lacus nec purus. Pellentesque eu porttitor nisl. Proin efficitur enim porttitor nulla eleifend, sed gravida eros maximus. Etiam purus justo, pharetra quis maximus nec, mollis eu ipsum. Aenean vitae ipsum vitae lacus malesuada feugiat a sed nulla. Aenean volutpat felis ut sodales ornare. Nulla facilisi.</p>
          <p>Nunc in eleifend ex. Sed est magna, bibendum nec nunc in, fringilla pharetra massa. Mauris sed nibh eu ipsum accumsan vestibulum non nec arcu. Praesent finibus orci nisl, eget maximus enim maximus in. Suspendisse diam eros, tempus ut laoreet sed, ultrices ac diam. Phasellus est velit, ultrices eget commodo eget, vulputate pulvinar turpis. Suspendisse sit amet vulputate urna. Etiam nec malesuada sem. Nulla interdum mi sed rutrum aliquam. Proin non ex in neque vehicula aliquam eu et ligula. Donec luctus accumsan risus, vitae imperdiet nunc cursus vitae.</p>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool
}

export default Main
