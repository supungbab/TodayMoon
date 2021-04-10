const http = require("http");
const url = 'apis.data.go.kr';
const Path = '/B090041/openapi/service/RiseSetInfoService/getAreaRiseSetInfo';
const key = "호출키";
let queryParams = Path + '?' + encodeURIComponent('ServiceKey') + '='+key;
let gYear=new Date().getFullYear();
let gMonth=new Date().getMonth()+1+"";
let gDay=new Date().getDate()+"";
if(gMonth.length==1) gMonth="0"+gMonth;
if(gDay.length==1) gDay="0"+gDay;
queryParams += '&' + encodeURIComponent('locdate') + '=' + encodeURIComponent(gYear+gMonth+gDay);
queryParams += '&' + encodeURIComponent('location') + '=' + encodeURIComponent('서울');

let whitelist = ['http://127.0.0.1:5500', 'https://todaymoon.kro.kr/']

let moonrise, moonset;

exports.todayMoon = (req, resp) => {
  resp.set('Access-Control-Allow-Origin', '*');
  const response = {
    statusCode: 200,
    body: JSON.stringify('Hello from Lambda!'),
  };
  if (req.method === 'OPTIONS') {
    // Send response to OPTIONS requests
    resp.set('Access-Control-Allow-Methods', 'GET');
    resp.set('Access-Control-Allow-Headers', 'Content-Type');
    resp.set('Access-Control-Max-Age', '3600');
    resp.status(204).send('');
  }
  else {
    const options = {
      host: url,
      path: queryParams,
      method: 'GET',
      headers: {
        'Content-Type': 'application/xml'
      }
    }
    const reques = http.request(options, (res) => {
        response.body = JSON.stringify(res.headers);
        //console.log('Headers:', JSON.stringify(res.headers)); // 이게 중요
        //console.log('Status:', res.statusCode);
        let body = '';
        res.setEncoding('utf8');
        
        res.on('data', (chunk) => body += chunk);
        
        res.on('end', () => {
            //console.log('Successfully processed HTTPS response');
            //콜백 형식을 json으로 바꾸면 된다.
            //response.body = JSON.stringify(body);
            let index=body.indexOf("<moonrise>")+10;
            moonrise=body.substr(index,4);
            index=body.indexOf("<moonset>")+9;
            moonset=body.substr(index,4);
            response.body = JSON.stringify({moonrise,moonset});
            resp.status(200).send(response);
        });
    });
    //reques.on('error', callback);
    reques.end();
  }
};