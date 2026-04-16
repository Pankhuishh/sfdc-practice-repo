import { LightningElement } from 'lwc';

export default class CaseStudyNavigation extends LightningElement {
    handleSelect(event){
        const selectedItem=event.detail.name;
       // alert('Selected Item: '+selectedItem);
        const eventRef= new CustomEvent('navigation',{detail:selectedItem});
        this.dispatchEvent(eventRef);
    }
}