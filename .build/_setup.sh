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

mkdir ../partials

## make e2e-test dirs

mkdir ../e2e-tests
mkdir ../e2e-tests/specs
 
cat _base.js > ../e2e-tests/specs/home.js
cat _base.js > ../e2e-tests/specs/home.js

# MAKE BASE FILES

cat _base.js > ../app/app.js
cat _index.html > ../index.html
cat _basectrl.js > ../app/home/controllers/DefaultCtrl.js
cat _base.js > ../app/home/controllers/DefaultCtrl.spec.js
cat _base.js > ../app/home/directives/defaultDirective.html
cat _base.js > ../app/home/directives/defaultDirective.js
cat _base.js > ../app/home/directives/defaultDirective.spec.js
cat _base.js > ../app/home/directives/defaultDirective.css
cat _base.js > ../app/home/filers/defaultFilter.js
cat _base.js > ../app/home/filters/defaultFilter.spec.js
cat _base.js > ../app/home/services/DefaultService.js
cat _base.js > ../app/home/services/DefaultService.spec.js


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
