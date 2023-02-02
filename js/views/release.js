window.onload = function () {
  var submitBtn = document.getElementById('save');
  submitBtn.onclick = function () {
    var title = document.getElementById('title');
    var keyword = document.getElementById('keyword');
    var content = document.getElementById('content');

    if (!title.value) {
      title.parentNode.nextElementSibling.innerHTML = '标题不能为空哦！';
      return false;
    } else {
      title.parentNode.nextElementSibling.innerHTML = '';
    }
    if (!keyword.value) {
      keyword.parentNode.nextElementSibling.innerHTML = '关键词不能为空哦！';
      return false;
    } else {
      keyword.parentNode.nextElementSibling.innerHTML = '';
    }
    if (!content.value) {
      content.parentNode.nextElementSibling.innerHTML = '分享内容不能为空哦！';
      return false;
    } else {
      content.parentNode.nextElementSibling.innerHTML = '';
    }

    window.location.href = './mine.html';
  };

  // input监听
  inputChange = function (id, info) {
    var uValue = document.getElementById(id).value;
    console.log(uValue);
    if (uValue == '') {
      document.getElementById(id).parentNode.nextElementSibling.innerHTML =
        info;
    } else {
      document.getElementById(id).parentNode.nextElementSibling.innerHTML = '';
    }
  };

  document.getElementById('cancel').onclick = function () {
    window.location.href = './mine.html';
  };
};
