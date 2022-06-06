const request = require("request")
const moment = require("moment")
const win = require("node-windows")

class TimeSetHelp {

	#API_URL

	constructor(apiUri) {
		this.#API_URL = apiUri
	}

	/**
	* 获取远程服务器时间
	*/
	getServerTime() {
		return new Promise((resolve) => {
			request({
				url: this.#API_URL,
				method: "GET",
				json: true,
				headers: {
					"content-type": "application/json",
				},
			}, function (_error, response, _body) {
				const { data } = response.body
				// hh:mm:ss
				const timeHHMMSS = moment(parseInt(data.t)).format("hh:mm:ss")
				// yy-mm-dd hh:mm:ss
				const timeYYMMDDHHMMSS = moment(parseInt(data.t)).format("YYYY-MM-DD hh:mm:ss")
				resolve({ timeYYMMDDHHMMSS, timeHHMMSS })
			})
		})
	}

	/**
		* 这里入参是服务器返回给我的 字符串类型的时间戳
		* @param {YY-MM-DD hh:mm:ss} date 
		* @param {hh:mm:ss} time 
	*/
	notifySysTime(date, time) {
		console.log('服务器转换时间:~~~~~~~~~~~', date + "~~~" + time)
		win.elevate(`cmd /c date ${date}`)
		win.elevate(`cmd /c time ${time}`)
		console.log("-------------设置系统时间成功-------------")
	}
}

module.exports = TimeSetHelp