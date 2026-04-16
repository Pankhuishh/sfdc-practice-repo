public with sharing class CandidateService {
   @future
   public static void updateCandiadteCity(List<Id> candidateIds,String newCity,String StateProvince){
        List<Candidate__c> candList= [SELECT  City__c,State_Province__c
        FROM Candidate__c
        WHERE Id in: candidateIds
        ];
        for(Candidate__c cand:candList){
            cand.City__c=newCity;
            cand.State_Province__c=StateProvince;
        }
        update candList;
   }
}