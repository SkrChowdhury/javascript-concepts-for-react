const addToLocalStorage = () => {
  const idInput = document.getElementById('storage-id');
  const id = idInput.value;

  const valueInput = document.getElementById('storage-value');
  const value = valueInput.value;

  if (id && value) {
    localStorage.setItem(id, value);
  }

  idInput.value = ' ';
  valueInput.value = ' ';
};

//! array value to localStorage
localStorage.setItem('numbers', Json.stringify([23, 21, 23, 23, 12]));

//! object value to localStorage
const pen = { price: 20, color: 'black' };
localStorage.setItem('pen', JSON.stringify(pen));

//! get object value from localStorage
const storePen = localStorage.getItem('pen');
const penObj = JSON.parse(storePen);
