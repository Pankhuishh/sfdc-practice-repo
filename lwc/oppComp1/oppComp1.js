import { LightningElement ,wire} from 'lwc';
import getAll from '@salesforce/apex/OpportunityController.getAll';
export default class OppComp1 extends LightningElement {
    @wire(getAll) Service;
    //return data and error
    // opportunityService.data return the list of opportunity
}