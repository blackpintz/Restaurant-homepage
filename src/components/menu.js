import element from './element';

export default function menu() {
  const content = document.getElementById('content');
  const menu = document.createElement('div');
  menu.className = 'menu';
  menu.id = 'wrapper';

  const breakfast = element('div', '', menu);
  element('h3', 'Breakfast', breakfast);
  const breakfastItem1 = element('div', '', breakfast);
  element('h3', 'Fruit Salad', breakfastItem1);
  element('p', 'with yoghurt honey and nuts.', breakfastItem1);
  const breakfastItem2 = element('div', '', breakfast);
  element('h3', 'Hot Oat Oatmeal Porridge.', breakfastItem2);
  element('p', 'with almonds, raisins and brown sugar.', breakfastItem2);
  const lunch = element('div', '', menu);
  element('h3', 'Lunch', lunch);
  const lunchItem1 = element('div', '', lunch);
  element('h3', 'Chicken Curry', lunchItem1);
  element('p', 'with chapati or rice and salsa', lunchItem1);
  const lunchItem2 = element('div', '', lunch);
  element('h3', 'Grilled Fish', lunchItem2);
  element('p', 'spicy cajun grilled tilapia with garden salad & chips.', lunchItem2);
  content.appendChild(menu);
}