function getSolutions(a, b, c) {
    let D = b**2 - 4*a*c;

    if (D < 0) {
        return {'D': D};
    } else if (D == 0) {
        let x1 = -b / 2 * a;
        return { 
            roots: [ x1 ],
            'D': D
        };
    } else {
        let x1 = (-b + Math.sqrt(D)) / 2*a;
        let x2 = (-b - Math.sqrt(D)) / 2*a;

        return { 
            roots: [ x1, x2 ],
            'D': D
        };
    };
};

function showSolutionsMessage(a, b, c) {
    let result = getSolutions(a, b, c);

    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);
    if (result.D < 0) {
        console.log('Уравнение не имеет вещественных корней');
    } else if (result.D == 0) {
        console.log(`Уравнение имеет один корень X₁ = ${result.roots}`);
    } else {
        console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
    };
};

function getAverageScore( data ) {

    averageValueArr (data);
       
    console.log(data);
};

function averageValueArr (data) {
    for (let valueData in data) {
        let arr = data[valueData];    
        let result = arr.reduce(function(sum, current) {
            return sum + current;
        }, 0);
        data[valueData] = result / arr.length;
    } 
};

getAverageScore({
    algebra: [2, 4, 5, 2, 3, 4],
    geometry: [2, 4, 5],
    russian: [3, 3, 4, 5],
    physics: [5, 5],
    music: [2, 2, 6],
    english: [4, 4, 3],
    poerty: [5, 3, 4],
    chemistry: [2],
    french: [4, 4]
});

function getPersonData (secretData) {
    replacementValues(secretData);
    console.log(secretData);
};

function replacementValues (secretData) {
    for (let valueData in secretData) {
        if (secretData[valueData] == 0) {
            secretData[valueData] = 'Родриго';
        } else if (secretData[valueData] == 1) {
            secretData[valueData] = 'Эмильо';
        } else if (valueData == 'aaa') {            // Почему не раюботает присваивание значения aaa и bbb???
            valueData = 'firstName';
        } else if (valueData == 'bbb') {
            valueData = 'lastName';
        }
        
    };
    
};

getPersonData({
    aaa: 0,
    bbb: 0
});

getPersonData({
    aaa: 1,
    bbb: 0
});

getPersonData({
    aaa: 0,
    bbb: 1
});

getPersonData({
    aaa: 1,
    bbb: 1
});