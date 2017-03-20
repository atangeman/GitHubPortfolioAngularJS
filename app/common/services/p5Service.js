/**
 * @file
 */
(function () {
    "use strict";
    angular.module('app').service('p5Service', p5Service);
    p5Service.$inject = ['$window', 'repoService'];

    function p5Service(sketch, repoService, $window) {
        return function ($window) {
            return repoService.getReposByLanguage().then(
                function (data) {
                    var posX = 594;
                    var posX1 = 394;
                    var posY;
                    var w;
                    var h;
                    var cScalar = 0.7;
                    var c2Scalar = 1;
                    var cycleCheck = 0;
                    var spacing = 175;
                    var vertSelect = 0;
                    var horzSelect = 1;
                    var pArray = [];
                    var Canvas;
                    var c;
                    var img;
                    var repos = data;
                    /*
                    for(var i = 0; i < repoObj.length; ++i) {
                        repoObj[i].posX = (w / 2) + (spacing * (i-1));
                    }*/
                    sketch.preload = function () {
                        img = sketch.loadImage('assets/img/ukraine-landscape.jpg');
                    };
                    sketch.setup = function () {
                        //img.loadPixels();
                        w = windowWidth;
                        h = windowHeight;
                        //c = img.get(img.width * 2, img.height * 2);
                        sketch.createCanvas(w, h);
                        posY = h / 2.3;
                        var p1 = {
                            name: "Recent"
                            , alias: "Re"
                            , size: 90
                            , posX: (w / 2) - spacing
                            , subPg: {
                                subName: ["Thesis", "SDE Source Repair", "Crime Viewer"]
                                , subUrl: "www.contacts.com"
                            }
                            , color: "blue"
                        };
                        var p2 = {
                            name: "Home"
                            , alias: "H"
                            , size: 90
                            , posX: w / 2
                            , subPg: {
                                subName: ["About Me", "Contact Me", "CV/Resume"]
                                , subUrl: "www.contacts.com"
                            }
                            , color: "red"
                        };
                        var p3 = {
                            name: "Programming"
                            , alias: "Pr"
                            , size: 90
                            , posX: (w / 2) + spacing
                            , subPg: {
                                subName: ["SDE Source Repair", "Crime Viewer", "Python Geocoder", "Python Encryption", "Who's on First?"]
                                , subUrl: "www.contacts.com"
                            }
                            , color: "green"
                        };
                        var p4 = {
                            name: "GIS"
                            , alias: "Gs"
                            , size: 90
                            , posX: (w / 2) + spacing * 2
                            , subPg: {
                                subName: ["Location Filter", "FRC Map", "Cluster/Outlier", "Getis-Cluster", "Land Value", "IG Planning", "SNAP-ED", "Noise Buffer"]
                                , subUrl: "www.contacts.com"
                            }
                            , color: "white"
                        };
                        var p5 = {
                            name: "Art"
                            , alias: "Ca"
                            , size: 90
                            , posX: (w / 2) + spacing * 3
                            , subPg: {
                                subName: ["Washington D.C. Print", "Mt. Rainier", "NYC - Race & Ethnicity", "Seattle Liquifaction", "Thom York - Radiohead"]
                                , subUrl: "www.contacts.com"
                            }
                            , color: "white"
                        };
                        pArray.push(p1);
                        pArray.push(p2);
                        pArray.push(p3);
                        pArray.push(p4);
                        pArray.push(p5);
                        console.log(repos);
                    };
                    sketch.draw = function () {
                        sketch.background(0);
                        //sketch.image(img, 0, 0, windowWidth, windowHeight);
                        sketch.drawGrid();
                        sketch.nodeDisplay(pArray);
                    };
                    sketch.drawGrid = function () {
                        sketch.fill(83, 76, 100, 100);
                        for (var c = 120; c < 2500; c += 20) {
                            sketch.stroke(16, 32, 125, 15);
                            sketch.noFill();
                            sketch.ellipse(w / 2, posY, c * (c / 100), c);
                            sketch.ellipse(w / 2, posY, c, c * (c / 100));
                        }
                    };
                    sketch.nodeDisplay = function (pArray) {
                        //sketch.textFont("Courier New");
                        var radius;
                        var selectedCol = (pArray[horzSelect]);
                        sketch.noFill();
                        sketch.stroke(255);
                        var str = String(selectedCol.name);
                        sketch.rectMode(CENTER);
                        sketch.textSize(70);
                        sketch.noStroke();
                        for (var i = 0; i < pArray.length; i++) {
                            sketch.fill(200, 150);
                            if (pArray[i].posX === w / 2) {
                                sketch.stroke(255, 100);
                                sketch.radius = 75 + Math.sin(frameCount / 10);
                                sketch.fill(255, 97, 59, 200);
                                pArray[i].size = radius;
                                sketch.ellipse(pArray[i].posX, posY, pArray[i].size * cScalar, pArray[i].size * cScalar);
                                sketch.subNodeDisplay(pArray[i]);
                                sketch.textAlign(RIGHT);
                                sketch.textStyle(NORMAL);
                                sketch.textSize(50);
                                sketch.fill(255);
                                sketch.text(String(selectedCol.name), (sketch.width / 3), (sketch.height / 1.48));
                                if (pArray[i].subPg.subName[vertSelect]) {
                                    sketch.textSize(25);
                                    sketch.text(pArray[i].subPg.subName[vertSelect], (sketch.width / 3), (sketch.height / 1.35));
                                }
                            }
                            else {
                                sketch.stroke(100, 50);
                                pArray[i].size = 50;
                                sketch.ellipse(pArray[i].posX, posY, pArray[i].size, pArray[i].size);
                            }
                            sketch.textStyle(BOLD);
                            sketch.fill(255, 250);
                            sketch.textSize(25);
                            sketch.textAlign(CENTER);
                            sketch.text(pArray[i].alias, pArray[i].posX, (posY) + 8);
                            //textSize(20);
                            //   text(pArray[i].name, pArray[i].posX, (posY) + 50);
                        }
                    };
                    sketch.subNodeDisplay = function (pNode) {
                        sketch.fill(200);
                        sketch.textAlign(LEFT);
                        sketch.noStroke();
                        sketch.textFont("Courier New");
                        sketch.textStyle(BOLD);
                        sketch.textSize(15);
                        sketch.stroke(200, 200);
                        sketch.strokeWeight(4);
                        sketch.bezier(width / 2.25, height / 1.95, (width / 2.25) - 40, (height / 1.95), (width / 2.25), (height / 1.5), (width / 2.25) - 60, (height / 1.5));
                        bezier((width / 2.25) - 60, (height / 1.5), (width / 2.25), (height / 1.5), (width / 2.25) - 40, (height / 1.05), width / 2.25, height / 1.05);
                        //   text(pNode.subPg.subName.length, 50, 50);
                        sketch.strokeWeight(1);
                        for (var subN = 0; subN < pNode.subPg.subName.length; subN++) {
                            if (vertSelect === subN) {
                                sketch.fill(250, 170);
                                sketch.ellipse(pNode.posX, (posY + 100) - 60 * (subN - vertSelect), 30, 30);
                                sketch.fill(100, 75);
                                sketch.stroke(255);
                                sketch.rectMode(CORNER);
                                sketch.rect(pNode.posX - 25, (posY + 75), ((String(pNode.subPg.subName[subN]).length) * 15) + 75, 50);
                                sketch.noStroke();
                                sketch.fill(255, 200);
                                sketch.textSize(20);
                                sketch.text(pNode.subPg.subName[subN], pNode.posX + 30, (posY + 105) + 67 * ((subN - vertSelect)));
                                sketch.textSize(15);
                            }
                            else if (subN === vertSelect - 1) {
                                sketch.fill(200, 125);
                                sketch.noStroke();
                                sketch.ellipse(pNode.posX, (posY - 30) + 37 * ((subN - vertSelect)), 30 + sketch.Math.sin(frameCount / 10), 30 + sketch.Math.sin(frameCount / 10));
                                sketch.text(pNode.subPg.subName[subN], pNode.posX + 30, (posY - 25) + 37 * ((subN - vertSelect)));
                                sketch.strokeWeight(1);
                                sketch.stroke(255, 75);
                                sketch.fill(0);
                                //     text(pNode.subPg.subName[subN], pNode.posX + 30, (posY - 30) + 37 * ((subN - vertSelect)));
                            }
                            else if (subN >= vertSelect + 1) {
                                sketch.fill(200, 130);
                                sketch.ellipse(pNode.posX, (posY + 100) + 67 * ((subN - vertSelect)), 30, 30);
                                sketch.fill(255, 150);
                                sketch.text(pNode.subPg.subName[subN], pNode.posX + 30, (posY + 105) + 67 * ((subN - vertSelect)));
                            }
                            sketch.noStroke();
                            sketch.fill(200);
                        }
                    };
                    sketch.windowResized = function () {
                        sketch.resizeCanvas(windowWidth, windowHeight);
                        history.go(0);
                    };
                    return sketch;
            });
        };
    };
})();