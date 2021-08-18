import { getToday } from './utils.js'
import { dayCalcDisplay } from './daytran.js'

export default class RenderButton{
    constructor({$app, initialState, onClick}){
        this.state = initialState;
        this.$target = $app;
        this.onClick = onClick;
        this.test=0;
        this.render();
    }
    render(){
        let $prev = document.createElement('button');
        $prev.className = 'moon-button moon-button-prev';
        this.$target.appendChild($prev);
        $prev.innerHTML = '<svg class="button-icon" viewBox="0 0 100 100"><path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z" class="arrow"></path></svg>'
        $prev.addEventListener('click',()=>{
            this.state.index -= 1;
            let today = getToday(--this.test);
            this.state.today = today
            this.state.todayLunar = dayCalcDisplay(today.year,today.month,today.day);
            this.onClick(this.state);
        })

        let $next = document.createElement('button');
        $next.className = 'moon-button moon-button-next';
        this.$target.appendChild($next);
        $next.innerHTML = '<svg class="button-icon" viewBox="0 0 100 100"><path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z" class="arrow" transform="translate(100, 100) rotate(180) "></path></svg>'
        $next.addEventListener('click',()=>{
            this.state.index += 1;
            let today = getToday(++this.test);
            this.state.today = today;
            this.state.todayLunar = dayCalcDisplay(today.year,today.month,today.day);
            this.onClick(this.state);
        })
    }
}