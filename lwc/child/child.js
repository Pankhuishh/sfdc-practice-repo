import { LightningElement } from 'lwc';

export default class Child extends LightningElement {
    handleClick()
    {
        const eventRef = new CustomEvent('demo', {composed:true, bubbles:true, detail: 'Message from Child'});
        this.dispatchEvent(eventRef);
    }
}