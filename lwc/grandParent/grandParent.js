import { LightningElement } from 'lwc';

export default class GrandParent extends LightningElement {
    message;
    handleDemo(event){
        this.message=event.detail;
    }
}