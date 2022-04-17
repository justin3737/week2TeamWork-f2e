function onload() {
  console.log('onload')
  fetch(http)
    .then((response) => response.json())
    .then((response) => {
      console.log(response.data)
      addStory(response.data)
    })
}

function addStory(dataList) {
  const stories = document.querySelector('#stories')
  dataList.forEach((data) => {
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
        <p class="mt-0">${data.userContent}</p>
        <img
            src="${data.imgUrl}"
            alt="upload-photo"
          />`
  story.innerHTML += showPhoto(data.imgUrl)
  story.innerHTML += `
      </div>
    </div>
  `
    stories.appendChild(story)
  })
}


function showPhoto(imgUrl) {
  if (!!imgUrl) {
    return `<img src='${imgUrl}' alt='upload-photo/>`
  } else {
    return ""
  }
}