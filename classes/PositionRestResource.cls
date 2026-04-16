@RestResource(urlMapping='/v1/positions/*')
global class PositionRestResource {
    @HttpGet
    global static String getPositionById() {
        /*  RestContext:
            It is global object that acts as a bridge between the incomming HTTP request
            adn your apex code. it allows to access the raw request data sent by external
            system and control the response sent back.
            RestContext contains two primary objects.
            RestRequest req=RestContext.request
            RestResponse res=RestContext.response
 
            RestContext.request:
            this object holds everthing sent by the client.  */
        RestRequest  req=RestContext.request;
        String requestedURI=req.requestURI;
        System.debug('Requested URI:'+requestedURI);
        // v1/positions/recordId
        String  recordId=requestedURI.subString(requestedURI.lastIndexOf('/')+1);
        try{
            Position__c pos=[SELECT Name, Job_Description__c,Status__c
                    FROM Position__c
                    WHERE Id= :recordId
            ];
            return String.valueOf(pos);

        }catch(Exception ex)
       {
            return 'Record does not exist for this id '+recordId;
       }
     
    }
    @HttpPost
    global static String create(String positionName, String Jobdescription){
        Position__c pos= new Position__c();
        pos.Name=positionName;
        pos.Job_Description__c=Jobdescription;
        try{
            insert pos;
            return 'Record has created succesfully with record ID:'+pos.id;
        
        }catch(Exception e){
            return e.getMessage();
        }
    }
    @HttpDelete
    global static String deletePos(){
        RestRequest  req=RestContext.request;
        String requestedURI=req.requestURI;
        String  recordId=requestedURI.subString(requestedURI.lastIndexOf('/')+1);
        try{
            Position__c pos=[Select Id from Position__c 
            where Id =: recordId] ;
            
            delete pos;
            return recordId +' Has been deleted';
        }catch(Exception e){
            return 'Record Id does not exist'+recordId;
        }

    }
    
    //delete and update
}
