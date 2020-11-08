This program will query a netgear router, ask for traffic data daily, and store the data in a csv file for future trending and processing.

Required elements:
Node.js (I used v14)
Netgear, moment, fs modules

Install node and the modules (npm install ...)

Using netgear module: https://www.npmjs.com/package/netgear
The function getTrafficMeter() will return (in MB) as below:
{
  newTodayUpload: 1020,
  newTodayDownload: 10734,
  newMonthUpload: 9908,
  newMonthDownload: 103577
}

Connecting to netgear API requires netgear admin password.  It is set as an environment variable when running the scrypt

Running the script:
Edit cron using 'crontab -e'
Add the line: 59 23 * * * export TRAFFIC_DATA_FILE=[PATH_DATA_FILE];NETGEAR_PSWD=[PASSWORD];/usr/bin/node /home/pi/traffic_monitor.js >> /home/pi/traffic_monitor.log 2>&1
Replace [PASSWORD] by the netgear admin password
Replace [PATH_DATA_FILE] by the netgear admin password
59 23 * * * means that cron will execute the command every day of month at 23:59.
The last part of the command will save the output of the command in a log file.
