public with sharing class PositionController {
    @AuraEnabled(cacheable=true)
    public static List<Position__c> getAll(){
        return [Select Name, Date_Opened__c,Date_Closed__c,Department__c, Location__c 
        from Position__c
        With SECURITY_ENFORCED];
    }
}