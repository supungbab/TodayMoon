export function getToday(dayPlusMinus){
    let date = new Date();
    date.setDate(date.getDate()+dayPlusMinus)
    const year = date.getFullYear();
    const month = ("0" + (1 + date.getMonth())).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);

    return {
        year,
        month,
        day
    };
}

export function todayFormat(date,type){
    if(type==0){
        return date.year+""+date.month+""+date.day;
    }else if(type==1){
        return date.year+"년 "+date.month+"월 "+date.day+"일";
    }else{
        return 0;
    }
}

export function timeFormat(time){
    return time[0]+time[1]+" : "+time[2]+time[3];
}