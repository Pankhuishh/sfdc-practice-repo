public with sharing class OpportunityController {

    @AuraEnabled(cacheable=true)
    public static List<Opportunity> getAll() {
        return [SELECT Name, StageName, Amount
         FROM Opportunity
         With SECURITY_ENFORCED
         ];
    }
    @AuraEnabled(cacheable=true)
    public static List<Opportunity> getCloseWonOpportunity() {
        return [SELECT Name, StageName, Amount
         FROM Opportunity
         Where StageName = 'Closed Won'
         With SECURITY_ENFORCED
         ];
    }
    @AuraEnabled(cacheable=true)
    public static List<Opportunity> getCloseLostOpportunity() {
        return [SELECT Name, StageName, Amount
         FROM Opportunity
         Where StageName = 'Closed Lost'
         With SECURITY_ENFORCED
         ];
    }
    @AuraEnabled
    public static void deleteOpportunity(String recordId){
        Opportunity opp=[SELECT StageName FROM Opportunity 
        WHERE Id=:recordId
        WITH SECURITY_ENFORCED
        ];
        if(opp.StageName=='Closed Won'){
            throw new AuraHandledException('Cannot delete Closed Won Opportunity');
        }
        else{
            delete opp;
        }
    }
}