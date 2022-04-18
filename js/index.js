let data = [];
const filterSelect = document.querySelector('.filter-bar__select'); // 下拉選單區塊
const filterBar = document.querySelector('.filter-bar__input-group'); // 搜尋區塊
const filterInput = document.querySelector('.filter-bar__input'); // 搜尋輸入框
const stories = document.querySelector('#stories'); // 列表
const storyLoading = document.getElementById('gettting-data'); // 列表資料載入中

function onload() {
  fetch(http)
    .then((response) => response.json())
    .then((response) => {
      data = response.data;
      addStory(data);
    })
}

function addStory(dataList) {
  storyLoading.style.display = 'none';
  stories.innerHTML = '';

  dataList.forEach((data, idx) => {
    const story = document.createElement('li');
    story.classList.add('mb-4');
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

    if (data.imgUrl) {
      let image = document.createElement('img');
      image.src = data.imgUrl;
      image.alt = 'upload-photo';
      document.getElementsByClassName('media-content-p')[idx].appendChild(image);
    }
  })
}

// 下拉式選單
filterSelect.addEventListener("change", (e) => {
  let sortVal = e.target.value;
  let sortData = [...data];
  sortData.forEach((item) => {
    item.getTime = new Date(item.createAt.replace(/-/g, '/')).getTime();
  })
  if (sortVal === "new") {
    // 依照發文時間由新排到舊
    sortData.sort((a, b) => {
      return b.getTime - a.getTime;
    });
  } else if (sortVal === "old") {
    // 依照發文時間由舊排到新
    sortData.sort((a, b) => {
      return a.getTime - b.getTime;
    });
  }
  addStory(sortData);
});

// 搜尋
filterBar.addEventListener("click", (e) => {
  // 確認點擊到的是否為 BUTTON 或 IMG
  if (e.target.nodeName === "BUTTON" || e.target.nodeName === "IMG") {

    // 回傳 .match 符合的匹配結果：目前以 userContent 為主
    let filterVal = filterInput.value.trim();
    let filterData = [];
    if (filterVal !== '') {
      filterData = data.filter((item) => {
        return item.userContent.match(filterVal);
      })
    } else {
      filterData = data;
    }

    // 判斷 filterData 長度是否等於零
    if (filterData.length === 0) {
      stories.innerHTML = `
      <ul id="stories" class="unlistyle">
        <li id="gettting-data" class="mb-4">
          <div class="media">目前沒有搜尋的相關資料!</div>
        </li>
      </ul>`;
    } else {
      addStory(filterData);
    }
    
    // 清空搜尋結果
    filterInput.value = '';
  }
});

goPostPage = () => {
  location.href = 'createPost.html';
}