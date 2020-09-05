export default function contact() {
  const content = document.getElementById('content');
  const contact = document.createElement('div');
  contact.className = 'contact';
  contact.id = 'wrapper';

  const phone = document.createElement('div');
  const phoneTitle = document.createElement('h3');
  phoneTitle.innerHTML = 'Phone';
  const number1 = document.createElement('p');
  number1.innerHTML = '+254701009000';
  const number2 = document.createElement('p');
  number2.innerHTML = '+254701009001';
  const email = document.createElement('div');
  const emailTitle = document.createElement('h3');
  emailTitle.innerHTML = 'Email Address and Location';
  const emailAd = document.createElement('p');
  emailAd.innerHTML = 'java@example.com';
  const location = document.createElement('p');
  location.innerHTML = 'ABC Place, Waiyaki Way, Nairobi, Kenya';
  phone.appendChild(phoneTitle);
  phone.appendChild(number1);
  phone.appendChild(number2);
  email.appendChild(emailTitle);
  email.appendChild(emailAd);
  email.appendChild(location);
  contact.appendChild(phone);
  contact.appendChild(email);
  content.appendChild(contact);
}