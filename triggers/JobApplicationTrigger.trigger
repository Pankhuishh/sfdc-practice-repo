trigger JobApplicationTrigger on Job_Application__c (before insert) {
    switch on trigger.OperationType {
        when  BEFORE_INSERT{
            List<Job_Application__c> jobAppList = Trigger.new;
            for(Job_Application__c jobApp : jobAppList){
                if(JobApp.Status__c==null)
                    jobApp.Status__c = 'Open';
                if(jobApp.Status__c == 'Open' && jobApp.Stage__c==null)
                    jobApp.Stage__c='New';
                if(jobApp.Position__c==null){
                    jobApp.Position__c.addError('Position required');
                }
            }
        }
        when BEFORE_UPDATE{
                for(Job_Application__c jobApp : Trigger.new){
                    if(jobApp.Position__c==null)
                        jobApp.Position__c.addError('Position required');
                }
            }
        
    }
}