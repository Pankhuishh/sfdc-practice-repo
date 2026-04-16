public class LeadProcessor implements Database.Batchable<sObject> {
    
    // 1. The Start method collects the records
    public Database.QueryLocator start(Database.BatchableContext bc) {
        return Database.getQueryLocator('SELECT Id, LeadSource FROM Lead');
    }

    // 2. The Execute method processes each batch of 200 records
    public void execute(Database.BatchableContext bc, List<Lead> scope) {
        for (Lead l : scope) {
            l.LeadSource = 'Dreamforce';
        }
        update scope;
    }

    // 3. The Finish method runs once everything is done
    public void finish(Database.BatchableContext bc) {
        System.debug('Batch Processing Complete');
    }
}