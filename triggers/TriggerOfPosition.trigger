trigger TriggerOfPosition on Position__c (before update) {
    if(trigger.isUpdate){
        for(Position__c pos: trigger.new){
            if(pos.Date_Closed__c < Date.Today()){
                if(pos.Status__c=='Open' && pos.Sub_Status__c=='Approved'){
                    pos.Status__c='Close';
                    pos.Sub_Status__c= 'Filled' ;
            }
       }
    }
  }
}