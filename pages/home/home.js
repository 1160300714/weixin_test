Page({
  data: {
    list: []
  },
  onShow() {
    console.log(app.globalData.userInfo)
    var that=this;
    wx.request({
      url: 'http://localhost/showlist.php',
      data: {},
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: 'POST',
      success: function(res) {
        console.log(res.data)
        if (res.data.constructor === Array) {
          that.setData({
            list: res.data
          })
        }else{
          wx.showModal({
            title: '暂无数据',
            content: '请发布小目标',
          })
        }
      }

    })
  }
})