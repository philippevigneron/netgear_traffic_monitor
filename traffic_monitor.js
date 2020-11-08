const fs = require('fs');
const m = require('moment');
const Netgear = require('netgear');

const router = new Netgear();

async function getDevices() {
        try {
                console.log('PWD='+process.env.NETGEAR_PSWD);
                const options = { password: process.env.NETGEAR_PSWD };
                await router.login(options);
                const data = await router.getTrafficMeter();
                console.log(data);
                var result = m().format("MM/DD/YYYY") + ',' + data.newTodayUpload + ',' + data.newTodayDownload + ',' + data.newMonthUpload + ',' + data.newMonthDownload + '\n';
                store(result);
        } catch (error) {
                console.log(error);
        }
}

getDevices();

function store(data) {
  fs.appendFile(process.env.TRAFFIC_DATA_FILE, data, function (err) {
  if (err) throw err;
  console.log('Daily traffic saved.');
});
}
