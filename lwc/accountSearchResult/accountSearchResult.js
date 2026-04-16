import { LightningElement ,wire} from 'lwc';
import {publish, MessageContext} from 'lightning/messageService';
import ASC from '@salesforce/messageChannel/AccountSearchChannel__c';
import searchAccountByName from '@salesforce/apex/accountController.searchAccountByName';

export default class AccountSearchResult extends LightningElement {
    @wire(MessageContext) msgCtx;
    accList;
    @wire(searchAccountByName,{inputText:'$userAccountSearchInput'})
    loadData({data,error}){
        if(data){
            this.accList=data;
        }
    }
    columns=[
        {label:'Account Name', fieldName:'Name'},
        {label:'Amount', fieldName:'AnnualRevenue'},
        {label:'Account Rating', fieldName:'Rating'},
    ];
    userAccountSearchInput;
    handleSearch(event){
        this.userAccountSearchInput=event.detail;
        console.log('User Input:' +this.userAccountSearchInput);
    }
    handleRowSelection(event){
        const selectedRows= event.detail.selectedRows;
        const recordId=(selectedRows.length>0?selectedRows[0].Id:null);
        alert('Selected Record id:'+recordId);
        //need to pass payload in the form of array (object)
        publish(this.msgCtx,ASC, {recordId});
    }
}