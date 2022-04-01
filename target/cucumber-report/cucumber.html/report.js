$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("EligibilityChecker.feature");
formatter.feature({
  "line": 1,
  "name": "Eligibility Checker",
  "description": "",
  "id": "eligibility-checker",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4527820600,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Wales Test Ticket - Acceptance Criteria",
  "description": "",
  "id": "eligibility-checker;wales-test-ticket---acceptance-criteria",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am a person from Wales",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I put my GP Practice",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I Put my Dental Practice",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I put my Date Of Birth",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I live with a partner or not",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I put my or my partner claim any benefits or tax credits?",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I Put my pregnant or have you given birth in the last 12 months?",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I put my have an injury or illness caused by serving in the armed forces?",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I put my or my partner live permanently in a care home?",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I put my and my partner have more than £16,000 in savings, investments or property?",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should get a result of whether I will get help or not",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmAPersonFromWales()"
});
formatter.result({
  "duration": 701713600,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iPutMyGPPractice()"
});
formatter.result({
  "duration": 289146100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iPutMyDentalPractice()"
});
formatter.result({
  "duration": 215074900,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iPutMyDateOfBirth()"
});
formatter.result({
  "duration": 397554300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iLiveWithAPartnerOrNot()"
});
formatter.result({
  "duration": 1154207700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iPutMyOrMyPartnerClaimAnyBenefitsOrTaxCredits()"
});
formatter.result({
  "duration": 294746000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 54
    }
  ],
  "location": "MyStepdefs.iPutMyPregnantOrHaveYouGivenBirthInTheLastMonths(int)"
});
formatter.result({
  "duration": 240519500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iPutMyHaveAnInjuryOrIllnessCausedByServingInTheArmedForces()"
});
formatter.result({
  "duration": 302712500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iPutMyOrMyPartnerLivePermanentlyInACareHome()"
});
formatter.result({
  "duration": 261777800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "16",
      "offset": 40
    },
    {
      "val": "000",
      "offset": 43
    }
  ],
  "location": "MyStepdefs.iPutMyAndMyPartnerHaveMoreThan£InSavingsInvestmentsOrProperty(int,int)"
});
formatter.result({
  "duration": 297514900,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iShouldGetAResultOfWhetherIWillGetHelpOrNot()"
});
formatter.result({
  "duration": 29076400,
  "status": "passed"
});
formatter.after({
  "duration": 84800,
  "status": "passed"
});
});