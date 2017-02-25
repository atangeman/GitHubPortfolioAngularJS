#!bin\bash
# A simple shell script to set up working directory to AngularJs standards
# Andrew Tangeman 24/Feb/2017

ANGULAR_VERS="1.6.2"
BOOTSTRAP_VERS="3.3.7"

# MAKE DIRS

mkdir ../app
mkdir ../app/common
mkdir ../app/common/controllers
mkdir ../app/common/directives
mkdir ../app/common/filters
mkdir ../app/common/services

## replicate common to /home, /about

cp -prf ../app/common ../app/home
cp -prf ../app/common ../app/about

## make asset dirs

mkdir ../assets
mkdir ../assets/img
mkdir ../assets/css
mkdir ../assets/js
mkdir ../assets/lib
mkdir ../e2e-tests

# MAKE BASE FILES

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


# GET ANGULAR LIBS

curl -o ../assets/lib/angular.js https://code.angularjs.org/$ANGULAR_VERS/angular.js
curl -o ../assets/lib/angular.min.js https://code.angularjs.org/$ANGULAR_VERS/angular.min.js
curl -o ../assets/lib/angular-route.js https://code.angularjs.org/$ANGULAR_VERS/angular-route.js
curl -o ../assets/lib/angular-route.min.js https://code.angularjs.org/$ANGULAR_VERS/angular-route.min.js
curl -o ../assets/lib/angular-resource.js https://code.angularjs.org/$ANGULAR_VERS/angular-resource.js
curl -o ../assets/lib/angular-resource.min.js https://code.angularjs.org/$ANGULAR_VERS/angular-resource.min.js
curl -o ../assets/lib/angular-sanitize.js https://code.angularjs.org/$ANGULAR_VERS/angular-sanitize.js
curl -o ../assets/lib/angular-sanitize.min.js https://code.angularjs.org/$ANGULAR_VERS/angular-sanitize.min.js

# GET BOOTSTRAP

curl -o ../assets/css/bootstrap.min.css https://maxcdn.bootstrapcdn.com/bootstrap/$BOOTSTRAP_VERS/css/bootstrap.min.css
