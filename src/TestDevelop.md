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

