export default function home() {
  const content = document.getElementById('content');

  const wrapper = document.createElement('div');
  wrapper.id = 'wrapper';
  const pTag = document.createElement('p');
  pTag.innerHTML = 'Welcome to Java Restaurant!';

  content.appendChild(wrapper);
  wrapper.appendChild(pTag);
}