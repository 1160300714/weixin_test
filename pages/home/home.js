Page({
  data: {
    items: ['事项 A', '事项 B', '事项 C']
  },
  onLoad() {
    const that = this;
    wx.request({
      url: 'http://localhost/uptxt.php',
      success(res) {
        that.setData({ items: res.data });
      }
    });
  }
});