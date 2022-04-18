function submitPost() {
  const data = {
    userName: document.getElementById("userName").value,
    userContent: document.getElementById("userContent").value,
    userPhoto: document.getElementById("userPhoto").value,
    imgUrl: document.getElementById("imgUrl").value
  }

  /*
    條件判斷註解掉，目的是為了能夠測出 api 傳來的錯誤訊息
  */
  // 若沒有輸入發文者名稱，顯示錯誤訊息
  // if (!data.userName) {
  //   document.getElementById("userNameError").style.display = "block";
  //   document.getElementById("userNameError").textContent = "請輸入發文者名稱";
  // }

  // 若沒有輸入發文者照片網址，顯示錯誤訊息
  // if (!data.userPhoto) {
  //   document.getElementById("userPhotoError").style.display = "block";
  //   document.getElementById("userPhotoError").textContent = "請輸入發文者照片網址";
  // }

  // 若沒有輸入發文內容，顯示錯誤訊息
  // if (!data.userContent) {
  //   document.getElementById("userContentError").style.display = "block";
  //   document.getElementById("userContentError").textContent = "請輸入發文內容";
  // }

  // 若沒有輸入發文圖片網址，顯示錯誤訊息
  // if (!data.imgUrl) {
  //   document.getElementById("imgUrlError").style.display = "block";
  //   document.getElementById("imgUrlError").textContent = "請輸入發文圖片網址";
  // }

  // 若其中一項沒有填寫，則返回
  // if (data.userName && data.userPhoto && data.userContent && data.imgUrl) {
  //   postData(apiUrl, data)
  // } else {
  //   console.log('有資料未填寫')
  //   return
  // }

  postData(http, data)
}

function postData(url, data) {
  fetch(url, {
    method: "POST",
    body: JSON.stringify(data)
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.result) {
        alert('新增貼文成功')

        // 清空欄位
        document.getElementById("userName").value = ''
        document.getElementById("userContent").value = ''
        document.getElementById("userPhoto").value = ''
        document.getElementById("imgUrl").value = ''
        window.location = 'index.html'
      } else {
        // 顯示 API 回傳的錯誤訊息
        document.getElementById("apiError").style.display = "block";
        document.getElementById("apiError").textContent = res.msg;
      }
    })
}