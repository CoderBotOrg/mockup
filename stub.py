# pip3 install Flask
# python3 server.py

from flask import Flask
from flask import jsonify
app = Flask(__name__)

systemStatsData = {
	'battery' : {
		'status' : 0,
		'level' : 55
	},
	'network' : {
		'type' : 'wifiAP',
		'ssid' : '',
		'passphrase' : '',
		'level' : 90
	},
	'load' : {
		'totalRAM' : 2048,
		'usedRAM' : 400,
		'avgLoad' : [20,4],
		'temp' : 34
	}
}

hwInfoData = {
	'model' : 'CDRBT-01-2017-1',
	'serial' : '740129387591e',
	'core-sw-version' : '0.3.1a',
	'web-sw-version' : '0.1-prelease',
	'last-update' : '2018-1-1',
	'name' : 'CoderBot di Antonio',
	'raspbian-version' : '9.3-stretch',
}

@app.route("/api/systemStats")
def systemStats():
	return jsonify(systemStatsData)

@app.route("/api/hwInfo")
def hwInfo():
	return jsonify(hwInfoData)

app.run(debug=True)