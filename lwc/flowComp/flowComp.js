import { LightningElement } from 'lwc';

export default class FlowComp extends LightningElement {
    firstName;
    lastname;
    isShow=false;
    handleFname(event){
        this.firstName=event.target.value;
    }
    handleLname(event){
        this.lastname=event.target.value;
    }
    handleClick(){
        this.isShow=true;
        this.flowInputVariables=[{
            name:'fName',
            type:'String',
            value:this.firstName
        },{
            name:'lName',
            type:'String',
            value:this.lastname
        }];
    }
    handleFlowStatus(event){
        const status=event.detail.status;
        //alert('Flow: '+status);
        if(status==='FINISHED'){
            this.isShow=false;
            this.firstName='';
            this.lastname='';
        }
    }
}