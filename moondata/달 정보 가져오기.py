import requests
import json
from datetime import date
from dateutil.rrule import rrule, DAILY

a = date(2021, 1, 1)
b = date(2021, 12, 31)

key = '서비스키'
url = 'http://apis.data.go.kr/B090041/openapi/service/RiseSetInfoService/getAreaRiseSetInfo'
url2 = 'http://apis.data.go.kr/B090041/openapi/service/LunPhInfoService/getLunPhInfo'

moonrise=''
moonset=''
lunAge=''

for dt in rrule(DAILY, dtstart=a, until=b):
    queryParams = '?' + 'serviceKey' + '='+key
    queryParams += '&' + 'locdate' + '=' + dt.strftime("%Y%m%d")
    queryParams += '&' + 'location' + '=' + "%EC%84%9C%EC%9A%B8"
    queryParams2 = '?' + 'serviceKey' + '='+key
    queryParams2 += '&' + 'solYear' + '=' + dt.strftime("%Y")
    queryParams2 += '&' + 'solMonth' + '=' + dt.strftime("%m")
    queryParams2 += '&' + 'solDay' + '=' + dt.strftime("%d")
    res = requests.get(url+queryParams)
    index=res.text.find('<moonrise>')+10
    moonrise=res.text[index:index+4]
    index=res.text.find('<moonset>')+9
    moonset=res.text[index:index+4]

    
    res2 = requests.get(url2+queryParams2)
    index1=res2.text.find('<lunAge>')+8
    index2=res2.text.find('</lunAge>')
    lunAge=res2.text[index1:index2]
    print('["'+dt.strftime("%Y%m%d")+'",', '"'+moonrise+'",', '"'+moonset+'",', '"'+lunAge+'"],')
print('end')


