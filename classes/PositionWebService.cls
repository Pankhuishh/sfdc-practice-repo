global class PositionWebService {
    webservice static String save(String posName,String jobDesc){
        Position__c pos= new Position__c();
        pos.Name=posName;
        pos.Job_Description__c=jobDesc;
        try{
            insert pos;
            return pos.Id;
        }catch(Exception ex){
            return ex.getMessage();
        }
    }
    webservice static String deletePosition(String recordId){
        Position__c pos= new Position__c(Id=recordId);
        try{
            delete Pos;
            return 'deleted record successfully';
        }catch(Exception ex){
            return ex.getMessage();
        }
    }
    
}