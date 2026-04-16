trigger CandidateTrigger on Candidate__c (before delete) {
    if(trigger.isBefore && trigger.isDelete){
        for(Candidate__c cand:trigger.old){
            list<Job_Application__c> jobList=[Select Name from Job_Application__c 
                where candidate__c=: cand.Id];
            if(jobList.size()>0){
                cand.addError('Associated candidate record with job application can not be deleted');
            }
        }
    }
}