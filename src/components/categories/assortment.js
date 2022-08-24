function arrow() {
  const btn1 = document.getElementById('btn_1');
  const btn2 = document.getElementById('btn_2');
  const btn3 = document.getElementById('btn_3');

  const arr1 = document.getElementById('arrow_1');
  const arr2 = document.getElementById('arrow_2');
  const arr3 = document.getElementById('arrow_3');

  btn1.addEventListener('mouseover', () => {
    arr1.classList.add('arrow-move');
  });
  btn1.addEventListener('mouseout', () => {
    arr1.classList.remove('arrow-move');
  });

  btn2.addEventListener('mouseover', () => {
    arr2.classList.add('arrow-move');
  });
  btn2.addEventListener('mouseout', () => {
    arr2.classList.remove('arrow-move');
  });

  btn3.addEventListener('mouseover', () => {
    arr3.classList.add('arrow-move');
  });
  btn3.addEventListener('mouseout', () => {
    arr3.classList.remove('arrow-move');
  });
}

module.exports = arrow;