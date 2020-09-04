export default function about() {
  const content = document.getElementById('content');

  const about = document.createElement('div');
  about.innerHTML = 'About page.';

  content.appendChild(about);
}