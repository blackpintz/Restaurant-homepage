export default function navbar() {
  const content = document.getElementById('content');

  const navbar = document.createElement('div');
  navbar.className = 'navbar';

  const about = document.createElement('h3');
  about.innerHTML = 'About';
  const menu = document.createElement('h3');
  menu.innerHTML = 'Menu';
  const contact = document.createElement('h3');
  contact.innerHTML = 'Contact';

  content.appendChild(navbar);
  navbar.appendChild(about);
  navbar.appendChild(menu);
  navbar.appendChild(contact);
}