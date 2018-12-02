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

13. JS TESTING Specificities & Peculiarities 
13.1 JS is asyncronous: it can execute code with Promise = Pending and don't wait to 
13.2 Promise to get Resolved of Rejected (like it is in syncronous Java or Python)
13.3 take out anyth from Browser ARE ASYNC and don't wait for resolve which can lead to Errors
13.4 only Actions (click, input, etc) are supporting Promises concept in Protractor
13.5 so after Browser.get() we add .then() whatever function will be in then parensis
13.6 will be executed AFTER the GET request


=====================================================================
GIT
…create a new repository on the command line
echo "# tests" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/UserTester115/tests.git
git push -u origin master

…or push an existing repository from the command line

git remote add origin https://github.com/UserTester115/tests.git
git push -u origin master

…or import code from another repository

You can initialize this repository with code from a Subversion, Mercurial, or TFS project.

1. Create a new repository on GitHub. To avoid errors, do not initialize the new repository with README, license, or gitignore files. You can add these files after your project has been pushed to GitHub. 
2. change directory to your Working Project
3. Type git init 
4. git add *.* (or add only relevant files to your git)

5. Commit the files that you've staged in your local repository.
git commit -m "First commit"
# Commits the tracked changes and prepares them to be pushed to a remote repository. To remove this commit and modify the file, use 'git reset --soft HEAD~1' and commit and add the file again.

6. Copy remote repository URL field. At the top of your GitHub repository's Quick Setup page, click
to copy the remote repository URL.

7. In the Command prompt, add the URL for the remote repository where your local repository will be pushed.
7.1 git remote add origin <copy remote repository new URL>
# Sets the new remote
7.2 git remote -v 
# Verifies the new remote URL

8. Push the changes in your local repository to GitHub.
8.1 git push origin master
# Pushes the changes in your local repository up to the remote repository you specified as the origin
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

