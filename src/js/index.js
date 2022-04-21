import '../scss/index.scss';

const formEl = document.querySelector('form');
const tbodyRow = document.querySelector('tbody');
const buttonAdd = document.querySelector('addspot');

buttonAdd.addEventListener('click', () => {
  let dateInput = document.getElementById('date');

  dateInput.classList.remove('dateInput');
  dateInput.classList.add('dateInputSee');
});

formEl.addEventListener('submit', (event) => {
  event.preventDefault();
  const nameInput = document.getElementById('name').value;
  const countryInput = document.getElementById('country').value;
  const latitudeInput = document.getElementById('latitude').value;
  const longitudeInput = document.getElementById('longitude').value;
  const windprobInput = document.getElementById('windprob').value;
  const whentogoInput = document.getElementById('whentogo').value;

  let row = `
    <tr>
        <td>${nameInput}</td>
        <td>${countryInput}</td>
        <td>${latitudeInput}</td>
        <td>${longitudeInput}</td>
        <td>${windprobInput}</td>
        <td>${whentogoInput}</td>
    </tr>
  `;

  // row.appendTo(tbodyRow);
  tbodyRow.innerHTML += row;
});
