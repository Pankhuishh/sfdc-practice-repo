//import Title from '@salesforce/schema/Contact.Title';
import { LightningElement ,api,wire} from 'lwc';
//getRecord works with wire
import {getRecord,getFieldValue} from 'lightning/uiRecordApi'
import CITY from '@salesforce/schema/Account.BillingCity';
import COUNTRY from '@salesforce/schema/Account.BillingCountry';
import STREET from '@salesforce/schema/Account.BillingStreet';
import STATE from '@salesforce/schema/Account.BillingState';
import NAME from '@salesforce/schema/Account.Name';

//lds can fetch only 1 data
//for more than one use apex programming
export default class AccountMap extends LightningElement {
    mapMarkers;
   @api recordId;
    @wire(getRecord,{recordId:'$recordId',fields:[NAME,STREET,STATE,CITY,COUNTRY]})
    loadData({data,error}){
        if(data){
            this.mapMarkers=[
            {
                location:{
                Street:getFieldValue(data,STREET),
                City:getFieldValue(data,CITY),
                State:getFieldValue(data,STATE),
                Country:getFieldValue(data,COUNTRY),
                
            },
            title:getFieldValue(data,NAME)
            }];
        }

    }
    /* mapMarkers=[
        {
            location:{
                Street:'INFOSPACE, Sector 135',
                City:'Noida',
                State:'UP',
                Country:'India',
                
            },
            title:'Accenture Pvt Ltd',
            description:'IT Company'
        }
    ];*/
}