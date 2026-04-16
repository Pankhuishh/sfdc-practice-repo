import { LightningElement } from 'lwc';

export default class Parent extends LightningElement {
    message;
    handleDemo(event){
        this.message=event.detail;
    }
}