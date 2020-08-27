const app = getApp()

function http (url, method, data) {
    return new Promise((resolve, reject) => {
        wx.request({
            url: url,
            data: data,
            method: method,
            success: function(res) {
                if(res.statusCode !== 200) {
                    reject({err: res.errMsg, statusCode: res.statusCode})
                    return 
                }

                resolve(res)
            },
            fail: function(err) {
                reject(err)
            }
        })
    })
}

module.exports = {
    http
}