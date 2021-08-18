import { todayFormat, timeFormat } from "./utils.js";
import { moon_Data, moon_Line } from "./moonData.js";

export default class renderContainer{
    constructor({$app, initialState}){
        this.state = initialState;
        
        this.$target = document.createElement('div');
        this.$target.className = "container";
        $app.appendChild(this.$target);

        this.render();
    }
    setState(nextState){
        this.state = nextState;
        this.render();
    }
    render(){
        this.$target.innerHTML='';
        const textData = ['Solar','Lunar','MOONRISE','MOONSET'];
        const textData2 = [
            todayFormat(this.state.today,1),
            todayFormat(this.state.todayLunar,1),
            timeFormat(moon_Data[this.state.index][1]),
            timeFormat(moon_Data[this.state.index][2])
        ];
        const $moon = document.createElement('div');
        $moon.className = 'moon';
        this.$target.appendChild($moon);

        let lunAge = moon_Data[this.state.index][3];
        lunAge=Math.round(lunAge);
        if(0<lunAge&&lunAge<=9){
            $moon.style.borderRight = moon_Line[lunAge]+"px solid #eee"
        }
        else if(10<=lunAge&&lunAge<=15){
            $moon.style.background = '#eee';
            $moon.style.borderLeft = moon_Line[lunAge]+"px solid #333";
        }
        else if(16<=lunAge&&lunAge<=23){
            $moon.style.background = '#eee';
            $moon.style.borderRight = moon_Line[lunAge]+"px solid #333"
        }
        else if(24<=lunAge&&lunAge<=29){
            $moon.style.background = '#333';
            $moon.style.borderLeft = moon_Line[lunAge]+"px solid #eee";
        }

        const $name = document.createElement('div');
        $name.className = 'name';
        $name.innerText = 'MOON';
        this.$target.appendChild($name);
        
        const $details = document.createElement('div');
        $details.className = 'details';
        this.$target.appendChild($details);

        const $ul = document.createElement('ul');
        $details.appendChild($ul);

        $ul.innerHTML = textData.map((text, index)=>{
            return `<li><span>${text}</span><span id="${text.toLowerCase()}">${textData2[index]}</span></li>`
        }).join('')
    }
}