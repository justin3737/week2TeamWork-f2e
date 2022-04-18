function onload() {
  fetch(http)
    .then((response) => response.json())
    .then((response) => {
      addStory(response.data)
    })
}

function addStory(dataList) {
  document.getElementById('gettting-data').style.display = 'none';
  const stories = document.querySelector('#stories')
  dataList.forEach((data, idx) => {
    const story = document.createElement('li')
    story.classList.add('mb-4')
    story.innerHTML = /*html*/ `
      <div class="media">
      <div class="user mb-3">
        <img
          src="${data.userPhoto}"
          alt="user-photo"
          class="user-photo mr-3"
        />
        <div class="">
          <a class="user-name" href="#">${data.userName}</a>
          <p class="date-time m-0">${data.createAt}</p>
        </div>
      </div>
      <div class="media-content m-0">
        <p class="mt-0 media-content-p">${data.userContent}</p>
      </div>
    </div>
  `
    stories.appendChild(story)

    if(data.imgUrl){
      let image = document.createElement('img');
      image.src = data.imgUrl;
      image.alt = 'upload-photo';
      document.getElementsByClassName('media-content-p')[idx].appendChild(image);
    }
  })
}

goPostPage = ()=> {
  location.href = 'createPost.html';
}