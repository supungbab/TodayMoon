@import url(https://fonts.googleapis.com/earlyaccess/nanumgothic.css);

.nanumgothic * {
 font-family: 'Nanum Gothic', sans-serif;
}

* {
    box-sizing: border-box; /* 오페라(Opera) */
    -moz-box-sizing: border-box; /* 파이어폭스(Firefox)*/
    -webkit-box-sizing: border-box; /* 웹킷(Webkit) & 크롬(Chrome) */
    color: white;
}
html{
    background: url(../img/background.png);
    background-size: contain;
    overflow: hidden;
}
html,body,header,footer{
    width:100%;
    margin:0 auto;
}
body{
    display:flex;
}
h1{
    font-weight:900;
    width: 100;
    color: rgb(83, 133, 145);
    letter-spacing: 5px;
    font-size: 75px;
    text-align: center;
    transform: translateY(-35px);
    text-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
}
.container{
    align-self:center;
    padding: 0px 10px;
    position: relative;
    width: 90%;
    margin: 20px;
 /* border: 2px rgb(83, 133, 145) solid; */
    box-shadow: 0px 5px 15px -6px rgba(0,0,0,0.75);
    border-radius: 20px;
    max-width: 450px;
    margin: 10px auto;
    background: rgba(5, 13, 25, 0.569);
}
#details{
    display: flex;
    text-align: left;
    align-self:center;
    font-size: 0.9em;
}

#details span{
/*   display: block; */
    color: rgb(83, 133, 145);
    display: inline-block;
}

#details span:nth-child(odd){
    width: 150px;
    border-left: 2px solid rgb(83, 133, 145);
    padding-left: 10px;
}
#details span:nth-child(even){
    align-self: flex-end;
    color:#CDC5BD;
    text-align: right;
    width: 150px;
    border-right: 2px solid #CDC5BD;
    padding-right: 10px;
}
li{
    list-style: none;
    margin: 25px auto;
    padding:0px;
}
ul{
    margin: 0px auto;
    padding: 0px;
    padding-bottom: 25px;
}
#moon{
    text-align: center;
}
nav{
    position: fixed;
    left: 0;
    top: 0;
}
@media ( max-width: 1023px ) {
  
}
@media ( max-width: 767px ) {
    html,body,header,footer{
        width:100%;
        height: 100%;
        margin:0 auto;
    }
    header{
        padding: 50px;
        height: 20%;
    }
    header>span{
        font-size: 3em;
        font-style: bold;
    }
    nav{
        position: fixed;
        left: 0;
        top: 0;
    }
    .content{
        padding: 50px;
        height: 50%;
        text-align: center;
    }
    .content>.img>img{
        width: 200px;
    }
    .date>span{
        font-size: 3em;
        font-style: bold;
        text-align: center;
    }
    footer{
        padding: 20px;
        height: 30%;
    }
}
