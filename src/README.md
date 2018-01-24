### In the test page, the result will be like this:
<input type="text" style="width:200px; height:20px;"/>
<input type="button" value="SEND" />


Result: NEGATIVE</br>

### How to get the analyse result
- Put the tweets to analyse in the above block
- Click the button 'SEND'
- The result will show below


### How to make it realised in code
- I have created the file testPage.component.ts for the Test page
- When click the button 'SEND', it will do the fonction doTest (line:13) in the fiche testPage.component.ts
- It should just to edit this fonction, send the tweets to analyse with the url of back-end service.
- It will return a result of json which includes the emotion

#### for exemple
     Json{"SENT":"NEG"}


- Parse the json to get the nagative emotion or postive emotion, and show this result in this page.


### To get it:


Heroku: https://test-umigon.herokuapp.com/index


Github: https://github.com/WANGYuhang0415/Umigon.git

### To install Angular:


1.  Install Node.js
2.	Install npm d’une nouvelle version
3.  Install angular-cli 
4.  Create un project
5.  cd C:\Work\Git   <br/>
    ng new csm -routing <br/>
        Rename le folder
6.  Test application
          ng serve

### To install Angular material:


https://material.angular.io/guide/getting-started

### Pay attention:


1. The versions of angular-cli and angular material are matched in this application. If you want to upgrade them to a new version, please make sure the versions haven't the conflits. My suggestion is to keep this version or upgrade them to the latest versions.
2. This application is developped by Angular2, is different from AngularJS. 


