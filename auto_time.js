const cron = require("node-cron")
const TimeSetHelp = require("./time_set_help")

function main() {
	const API_URI = "http://api.m.taobao.com/rest/api3.do?api=mtop.common.getTimestamp"
	const timeSetHelp = new TimeSetHelp(API_URI)

	cron.schedule('* * * * * *', async () => {
		console.log("-------------定时任务开始执行-------------")
		const { timeYYMMDDHHMMSS, timeHHMMSS } = await timeSetHelp.getServerTime()
		timeSetHelp.notifySysTime(timeYYMMDDHHMMSS, timeHHMMSS)
	})
}

main()