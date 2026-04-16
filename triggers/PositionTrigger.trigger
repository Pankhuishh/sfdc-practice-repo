trigger PositionTrigger on Position__c (before insert,before update,after update,after insert) {
    switch on trigger.operationType {
         when BEFORE_INSERT{
            PositionTriggerHandler.beforeInsert(trigger.new);
        }
        when BEFORE_UPDATE{
            PositionTriggerHandler.beforeUpdate(trigger.new,trigger.oldMap);
        }
        when AFTER_UPDATE{
            PositionTriggerHandler.afterUpdate(trigger.new,trigger.oldMap);
        }
        when AFTER_INSERT{
            PositionTriggerHandler.afterInsert(trigger.new);
        }
       
    }
}