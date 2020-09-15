import element from './element';

export default function home() {
  const content = document.getElementById('content');

  const wrapper = document.createElement('div');
  wrapper.className = 'home';
  wrapper.id = 'wrapper';
  element('p', 'Welcome to Java Restaurant!', wrapper);
  content.appendChild(wrapper);
}