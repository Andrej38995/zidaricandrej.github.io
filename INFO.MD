 /*
 * Copyright (c) 2023-Infinity, Andrej Zidaric. All rights reserved. 
 * ZIDARIC ANDREJ PROPRIETARY/CONFIDENTIAL. 
 * Use is subject to license terms.
 */

1) Always move to the desired folder
2) To start the dev build:
    I: For react app run: npm start -> (To begin the development, run `npm start` or `yarn start`)
    II: For vite app: npm run dev

3) To make production build:
    I: For react app run: npm run build -> (To create a production bundle, use `npm run build` or `yarn build`)
    II: For vite app: npm run build

4) Pushing to GitHub:

    1) Build: 
            Once you're confident that your changes are good, you'll need to create a new production build with `npm run build`.

    2) Commit Changes:
            Use `git status` to check which files have changed.
            Use `git add .` to stage all your changes for commit.
            Use `git commit -m "Your commit message"` to commit your changes to your local repository.

    3) Push to GitHub:
            Use `git push` or `git push origin main` to push your changes to GitHub. 
            If you've set up the remote tracking branch with -u previously, just git push should be enough.

    4) Deploy:
            Run `npm run deploy` to push your build to the gh-pages branch, which is used by GitHub Pages to serve your site.


01) Check the current remote configuration: `git remote -v`
        origin  https://github.com/Andrej38995/Zidaricandrej.com (fetch)
        origin  https://github.com/Andrej38995/Zidaricandrej.com (push)
02) Change the remote URL to the correct repository. 
        Since you mentioned the target repository is Andrej38995/zidaricandrej.github.io, the command would be:
        `git remote set-url origin https://github.com/Andrej38995/zidaricandrej.github.io.git`
        `git remote set-url origin https://github.com/Andrej38995/zidaricandrej.github.io`
        origin  https://github.com/Andrej38995/zidaricandrej.github.io.git (fetch)
        origin  https://github.com/Andrej38995/zidaricandrej.github.io.git (push)
03) Verify the remote has been updated:
        `git remote -v`
04) Push to the new remote:
        `git push origin main`

        Pull the latest changes from the remote repository: 
 --     `git pull origin main`

    <!-- -------------------------- -->

    - Initialize Git: If you haven't already, initialize your project with Git using git init.
    - Add Remote Repository: Add the GitHub repository as a remote to your local repository using git remote add origin [URL].
    - Add Files: Add your files to the Git staging area using git add ..
    - Commit Changes: Commit your changes with a meaningful message using git commit -m "message".
    - Push to GitHub: Push your changes to GitHub using git push -u origin master (if your main branch is named 'master') or 
    git push -u origin main (if your main branch is named 'main').
    - Set Up GitHub Pages: Since your package.json includes a deploy script for gh-pages, you can deploy your site to GitHub Pages by running npm run deploy. This will push the build directory to a branch (usually gh-pages) that GitHub Pages can use to serve your site.


<!-- ------------------------------------------------------------------------------------------------------- -->
I:   git status
II:  git add .
III: git commit -m "Major update" // Added Work Segment
IV:  git push

x1: git push -u origin main
x2: git remote add origin https:github.com/Andrej38995/zidaricandrej.github.io.git
x3: git commit -m "Initial commit"
x4: git add
x5: git init
x6: git remote add origin https:github.com/Andrej38995/zidaricandrej.github.io.git
x7: npm install gh-pages --save-dev

>> git init
>> git add README.md
>> git commit -m "first commit"
>> git branch -M main
>> git remote add origin https://github.com/Andrej38995/zidaricandrej.github.io.git
>> git push -u origin main

1) npm start (to start localhost)
2) ctrl + c, then y to close localhost