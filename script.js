window.onload = function () {

    Counting();

};

const miracle = [];
let a = 0;

function Counting() {

    setTimeout(Counting, 1000);

    if (miracle.length > 8) {

        miracle.length = 8;
        miracle.unshift(a);
        a++;
    }

    else {
        miracle.unshift(a);
        a++;
    }

    console.log(miracle);

}