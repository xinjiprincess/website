var sortData = {
  updateTime: "2021/12/13 09:30",
  rows: [
    {
      id: 0,
      title: "国家公祭日勿忘这些数字",
      hot: true,
    },
    {
      id: 1,
      title: "中国内地首次检出奥密克戎变异株",
      hot: false,
    },
    {
      id: 2,
      title: "美罕见龙卷风已致近百人丧生",
      hot: false,
    },
    {
      id: 3,
      title: "立陶宛法院驳回中企诉讼",
      hot: true,
    },
    {
      id: 4,
      title: "95后现役军人荣立一等功",
      hot: false,
    },
    {
      id: 5,
      title: "女子公祭日穿和服上街 警方带走调查",
      hot: true,
    },
    {
      id: 6,
      title: "正直播2021最后一场极大流星雨",
      hot: false,
    },
    {
      id: 6,
      title: "722 党国月",
      hot: false,
    },
  ],
};

window.onload = function () {
  renderSort();

  // 创建dom渲染json数据
  function renderSort() {
    var sortDom = document.querySelector("#sortList");
    var updateDom = document.createElement("p");
    updateDom.classList.add("update-time");
    updateDom.innerHTML = "更新时间：" + sortData.updateTime;
    sortDom.appendChild(updateDom);

    var ulDom = document.createElement("ul");
    var list = sortData.rows;
    for (var i = 0; i < list.length; i++) {
      var liDom = document.createElement("li");
      var indexDom = document.createElement("span");
      indexDom.classList.add("sort-number");
      indexDom.innerHTML = i + 1;
      if (i < 3) {
        indexDom.classList.add("sort-number-top");
      }

      var titleDom = document.createElement("span");
      titleDom.classList.add("sort-title");
      titleDom.innerHTML = list[i].title;

      liDom.appendChild(indexDom);
      liDom.appendChild(titleDom);

      if (list[i].hot) {
        var hotDom = document.createElement("i");
        hotDom.className = "iconfont icon-rehot";
        liDom.appendChild(hotDom);
      }

      ulDom.appendChild(liDom);
    }
    sortDom.appendChild(ulDom);

    var moreDom = document.createElement("div");
    moreDom.classList.add("more");
    var moreTextDom = document.createElement("span");
    moreTextDom.innerHTML = "查看更多";
    var rightDom = document.createElement("i");
    rightDom.className = "iconfont icon-arrow-right";
    moreDom.appendChild(moreTextDom);
    moreDom.appendChild(rightDom);
    sortDom.appendChild(moreDom);
  }
};
