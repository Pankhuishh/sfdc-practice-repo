import { LightningElement,wire } from 'lwc';
import getAll from '@salesforce/apex/OpportunityController.getAll';
import deleteOpportunity from '@salesforce/apex/OpportunityController.deleteOpportunity';
import {refreshApex} from '@salesforce/apex';
//import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import Type from '@salesforce/schema/Account.Type';
//import the service component
import { _toastMsg } from 'c/utilityComp';
export default class OppComp4 extends LightningElement {
selectedRecordId;
    @wire(getAll) oppService;
    columns=[
        { label: 'Opportunity Name', fieldName: 'Name' ,type:'text'},
        { label: 'Stage', fieldName: 'StageName' ,type:'text'},
        {label: 'Amount', fieldName: 'Amount', type:'Currency'}
    ];
    handleRowSelection(event){
        const selectedRows = event.detail.selectedRows; //return selected row 
        this.selectedRecordId= (selectedRows.length > 0 ? selectedRows[0].Id : null);
        
    }
    
    handleDeleteButton(){
        // implement delete logic here
        //const deletedId = this.selectedRecordId;
        //alert('Selected Record id:'+this.selectedRecordId);
        deleteOpportunity({recordId: this.selectedRecordId})
        .then(() => {
            //to display toast message
            /*const eventRef= new ShowToastEvent({
                title: 'COMPLETED',
                message: 'Record deleted successfully.',
                variant: 'success'
            });
            this.dispatchEvent(eventRef);*/
            //alert('Record deleted successfully.');
            _toastMsg(this, 'COMPLETED', 'Record deleted successfully.', 'success');
            const ltdref=this.template.querySelector('lightning-datatable');
            //to get the reference
            ltdref.selectedRows = [];// unselected the rows 
            refreshApex(this.oppService); // refresh the data 
        })
        .catch(error => {
            /*const eventRef= new ShowToastEvent({
                title: 'INCOMPLETE',
                message: error.body.message,
                variant: 'error'
            });
            this.dispatchEvent(eventRef);*/
           // alert(error.body.message);
           _toastMsg(this, 'INCOMPLETE', error.body.message, 'error');
        });
    }
}