import { LightningElement ,api} from 'lwc';

export default class SimpleCalc extends LightningElement {
    @api firstNumber=15;
    @api secondNumber=5;
    result;
    isShowResult=false;

    addNumber() {
        //alert('clicked on add button');
        
        this.result=eval(this.firstNumber)+eval(this.secondNumber);
        this.isShowResult= true;
        
        
    }
    subNumber(){
        this.result=this.firstNumber- this.secondNumber;      
        this.isShowResult= true;
        
    }
    mulNumber(){
        this.result=this.firstNumber*this.secondNumber;
        this.isShowResult= true;
        
    }
    divNumber(){
        this.result=this.firstNumber/ this.secondNumber;            
        this.isShowResult= true;

    }
    get resultClass(){
        return this.result>=0?'slds-badge slds-theme_success':'slds-badge slds-theme_error';
    }
    handleBlurFirst(event){
        this.firstNumber=event.target.value;
    }
    handleBlurSecond(event){
        this.secondNumber=event.target.value;
    }
}