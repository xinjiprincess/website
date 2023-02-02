var videoData = [
  {
    id: 0,
    title: '学习关键词丨无愧时代 不负人民',
    author: '722 党国月',
    poster: './image/new1/1.jpg',
    avator: './image/avator.png',
    commentCount: 1245,
  },
  {
    id: 1,
    title: '国家发展改革委划定2022年发展改革重点任务',
    author: '722 党国月',
    poster: './image/new1/2.jpg',
    avator: './image/avator.png',
    commentCount: 267,
  },
  {
    id: 2,
    title: '抗疫一线的“硬核取暖”寒夜里一个“大白”在打拳',
    author: '722 党国月',
    poster: './image/new1/3.jpg',
    avator: './image/avator.png',
    commentCount: 722,
  },
];

window.onload = function () {
  renderVideoList();

  function renderVideoList() {
    var ulDom = document.getElementById('videoList');
    videoData.forEach(function (item, index) {
      var liDom = document.createElement('li');
      liDom.classList.add('item');
      liDom.innerHTML = `
        <a href="#">
          <h3 class="title">${item.title}</h3>
          <div class="video-wrap">
            <img src="${item.poster}">
          </div>
          <div class="info">
            <div class="left">
              <div class="avator">
                <img src="${item.avator}">
              </div>
              <em class="author">${item.author}</em>
            </div>
            <div class="right">
              <i class="iconfont icon-liuyan"></i>
              <span class="comment">${item.commentCount}</span>
            </div>
          </div>
        </a>
        `;
      ulDom.appendChild(liDom);
    });
  }
};
