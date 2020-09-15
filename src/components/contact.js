import element from './element';

export default function contact() {
  const content = document.getElementById('content');
  const contact = document.createElement('div');
  contact.className = 'contact';
  contact.id = 'wrapper';

  const phone = element('div', '', contact);
  element('h3', 'Phone', phone);
  element('p', '+254701009000', phone);
  element('p', '+254701009001', phone);
  const email = element('div', '', contact);
  element('h3', 'Email Address and Location', email);
  element('p', 'java@example.com', email);
  element('p', 'ABC Place, Waiyaki Way, Nairobi, Kenya', email);
  content.appendChild(contact);
}
