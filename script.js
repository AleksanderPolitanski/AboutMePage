const badgeStartDescription = 'Hover over logos to find out more';
const badgeFrontend = document.getElementById('badge-frontend');
const badgeAdmin = document.getElementById('badge-admin');
const badgeDev = document.getElementById('badge-dev');
const badgeAppBuild = document.getElementById('badge-appbuild');
const badgeJsDev = document.getElementById('badge-jsdev');
const badgeApex = document.getElementById('badge-apex');
const badgeR = document.getElementById('badge-r');
const badgeOffice = document.getElementById('badge-office');
const badgeSf = document.getElementById('badge-sf');



badgeFrontend.addEventListener('mouseover', () => {displayMessage('#badge-frontend');});
badgeFrontend.addEventListener('mouseout', () => {displayStandardMessage();});

badgeAdmin.addEventListener('mouseover', () => {displayMessage('#badge-admin');});
badgeAdmin.addEventListener('mouseout', () => {displayStandardMessage();});

badgeDev.addEventListener('mouseover', () => {displayMessage('#badge-dev');});
badgeDev.addEventListener('mouseout', () => {displayStandardMessage();});

badgeAppBuild.addEventListener('mouseover', () => {displayMessage('#badge-appbuild');});
badgeAppBuild.addEventListener('mouseout', () => {displayStandardMessage();});

badgeJsDev.addEventListener('mouseover', () => {displayMessage('#badge-jsdev');});
badgeJsDev.addEventListener('mouseout', () => {displayStandardMessage();});

badgeApex.addEventListener('mouseover', () => {displayMessage('#badge-apex');});
badgeApex.addEventListener('mouseout', () => {displayStandardMessage();});

badgeR.addEventListener('mouseover', () => {displayMessage('#badge-r');});
badgeR.addEventListener('mouseout', () => {displayStandardMessage();});

badgeOffice.addEventListener('mouseover', () => {displayMessage('#badge-office');});
badgeOffice.addEventListener('mouseout', () => {displayStandardMessage();});

badgeSf.addEventListener('mouseover', () => {displayMessage('#badge-sf');});
badgeSf.addEventListener('mouseout', () => {displayStandardMessage();});

  



const displayMessage = function(type){
  
  switch (type) {
    case '#badge-frontend':
      document.querySelector('.badge-description').textContent = 
      'I have some frontend skills (JS, HTML, CSS), that I use primarily to create responsive LWC Salesforce components. They also helped me create this simple website. I got my knowledge from Udemy courses, which I\'m a big fan of. ';
      break;
    case '#badge-admin':
      document.querySelector('.badge-description').textContent = 'I\'m a certified Salesforce Administrator. I know a lot about profiles, roles, sharing rules, field level security, users, queues, groups, list views, reports and many, many more...';
      break;
    case '#badge-dev':
      document.querySelector('.badge-description').textContent = 'I\'m a certified Salesforce Platform Developer. I know when (and how!) to use declarative programming methods, like Flows and when (and how!) to use code. I can write triggers, handlers, tests, batchable and queueable classes and more. I know Visualforce (a little) and LWC. If there is a 🐞 in code, I will find it.';
      break;
    case '#badge-appbuild':
      document.querySelector('.badge-description').textContent = 'I\'m a certified Salesforce Platform App Builder. I know a lot about SQOL queries, Objects and their relations, Flows, Workflows, Processes, Validation rules, Formulas, Picklist dependancies, Page Layouts, Record Types and more';
      break;
    case '#badge-jsdev':
      document.querySelector('.badge-description').textContent = 'I\'m a certified JavaScript Developer. (Oof, this was a tricky exam). I can create LWCs using Javascript. I use lightning datatables, comboboxes, buttons, tree grids, cards and other elements. Users find my LWCs useful and esthetic. Developing my Frontend skills is my main professional goal at this moment. ';
      break;
    case '#badge-apex':
      document.querySelector('.badge-description').textContent = 'I have spent most of my time as Developer writing, updating or staring at APEX classes and methods. I can write it, debug it, and when I return to my code after some time, I still know what it does. I try to use best practice when writing APEX. Running SOQL in \'for loops\'? Not on my watch.';
      break;
    case '#badge-r':
      document.querySelector('.badge-description').textContent = 'R was the first coding language I\'ve learnt. It opened my eyes on coding world and showed me possibilities of work automation. I used it in Salesforce Data Analysis tasks, thanks to a great R package called \'SalesforceR\'. APEX is great, but there are some things where R can really shine in Salesforce world! ';
      break;
    case '#badge-office':
      document.querySelector('.badge-description').textContent = 'Last but not least - immortal MS Office. Some people make fun of good old Excel, but let\'s face it: it will always be a king in any quick calculations, hands down.';
      break;
    case '#badge-sf':
      document.querySelector('.badge-description').textContent = 'Altogether, I\'ve been working with Salesforce since 2019. First, as an end user (tracking some Cases in my previous job). Then as a Data Analyst (Data Loader, Object relations). Then as a Tester (both manually and using code). Recently, I\'ve become a Salesforce Developer. And I know this is the right role for me. But all my previous experience will always be a value added.';
      break;
  }

};



const displayStandardMessage = function(){
  document.querySelector('.badge-description').textContent = badgeStartDescription;
}