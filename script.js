const detailsForm = document.querySelector('#destination_details_forms');
detailsForm.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();

  const { name, location, photo, description } = event.target.elements;
  const destCard = createDestinationCard(name.value, location.value, photo.value, description.value);
  event.target.reset();

  const wishlistContainer = document.querySelector('#destinations_container');
  if (wishlistContainer.children.length === 0) {
    document.querySelector('#title').textContent = 'My Wish List';
  }
  wishlistContainer.appendChild(destCard);
}

function createDestinationCard(name, location, photoURL, description) {
  const constantPhotoUrl = 'https://techbeacon.com/sites/default/files/styles/social/public/field/image/google-location-privacy.jpg?itok=g3oTUeP2';
  const imgSrc = photoURL.length === 0 ? constantPhotoUrl : photoURL;

  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <img src="${imgSrc}" alt="${name}">
    <div class="card-body">
      <h3>${name}</h3>
      <h4>${location}</h4>
      ${description.length !== 0 ? `<p class="card-text">${description}</p>` : ''}
      <button class="card-delete-btn">Remove</button>
    </div>
  `;
  card.querySelector('.card-delete-btn').addEventListener('click', () => card.remove());

  return card;
}
