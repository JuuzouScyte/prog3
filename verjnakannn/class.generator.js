class Generator {  //stexcuma xoter erb vor verjacelen
    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ]
    }
    getNewDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ]
    }
    chooseCell(character) {
        this.getNewDirections()
        var found = []
        for (var i in this.directions) {
            var x = this.directions[i][0]
            var y = this.directions[i][1]
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i])
                }
            }

        }
        return found;
    }
    Generacnel() {
        var empty = random(this.chooseCell(0))
        if (empty && grassArr.length == 0) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 1
            var newGr = new Grass(newX, newY)
            grassArr.push(newGr)
        }
    }
}


class Generator1 {      // stexcuma xotakerner erb vor verjacelen
    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ]
    }
    getNewDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ]
    }
    chooseCell(character) {
        this.getNewDirections()
        var found = []
        for (var i in this.directions) {
            var x = this.directions[i][0]
            var y = this.directions[i][1]
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i])
                }
            }

        }
        return found;
    }
    Generacnel1() {
        var empty = random(this.chooseCell(0));
        var em1 = random(this.chooseCell(1));
        if (empty && grassEaterArr.length == 0) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 2
            var xt = new GrassEater(newX, newY)
            grassEaterArr.push(xt)
        }
        else if (!empty && em1 && horseArr.length == 0) {
            var newX = em1[0]
            var newY = em1[1]
            matrix[newY][newX] = 3
            for (var e = 0; e < grassArr.length; e++) {
                if (grassArr[e].x == em1[0] && grassArr[e].y == em1[1]) {
                    grassArr.splice(e, 1);
                    break;
                }
            }
            var xt = new GrassEater(newX, newY)
            grassEaterArr.push(xt)
        }

    }
}


//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


class Generator2 {  // stexcuma gishatichner erb vor verjacelen
    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ]
    }
    getNewDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ]
    }
    chooseCell(character) {
        this.getNewDirections()
        var found = []
        for (var i in this.directions) {
            var x = this.directions[i][0]
            var y = this.directions[i][1]
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i])
                }
            }

        }
        return found;
    }
    Generacnel2() {
        var empty = random(this.chooseCell(0));
        var em1 = random(this.chooseCell(1));
        if (empty && gishatichArr.length == 0) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 3
            var gish = new gishatich(newX, newY)
            gishatichArr.push(gish)

        }
        else if (!empty && em1 && horseArr.length == 0) {
            var newX = em1[0]
            var newY = em1[1]
            matrix[newY][newX] = 3
            for (var e = 0; e < grassArr.length; e++) {
                if (grassArr[e].x == em1[0] && grassArr[e].y == em1[1]) {
                    grassArr.splice(e, 1);
                    break;
                }
            }
            var gish = new gishatich(newX, newY)
            gishatichArr.push(gish)
        }
    }
}

class Generator3 {  // stexcuma hours er erb vor verjacelen
    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ]
    }
    getNewDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ]
    }
    chooseCell(character) {
        this.getNewDirections()
        var found = []
        for (var i in this.directions) {
            var x = this.directions[i][0]
            var y = this.directions[i][1]
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i])
                }
            }

        }
        return found;
    }
    Generacnel3() {
        var empty = random(this.chooseCell(0))
        var em1 = random(this.chooseCell(1));
        if (empty && horseArr.length == 0) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 4
            var hor = new horse(newX, newY)
            horseArr.push(hor)
        }
        else if (!empty && em1 && horseArr.length == 0) {
            var newX = em1[0]
            var newY = em1[1]
            matrix[newY][newX] = 4
            for (var e = 0; e < grassArr.length; e++) {
                if (grassArr[e].x == em1[0] && grassArr[e].y == em1[1]) {
                    grassArr.splice(e, 1);
                    break;
                }
            }
            var hor = new horse(newX, newY)
            horseArr.push(hor)
        }

    }
}