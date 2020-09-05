import './style.css';
import homepage from './components/home';
import aboutpage from './components/about';
import menupage from './components/menu';
import contactpage from './components/contact';

function navbar() {
  const content = document.getElementById('content');

  const navbar = document.createElement('div');
  navbar.className = 'navbar';

  const home = document.createElement('h3');
  home.innerHTML = 'Home';
  const about = document.createElement('h3');
  about.innerHTML = 'About';
  const menu = document.createElement('h3');
  menu.innerHTML = 'Menu';
  const contact = document.createElement('h3');
  contact.innerHTML = 'Contact';

  content.appendChild(navbar);
  navbar.appendChild(home);
  navbar.appendChild(about);
  navbar.appendChild(menu);
  navbar.appendChild(contact);

  const navTitle = document.getElementsByTagName('h3');
  const navArray = [...navTitle];

  navArray.forEach((nav) => {
    nav.addEventListener('click', () => {
      if (nav.innerHTML === 'Home') {
        const wrapper = document.getElementById('wrapper');
        wrapper.remove();
        homepage();
      }
      if (nav.innerHTML === 'About') {
        const wrapper = document.getElementById('wrapper');
        wrapper.remove();
        aboutpage();
      }
      if (nav.innerHTML === 'Menu') {
        const wrapper = document.getElementById('wrapper');
        wrapper.remove();
        menupage();
      }
      if (nav.innerHTML === 'Contact') {
        const wrapper = document.getElementById('wrapper');
        wrapper.remove();
        contactpage();
      }
    });
  });
}
navbar();
homepage();