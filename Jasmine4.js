Protractor + Jasmine + NPM howto:
1. nodejs + npm
2. check environment variables
3. check version:
3.1 node --version
3.2 npm --version
4. install protractor + webdriver:
4.1 npm install -g protractor (means install -Globally)
4.2 webdriver-manager update
4.3 protractor --version
4.4 sometimes protractor is failing, to fix this try to uninstall and install back:
4.5 npm uninstall -g protractor
4.6 webdriver-manager --help (see full list of options available)
5. Start Selenium server (need to be up&running if start testing):
5.1 webdriver-manager start
5.2 open localhost:4444 to check
6. to run a test (to execute js on system):
6.1 node testfilename.js

7. nmp install -g jasmine
8. npm list -g
9. jasmine

10. when running testCases do: run server!
webdriver-manager start 
10.1 add to conf.js string:
seleniumAddress: 'http://localhost:4444/wd/hub',

11. jasmine NOT to randomize tests: find \spec\support\jasmine.json
"random": false

12. Eclipse JS
12.1 copy protractor node module to your project files (in project explorer tree of IDE)
12.2 in Run Configuration Node, add Main File: ${workspace_loc:/protractor-tutorial/protractor/built/cli.js}
12.3 add your Project name 
12.4 add your Conf file name (next tab)
12.5 to add autocomplete to Protractor add plugin in Eclipse MarketPlace:
12.6 Help -> Eclipse MarketPlace -> AngularJS Eclipse 1.2.0 plugin
12.7 rightClick on Project, Configure -> convert project to Tern Project 
12.8 autocomplete to work with EclipseJS: browser.(here press CTRL + Space)

=====================================================================
INSERT INTO celebs (id, name, age) 
VALUES (1, 'Justin Bieber', 21);

This INSERT statement inserts new rows into a table. You can use the INSERT statement when you want to add new records.

1. INSERT INTO is a clause that adds the specified row or rows. 
2. celebs is the name of the table the row is added to. 
3. (id, name, age) is a parameter identifying the columns that data will be inserted into. 
4. VALUES is a clause that indicates the data being inserted. 
(1, 'Vaska Pupkin', 21) is a parameter identifying the values being inserted.

1 is an integer that will be inserted into the id column
'Justin Bieber' is text that will be inserted into the name column
21 is an integer that will be inserted into the age column

insert into celebs (id, name, age)
values (2, 'Beyonce Knowles', 33);
insert into celebs (id, name, age)
values (3, 'Jeremy Lin', 26);
insert into celebs (id, name, age)
values (4, 'Taylor Swift', 26);

* is a special wildcard character that we have been using. It allows you to select every column in a table without having to name each one individually. 
Here, the result set contains every column in the celebs table.

SELECT statements always return a new table called the _result set_.
---------------------------------------------------------------------

The UPDATE statement edits a row in the table. You can use the UPDATE statement when you want to change existing records.

1. UPDATE is a clause that edits a row in the table. 
2. celebs is the name of the table. 
3. SET is a clause that indicates the column to edit.

=====================================================================
https://coursehunters.net/course/organizaciya-avtomatizirovannogo-testirovaniya

