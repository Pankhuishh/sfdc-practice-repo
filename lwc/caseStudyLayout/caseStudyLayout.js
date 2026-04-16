import { LightningElement } from 'lwc';

export default class CaseStudyLayout extends LightningElement {
    itemName; //property
    handleNavigation(event){
        this.itemName=event.detail;
        //alert('ON layout selected iten name: '+this.itemName);
    }
    get issearchAccount(){
        return this.itemName==='accountSearch';
    }
    get isCalc(){
        return this.itemName==='calc';
    }
    get isAll(){
        return this.itemName==='all';
    }
    get isGraph(){
        return this.itemName==='graph';
    }
}