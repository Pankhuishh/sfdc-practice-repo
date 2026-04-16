@isTest
private class LeadProcessorTest {
    @isTest
    static void testBatchClass() {
        // Create 200 Lead records
        List<Lead> leads = new List<Lead>();
        for (Integer i = 0; i < 200; i++) {
            leads.add(new Lead(
                LastName = 'Test' + i,
                Company = 'TestCompany' + i,
                Status = 'Open - Not Contacted'
            ));
        }
        insert leads;

        // Execute the batch between startTest and stopTest
        Test.startTest();
        LeadProcessor lp = new LeadProcessor();
        Database.executeBatch(lp);
        Test.stopTest();

        // Verify the results
        Integer count = [SELECT COUNT() FROM Lead WHERE LeadSource = 'Dreamforce'];
        System.assertEquals(200, count, 'All 200 leads should have been updated.');
    }
}