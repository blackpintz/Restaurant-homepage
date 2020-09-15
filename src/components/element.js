const element = (name, text, parent) => {
  const item = document.createElement(name);
  item.innerText = text;
  return parent.appendChild(item);
};

export default element;