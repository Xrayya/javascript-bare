const pointElements = document.querySelectorAll('.point');
const additionElement = document.querySelector('.addition');
const calculateButton = document.querySelector('.calculate');
const resultDiv = document.querySelector('#result');

calculateButton.addEventListener('click', () => {
  let pointsValue = [];
  pointElements.forEach((point) => {
    pointsValue.push(point.value ?? 0);
  });

  const points = tf.tensor1d(pointsValue, 'int32');
  const addition = tf.scalar(additionElement.value, 'float32');
  const result = tf.add(points, addition);

  let resultArray = Array.from(result.dataSync());

  ulTag = document.createElement('ul');
  ulTag.classList.add('list-group');
  ulTag.classList.add('mt-3');

  ulTag.innerHTML = `<li class="list-group-item">Result</li>`;
  resultArray.forEach((resultValue, resultindex) => {
    ulTag.innerHTML += `
      <li class="list-group-item">
        <label for="point-${resultindex}" class="form-label">Point ${resultindex}</label>
        <input
          type="number"
          id="point-${resultindex}"
          class="form-control"
          value="${resultValue}"
          disabled
        />
      </li>
      `;
  });

  resultDiv.appendChild(ulTag);
});
