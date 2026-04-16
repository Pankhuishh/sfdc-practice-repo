import { LightningElement } from 'lwc';

export default class JsDemo extends LightningElement {
    todayDateTime= new Date();
    
    updateDateTimeUsingCallback() {
        setInterval(function(){
            this.todayDateTime = new Date();
        }, 1000);
    }
    updateDateTimeUsingArrow(){
        setInterval(()=>{
            this.todayDateTime = new Date();
        }, 1000);
    }
}