import { LightningElement } from 'lwc';
import getCloseWonOpportunity from '@salesforce/apex/OpportunityController.getCloseWonOpportunity';
import getCloseLostOpportunity from '@salesforce/apex/OpportunityController.getCloseLostOpportunity';
export default class OppComp3 extends LightningElement {
    oppList;
    handleWonDeal(){
        getCloseWonOpportunity().then(data=>{
            this.oppList=data;           
        }).catch(error=>{
            console.log(error.body.message);
        });
    }
    handleLostDeal(){
        getCloseLostOpportunity().then(data=>{
            this.oppList=data;
        }).catch(error=>{
            console.log(error.body.message);
        });
    }
}