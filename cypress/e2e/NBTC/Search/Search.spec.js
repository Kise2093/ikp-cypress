
const { Given, When, Then, Before} = require('@badeball/cypress-cucumber-preprocessor');
let type;
let brand;
let model;
let sdate;
let edate;
let date;
let start;
let end;

Before(() => {
    cy.viewport(1600, 720);
});

Given('I am on the NTBC homepage', () => {
  cy.visit('http://10.1.0.101:31429/main/menu');
});

When('left bar Go to {string} page', (menu) => {
  cy.get('div').contains(menu).click();
});

When('input type {string}', (type_input) => {
  cy.get('#combo-box').type(type_input);
  cy.get('#combo-box-option-0').click();
  type = type_input;
});

When('input brand {string}', (brand_input) => {
  cy.get('#tradeMark').type(brand_input);

  brand = brand_input;
});

When('input model {string}', (model_input) => {
  cy.get('#model').type(model_input);

  model = model_input;
});

When('input startdate {string}', (sdateinput) => {
  cy.get('#\\:r4\\:').type(sdateinput);

  sdate = sdateinput;
});

When('input enddate {string}', (edateinput) => {
  cy.get('#\\:r5\\:').type(edateinput);

  edate = edateinput;
});

// When('เลือกวันที่ Start', () => {
//   cy.get('.DatePickerStart > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root').click()
//   cy.get('#\\:r8\\:-grid-label').click();
//   cy.get(':nth-child(122) > .PrivatePickersYear-yearButton').click();
//   cy.get('.MuiDayPicker-monthContainer > :nth-child(3) > :nth-child(4)').click();
// });

// When('เลือกวันที่ End', () => {
//   cy.get('.DatePickerEnd > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root').click();
//   cy.get('#\\:r9\\:-grid-label').click();
//   cy.get(':nth-child(123) > .PrivatePickersYear-yearButton').click();
//   cy.get('.MuiDayPicker-monthContainer > :nth-child(3) > :nth-child(4)').click();
// });

When('search', () => {
    cy.get('button').contains('ค้นหา').click();
    cy.get('div').contains('p','ทำการเรียกข้อมูลสำเร็จ');
});

When('click detail {string}', (numdetail) => {
  cy.get(':nth-child(1) > :nth-child(7) > :nth-child('+numdetail+') > .MuiGrid-root > .MuiButtonBase-root').click();
});

Then('check detail type', () => {
  cy.get('th:nth-child(1)').contains('p',type).should('exist');
});

Then('check detail brand', () => {
  cy.get('th:nth-child(2)').contains('p',brand).should('exist');
});

Then('check detail model', () => {
  cy.get('th:nth-child(3)').contains('p',model).should('exist');
});

When('edit', () => {
  cy.get('button').contains('แก้ไขรายละเอียด').click();
  cy.get('#fine-textbox').clear().type('model');
  cy.get('#location-textbox').clear().type('model');
  cy.get('#case-textbox').clear().type('model');
  cy.get('button').contains('บันทึก').click();
});

// Then('I should see search results within the date range', () => {
//   start = moment(sdate);
//   end = moment(edate);
//   cy.get('th:nth-child(2)').find('p').each(($row) => {
//     date = moment($row.find('td.date').text(), 'DD/MM/YYYY');
//     expect(date.isBetween(start, end)).to.be.true;
//   });
// });

Then('I should see search results within the date range', () => {
  const start = moment(sdate);
  const end = moment(edate.invoke('val'), 'YYYY-MM-DD');
  cy.get('th:nth-child(2)').find('p').each(($row) => {
    const date = moment($row.find('td.date').text(), 'YYYY-MM-DD');
    expect(date.isBetween(start, end)).to.be.true;
  });
});