var side = 20;
var matrix = [];
var grassArr = [];
var grassEaterArr = [];
var gishatichArr=[];
var horseArr=[];
var generArr1=[];
var generArr2=[];
var generArr3=[];
var generArr4=[];
var n =31;
var  m =31;
var a4=0;
var p=0;
var po=0;
var pol=0;
var i= ["grass", "hourse", "grasseater","gishatich"]
var t = [0, 0, 0, 0,1, 1, 1, 1, ,0,0,0,0,0,0,0, 1, 2, 1,, 0, 1, 0, 1, 0, 1,0,0,0,0,0,0,0,1,1,1,2,1,1,3,2,1,1,0,0,0, 1, 0, 3, 1, 0, 1, 0, 1, 0, 1,  1, 0,,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,4,0,0,,1,1,1,
];


function setup() {
    frameRate(60);
    for (var y = 0; y < n; y++) {
        matrix[y] = [];
        for (var x = 0; x < m; x++) {
            var g = random(t);
            if (g == 1 && ((x!=0 && y !=0) || (x!=30 && y!=30 )||( x!=0 && y!=30) || (x!=30 && y!=0) )) {
                
                matrix[y][x] = g;
                grassArr.push(new Grass(x, y, 1));
            }
            else if (g == 0 ) {
               
                matrix[y][x] = g

            }
            else if (g == 2  && ((x!=0 && y !=0) || (x!=30 && y!=30 )||( x!=0 && y!=30) || (x!=30 && y!=0) )) {
               
                matrix[y][x] = g;
                grassEaterArr.push(new GrassEater(x, y, 2));
            }
            else if (g == 3 && ((x!=0 && y !=0) || (x!=30 && y!=30 )||( x!=0 && y!=30) || (x!=30 && y!=0)  ) ) {
              
                matrix[y][x] = g;
                gishatichArr.push(new gishatich(x, y, 3));
            }
            else if (g == 4 && ((x!=0 && y !=0) || (x!=30 && y!=30 )||( x!=0 && y!=30) || (x!=30 && y!=0) )) {
                
                matrix[y][x] = g;
                horseArr.push(new horse(x, y,4 ));
               
            }
            else if (g == 5 && a4<1) {
                a4++;
                matrix[y][x] = g;
                generArr1.push(new Generator(x,y));
                

            }
            else if (g==6 && p<1){
                matrix[y][x] = g;
                generArr2.push(new Generator1(x,y));
                p++
            }
            else if (g==7 && po<1){
                matrix[y][x] = g;
                generArr3.push(new Generator2(x,y));
                po++;
            }
            else if( g == 8 && pol < 1 ){
                matrix[y][x] = g;
                generArr4.push(new Generator3(x,y));
                pol++;
            }
            else {
                matrix[y][x] = 0;
            }
            
        }

        

    }
    matrix[0][0]=5;
    matrix[0][30]=6;
    matrix[30][0]=7;
    matrix[30][30]=8;
    generArr1.push(new Generator(0,0));
    generArr2.push(new Generator1(0,30));
    generArr3.push(new Generator2(30,0));
    generArr4.push(new Generator3(30,30));

     

    createCanvas(matrix[0].length * side, matrix.length * side);
    background('grey');

     
}

function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix.length; x++) {
            if (matrix[y][x] == 0) {
                fill('grey');
                rect(x * side, y * side, side, side);
            } else if (matrix[y][x] == 1) {
                fill('green');
                rect(x * side, y * side, side, side);
            } else if (matrix[y][x] == 2) {
                fill('yellow');
                rect(x * side, y * side, side, side);
            } else if (matrix[y][x] == 3) {
                fill('black');
                rect(x * side, y * side, side, side);
            } else if (matrix[y][x] == 4) {
                fill('red');
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill('blue');
                rect(x * side, y * side, side, side);
            }
            else if(matrix[y][x] == 6){
                fill('blue');
                rect(x * side, y * side, side, side);
            }
            else if(matrix[y][x] == 7){
                fill('blue');
                rect(x * side, y * side, side, side);
            }
            else if(matrix[y][x] == 8){
                fill('blue');
                rect(x * side, y * side, side, side);
            }
        }
    }
    for (var i in grassArr) {
        grassArr[i].mul();
    }
    
    for (var i in grassEaterArr) {
        grassEaterArr[i].eat()       
        
    }
    for (var i in gishatichArr) {
        gishatichArr[i].eat()       
        
    }
    for (var i in horseArr) {
        horseArr[i].eat()       
        
    }
    for(var i in generArr1){
        generArr1[i].Generacnel()
    }
    for(var i in generArr2){
        generArr2[i].Generacnel1()
    }
    for(var i in generArr3){
        generArr3[i].Generacnel2()
    }
    for(var i in generArr4){
        generArr4[i].Generacnel3()
    }
   

    
}
