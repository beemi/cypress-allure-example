describe('allure report spec', function () {

    it('should be on UK site', function () {

        // Allure Report
        cy.allure()
            .feature('Visit uk site feature')
            .epic('visit UK site')
            .description('User goes to UK site')
            .severity('critical')
            .tms('docs', 'https://on.cypress.io/interacting-with-elements')
            .label('tag', 'VISIT,UK')
            .label('owner', 'RAJASEKHAR REDDY BEEMIREDDY')
            .testID("JIRA-100")
            .testDescription("User goes to UK site on chrome browser")
            .descriptionHtml("<h1> USER ON UK SITE </h1>")

        cy.visit("/uk");
        cy.url().should("include", "/uk");
    });

    it('should be on EU site', function () {

        // Allure Report
        cy.allure()
            .feature('Visit EU site feature')
            .epic('visit EU site')
            .description('User goes to EU site')
            .severity('blocker')
            .tms('docs', 'https://on.cypress.io/interacting-with-elements')
            .label('tag', 'VISIT,EU')
            .label('owner', 'RAJASEKHAR REDDY BEEMIREDDY')
            .testID("JIRA-101")
            .testDescription("User goes to EU site on chrome browser")
            .descriptionHtml("<h1> USER ON EU SITE </h1>")

        cy.visit("/eu");
        cy.url().should("include", "/eu");
    });

    it('should be on DE site', function () {

        // Allure Report
        cy.allure()
            .feature('Visit DE site feature')
            .epic('visit DE site')
            .description('User goes to DE site')
            .severity('normal')
            .tms('docs', 'https://on.cypress.io/interacting-with-elements')
            .label('tag', 'VISIT,EU')
            .label('owner', 'RAJASEKHAR REDDY BEEMIREDDY')
            .testID("JIRA-101")
            .testDescription("User goes to EU site on chrome browser")
            .descriptionHtml("<h1> USER ON EU SITE </h1>")

        cy.visit("/de");
        cy.url().should("include", "/de");
    });
});