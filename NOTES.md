!! MAKE SURE TO RESTART WEBPACK (npm start) AFTER CHANGING ANY CONFIG

npm i -g vue-cli@latest

vue init webpack (in folder)

npm install

npm run dev or npm start (same)

http://localhost:8080/#/

in build/webpack.base.conf.js, around line 38: to map @ symbol alias to src/js
add a js folder in src and move everything but assets into it
change line 25 to reflect new entry
add new alias after @: '%': resolve('src/scss/modules') (this makes it easier to make global scss vars) (actually add these folders)
make scss files, look at style.scss for exapmle of using % as webpack variable; note the tilde, this is scss specific

npm i -S node-sass sass-loader (vue can take it from here)

don't worry about that error, change the img src in App.vue to .. not . (or just delete it)

add import '../scss/style.scss' before Vue.config line in main.js

all style tags lang=scss

make sure to import scss files you want per component

https://github.com/okonet/yaml-loader add loader config to base conf

npm install yaml-loader -S