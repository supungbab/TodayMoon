# TodayMoon
> 🌕 오늘의 달
> https://todaymoon.kro.kr

<br />

## 서비스 소개
- 오늘의 달을 확인할 수 있습니다.

<br />

## 주요 기능
- 오늘의 달 모양 확인
- 날짜 확인
- 월출 / 월몰 확인
- CSS3 Animation
- 2021년 모든 달 모양 확인 가능
- 컴포넌트 형식으로 데이터 변경 시 페이지 이동없음

<br />

## 기술 스택
- HTML5/CSS3
- JavaScript
- 구글 클라우드 플랫폼 < 만료로 인하여 사용 X

<br />

## 설명
- 현재
선언적 프로그래밍 기법과 컴포넌트 추상화 공부를 하면서 정적으로 되어있던 페이지를 이에 맞춰 재수정 하였습니다. 또한 버튼 이용하여 2021년도의 달 모양을 페이지 전환 없이 볼 수 있습니다.
과거에는 GCF 를 이용해 api를 불러왔지만 사용기간 만료로 데이터를 저장해 export와 import 를 이용해 데이터를 불러와 사용하게 만들었습니다.

- 과거
저장소는 github를 이용했습니다. 공공데이터센터에서 api를 불러왔으며
웹 단에서는 크로스도메인이 발생하므로 google cloud functions 를 이용해 처리 후 웹 단에서 ajax로 호출하여 json 형식으로 받아 가공 후 출력하였습니다.
@media 처리를 하여 모바일에서도 편하게 볼 수 있도록 하였습니다.

웹사이트 제작과정에서 크로스도메인 이슈 발생해 서버에서 'Access-Control-Allow-Origin', '*' 를 작성하는 방법으로 이를 해결하였습니다.

<br />

## 참고 사이트
- https://codepen.io/xtoq/pen/ENKXMv
- https://codepen.io/jomohop/pen/ExxoGQR
- https://codepen.io/marcjfj/pen/EOrerZ
