public with sharing class PositionBatchApex implements Database.Batchable<sObject>{
    //Query all positions that need to update
    public Database.QueryLocator start(Database.BatchableContext bc){
        //need to fetch position record with Job Description feilds 
        String query='SELECT Job_Description__c from Position__c';
        return Database.getQueryLocator(query);
    }
    public void Execute(Database.BatchableContext bc,List<Position__C> posList){
        for(Position__c pos: posList){
            pos.Job_Description__c= 'Updated by Batch Apex class';
        }
        update posList;
    }
    public void finish(Database.BatchableContext bc){
        System.debug('Batch Processing for position has completed');
    }
}