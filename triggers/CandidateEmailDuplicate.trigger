/*trigger CandidateEmailDuplicate on SOBJECT (before insert,before update) {
    switch on trigger.OperationType {
        when  BEFORE_INSERT{
            set<string> emailSet= new set<string>();
           // List<Candidate__c> cand= trigger.new;
            for(Candidate__c cand:[Select Email__c from Candidate__c]){
                if(cand.Email__c!=null){
                    emailSet.add(cand.Email__c);
                }
                
            }
            for(Candidate__c c:Trigger.new){
                if(emailList.contains(cand.Email__c)){
                   cand.addError('Email already exists');
        }
        //Map<String, Candidate__c>existingEmail = new Map<String, Candidate__c>();
        when BEFORE_UPDATE {
             List<Candidate__c> cand= trigger.old;
            for(Position__c cand:[Select Email__c from Candidate__c]){
                if(cand.Email!=null){
                    emailSet.add(cand.Email);
                }
                else{
                    cand.add('Email exist');
                }
            }
        }
    }
}*/
trigger CandidateEmailDuplicate on Candidate__c (before insert,before update,before delete)
{
    if(trigger.isBefore)
    {
        // Prevent to deletion if candidate is assiciated with Job Application
        if(Trigger.isDelete)
        {
            for(Candidate__c cand:Trigger.old)
            {
                List<Job_Application__c> jobList=[SELECT NAME FROM Job_Application__c WHERE candidate__c= :cand.Id ];
                if(jobList.size()>0)
                {
                    cand.addError('Assocaiated candidate record with Job Application can not be deleted');
                }
            }
        }
        // Verify duplcate email for the candidate record. Throw the error message if if has found.
        if(trigger.isInsert)
        {
            // To Retrive all Existing Emails from candidate records
            Set<String> emailList=new Set<String>();
            for(Candidate__c cand:[SELECT Email__c From Candidate__c])
            {
                if(cand.Email__c!=null)
                {
                    emailList.add(cand.Email__c);
                }
            }
            // To Verify the duplicate Email
            for(Candidate__c cand:Trigger.new)
            {
                if(emailList.contains(cand.Email__c))
                {
                    cand.addError('Duplicate email has found');
                }
            }
        }
        if(trigger.isUpdate)
        {
            // To Retrive all Existing Emails from candidate object
            List<String> emailList=new List<String>();
            for(Candidate__c cand:[SELECT Email__c From Candidate__c])
            {
                if(cand.Email__c!=null)
                {
                    emailList.add(cand.Email__c);
                }
            }
            // To Verify the duplicate Email
            for(Candidate__c cand:Trigger.new)
            {
                Candidate__c oldCand=trigger.oldMap.get(cand.Id);
                if(emailList.contains(cand.Email__c) &&  cand.Email__c!=oldCand.Email__c)
                {
                    cand.addError('Duplicate email has found');
                }
            }
        }    
    }
}