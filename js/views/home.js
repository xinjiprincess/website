var currentDayNewsList = [
  {
    id: 0,
    title: "习主席用这些古语展现中国开放态度",
    source: "新华社",
    commentCount: "722",
  },
  {
    id: 1,
    title: "“十四五”实现良好开局",
    source: "人民日报",
    commentCount: "41",
  },
  {
    id: 2,
    title: "北京冬奥的“绿色密码”",
    source: "经济日报",
    commentCount: "811",
  },
  {
    id: 3,
    title: "全国疫情形势总体平稳",
    source: "经济日报",
    commentCount: "722",
  },
  {
    id: 4,
    title: "“我是经常地敲警钟”",
    source: "人民日报",
    commentCount: "722",
  },
];

window.onload = function () {
  new Swiper(".news-list", {
    freeMode: true,
    slidesPerView: "auto",
  });

  new Swiper(".news-img-list", {
    loop: true,
    autoplay: {
      delay: 3000,
      stopOnLastSlide: false,
      disableOnInteraction: false,
    },
  });

  renderCurrentDayNews();

  // es6语法json渲染数据
  function renderCurrentDayNews() {
    var ulDom = document.querySelector("#currentDayNews");
    currentDayNewsList.forEach(function (item, index) {
      var liDom = document.createElement("li");
      liDom.classList.add("news-item")
      liDom.innerHTML = `
        <div class="news-title">${item.title}</div>
        <div class="news-info">
          ${index < 3 ? "<span class='news-top'>置顶</span>" : ""}
          <span class="news-source">${item.source}</span>
          <span class="news-comment">${item.commentCount}评论</span>
        </div>
      `;
      ulDom.appendChild(liDom);
    });
  }
};
