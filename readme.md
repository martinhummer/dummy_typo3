1. composer install
2. npm install
3. create virtual host (f.ex: dummytypo3:8888) and point it to your /build folder
4. update gulpfile.js and insert virtual host into browserSync
5. run 'gulp watch' or 'gulp watch --production'
6. access at dummytypo3:8888 or dummytypo3/index.php