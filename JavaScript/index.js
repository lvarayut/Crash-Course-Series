function appendImageElem(keyword, index) {
  const imgElem = document.createElement('img');
  imgElem.src = `https://source.unsplash.com/400x225/?${keyword}&sig=${index}`;

  const galleryElem = document.querySelector('.gallery');
  galleryElem.appendChild(imgElem);
}

function removePhotos() {
  const galleryElem = document.querySelector('.gallery');
  galleryElem.innerHTML = '';
}

function searchPhotos(event) {
  const keyword = event.target.value;

  if (event.key === 'Enter' && keyword) {
    removePhotos();

    for (let i = 1; i <= 9; i++) {
      appendImageElem(keyword, i);
    }
  }
}

function run() {
  const inputElem = document.querySelector('input');
  inputElem.addEventListener('keydown', searchPhotos);
}

run();
