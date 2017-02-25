#!bin\bash
# A simple shell script to set up working directory to AngularJs standards
# Andrew Tangeman 24/Feb/2017

ANGULAR_VERS="1.6.2"


mkdir ../app
mkdir ../app/common
mkdir ../app/common/controllers
mkdir ../app/common/directives
mkdir ../app/common/filters
mkdir ../app/common/services

cp -prf ../app/common ../app/home
cp -prf ../app/common ../app/about

mkdir ../assets
mkdir ../assets/img
mkdir ../assets/css
mkdir ../assets/js
mkdir ../assets/lib

mkdir ../e2e-tests

cat _base.js > ../app/app.js
cat _index.html > ../index.html
cat _base.js > ../app/home/controllers/FirstCtrl.js
cat _base.js > ../app/home/controllers/FirstCtrl.spec.js
cat _base.js > ../app/home/directives/mainDirective.html
cat _base.js > ../app/home/directives/mainDirective.js
cat _base.js > ../app/home/directives/mainDirective.spec.js
cat _base.js > ../app/home/directives/mainDirective.css
cat _base.js > ../app/home/filers/mainFilter.js
cat _base.js > ../app/home/filters/mainFilter.spec.js
cat _base.js > ../app/home/services/MainService.js
cat _base.js > ../app/home/services/MainService.spec.js



curl -O ../assets/lib/angular.js https://code.angularjs.org/$ANGULAR_VERS/angular.js
curl -O ../assets/lib/angular.min.js https://code.angularjs.org/$ANGULAR_VERS/angular.min.js
curl -O ../assets/lib/angular-route.js https://code.angularjs.org/$ANGULAR_VERS/angular-route.js
curl -O ../assets/lib/angular-route.min.js https://code.angularjs.org/$ANGULAR_VERS/angular-route.min.js
curl -O ../assets/lib/angular-resource.js https://code.angularjs.org/$ANGULAR_VERS/angular-resource.js
curl -O ../assets/lib/angular-resource.min.js https://code.angularjs.org/$ANGULAR_VERS/angular-resource.min.js
curl -O ../assets/lib/angular-sanitize.js https://code.angularjs.org/$ANGULAR_VERS/angular-sanitize.js
curl -O ../assets/lib/angular-sanitize.min.js https://code.angularjs.org/$ANGULAR_VERS/angular-sanitize.min.js

