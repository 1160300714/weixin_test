var app =getApp();
var util = require('../../utils/util.js')
Page({
  data: {
    list: [],
    txt:''
  },
  onLoad(e){
    console.log(app.globalData.userInfo);

    this.setData({
      list: wx.getStorageSync('storage_list')
    })
  },
  bindinput(e){
    this.setData({
      txt:e.detail.value
    })
  },
  uptxt(){
    let that=this;
    let userInfo = app.globalData.userInfo;
    let time = util.formatTime(new Date());
    let data={
      name: userInfo.nickName,
      head: userInfo.avatarUrl,
      txt:this.data.txt,
      time: time
    }
    wx.request({
      url: 'http://localhost/uptxt.php',
      data: data,
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: 'POST',
      success: function (res) {
        console.log(res.data)
        if (res.data == that.data.txt){
          let storage_list = wx.getStorageSync('storage_list');
          if (storage_list){
            storage_list.push(res.data);
          }else{
            storage_list = [res.data];
          }
          wx.setStorageSync('storage_list', storage_list)
          that.setData({
            list: storage_list
          })
        }
      }

    })
  }
})