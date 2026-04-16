public with sharing class DemoScheduleApex implements Schedulable{
    public void execute(SchedulableContext sc) {
        PositionBatchApex job=new PositionBatchApex();
        Database.executeBatch(job,5);
    }
}