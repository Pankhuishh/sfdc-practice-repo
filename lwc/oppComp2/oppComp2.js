import { LightningElement ,wire} from 'lwc';
import getCloseWonOpportunity from '@salesforce/apex/OpportunityController.getCloseWonOpportunity';
import Name from '@salesforce/schema/Opportunity.Name';
import StageName from '@salesforce/schema/Opportunity.StageName';
export default class OppComp2 extends LightningElement {
    oppList;
    @wire(getCloseWonOpportunity)
    loadData({data,error}){
        
        if(data){
            this.oppList=[];
            data.forEach(opp=>{
                const obj={
                    Id:opp.Id,
                    Name:opp.Name,
                    StageName:opp.StageName, 
                    Amount:opp.Amount,
                    Commission:opp.Amount*0.2
                };
                this.oppList.push(obj);
            });
        }else if(error){
            this.oppList=[];
        }
    }
}