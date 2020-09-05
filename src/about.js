export default function about() {
  const content = document.getElementById('content');

  const about = document.createElement('div');
  about.className = 'about';
  const title = document.createElement('h3');
  title.innerHTML = 'About Us.';
  const paragraph = document.createElement('p');
  paragraph.innerHTML = 'Java House, commonly referred to as ‘Nairobi Java’,opened its first store in 1999 at Adam’s Arcade in Nairobi. With the aim of introducing gourmet coffee drinking culture in Kenya, the first outlet was a coffee shop and later the brand evolved to an American diner style restaurant to its present-day status as a 3 -day part coffee-led, casual dining concept.Java House is now one of the leading coffee brands in Africa and has grown to have outlets in 14 cities across 3 countries in East Africa (Kenya, Uganda and Rwanda). It has also birthed two sister brands Planet Yoghurt, a healthy, tasty and fun frozen yoghurt store and 360 Degrees Pizza, a casual dining restaurant.';

  about.appendChild(title);
  about.appendChild(paragraph);
  content.appendChild(about);
}