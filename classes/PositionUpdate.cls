public with sharing class PositionUpdate implements Queueable{
    List<Id> posIds;
    public PositionUpdate(List<Id> posIds){
        this.posIds=posIds;
    }
    public void execute(QueueableContext context){
        User megan=[SELECT  Id,FirstName, LastName
                    FROM User
                    WHERE FirstName = 'Megan' Limit 1
                    ];
        List<Position__c> posList=[SELECT OwnerId
                                    FROM Position__c
                                    WHERE Id in: posIds ];
        for(Position__c pos:posList){
            pos.OwnerId=megan.Id;
        }
        if(!posList.isEmpty()){
            update posList;
        }                      
    }
}