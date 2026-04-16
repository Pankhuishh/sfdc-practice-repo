import { LightningElement ,wire} from 'lwc';
import {subscribe,MessageContext} from 'lightning/messageService';
import ASC from '@salesforce/messageChannel/AccountSearchChannel__c';
//To navigate 
import { NavigationMixin } from 'lightning/navigation';
//wrapping the component
export default class AccountDetail extends NavigationMixin(LightningElement) {
    accountId;//defined the property to hold record , Received from publisher
    @wire(MessageContext) msgCtx;
    connectedCallback(){
        subscribe(this.msgCtx,ASC,(message)=>{
            this.accountId=message.recordId;
        });
    }
    viewPage(){
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                recordId:this.accountId,
                objectApiName:'Account',
                actionName:'view'
            }
        });
    }
    editPage(){
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                recordId:this.accountId,
                objectApiName:'Account',
                actionName:'edit'
            }
        });
    }
}