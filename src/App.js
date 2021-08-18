import { dayCalcDisplay } from './daytran.js'
import { todayFormat, getToday } from './utils.js'
import { moon_Data } from "./moonData.js";
import RenderContainer from './RenderContainer.js';
import RenderButton from './RenderButton.js'

export default class App{
    constructor($app){
        let today = getToday(0);
        let todayLunar=dayCalcDisplay(today.year,today.month,today.day);
        const tempToday = todayFormat(today,0);
        let index=0;
        for(let i=0;i<moon_Data.length;i++){
            if(moon_Data[i][0]==tempToday)
                index=i;
        }
        this.state = {
            today,
            todayLunar,
            index
        };
        this.renderContainer = new RenderContainer({
            $app,
            initialState: this.state
        });
        this.renderButton = new RenderButton({
            $app,
            initialState: this.state,
            onClick : (state)=>{
                this.setState(state)
            }
        });
    }
    setState(nextState){
        //console.log(this);
        this.renderContainer.setState(nextState);
    }
}