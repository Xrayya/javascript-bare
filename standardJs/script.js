const postButton = document.querySelector('.btn-post');
const postTitle = document.querySelector('.title');
const postContent = document.querySelector('.content');
const pageContent = document.querySelector('.page-content');

postButton.addEventListener('click', () => {
  const card = document.createElement('div');
  card.classList.add('card');
  card.classList.add('mb-3');

  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');

  const cardTitle = document.createElement('h5');
  cardTitle.classList.add('card-title');
  cardTitle.textContent = postTitle.value;

  const cardText = document.createElement('p');
  cardText.classList.add('card-text');
  cardText.textContent = postContent.value;

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardText);

  card.appendChild(cardBody);

  pageContent.appendChild(card);

  return true;
});
