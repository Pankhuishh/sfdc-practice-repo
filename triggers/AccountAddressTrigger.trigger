trigger AccountAddressTrigger on Account (before insert,before update) {
    if(trigger.isInsert || trigger.isUpdate){
            for(account acc: trigger.new){
            if(acc.Match_Billing_Address__c== true)
                acc.ShippingPostalCode=acc.BillingPostalCode;
            }
}
}