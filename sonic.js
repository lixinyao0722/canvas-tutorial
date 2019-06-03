//0-状态获取失败 1-sonic首次 2-页面刷新 3-局部刷新 4-完全cache
sonic.getSonicData(function (sonicStatus, reportSonicStatus, sonicUpdateData) {
  if (sonicStatus == 1) { // 首次打开页面
    //首次没有特殊的逻辑处理，直接执行sonic完成后的逻辑，比如上报等
  } else if (sonicStatus == 2) { // 模板变更，页面刷新
  } else if (sonicStatus == 3) { // 数据变更，局部刷新
    //局部刷新的时候需要更新页面的数据块和一些JS操作
    var html = '';
    var id = '';
    var elementObj = '';
    for (var key in sonicUpdateData) {
      id = key.substring(1, key.length - 1);
      html = sonicUpdateData[key];
      elementObj = document.getElementById(id + 'Content');
      elementObj.innerHTML = html;
    }
  } else if (sonicStatus == 4) { // 缓存最新，无需变更
  }
  afterInit(reportSonicStatus);
});
