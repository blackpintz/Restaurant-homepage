import './style.css';
import element from './components/element';
import homepage from './components/home';
import aboutpage from './components/about';
import menupage from './components/menu';
import contactpage from './components/contact';

function navbar() {
  const content = document.getElementById('content');

  const navbar = document.createElement('div');
  navbar.className = 'navbar';

  element('h3', 'Home', navbar);
  element('h3', 'About', navbar);
  element('h3', 'Menu', navbar);
  element('h3', 'Contact', navbar);

  const updatePage = (page) => {
    const wrapper = document.getElementById('wrapper');
    wrapper.remove();
    return page;
  };
  content.appendChild(navbar);

  const navTitle = document.getElementsByTagName('h3');
  const navArray = [...navTitle];

  navArray.forEach((nav) => {
    nav.addEventListener('click', () => {
      switch (nav.innerText) {
        case 'Home':
          updatePage(homepage());
          break;
        case 'About':
          updatePage(aboutpage());
          break;
        case 'Menu':
          updatePage(menupage());
          break;
        case 'Contact':
          updatePage(contactpage());
          break;
        default:
          updatePage(homepage());
          break;
      }
    });
  });
}
navbar();
homepage();