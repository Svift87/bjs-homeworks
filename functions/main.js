function getSolutions(a, b, c) {
    let D = b**2 - 4*a*c;

    if (D < 0) {
        return {D};
    } else if (D == 0) {
        let x1 = -b / 2 * a;
        return { 
            roots: [ x1 ],
            D
        };
    } else {
        let x1 = (-b + Math.sqrt(D)) / 2*a;
        let x2 = (-b - Math.sqrt(D)) / 2*a;

        return { 
            roots: [ x1, x2 ],
            D
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
    let arre = 0;

    for (let valueData in data) {        
        data[valueData] = averageValueArr(data[valueData]);    
        averageValueArr (data);
        arre += data[valueData]; 
    }

    let summaKey = Object.keys(data).length;

    arre = arre / summaKey;

    console.log(`Средняя оценка по всем предметам: ${arre}`);
};

function averageValueArr (dataResult) {
    let summData = 0;

    for (let i = 0; dataResult.length > i; i++) {
        summData += dataResult[i];
    }
  
    return dataResult = summData / dataResult.length;
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
    let newSecretData = {};

    for (let valueSecretData in secretData) {
        if (valueSecretData == 'aaa') {
            newSecretData.firstName = replacementValues(secretData[valueSecretData]);
        } else if (valueSecretData == 'bbb') {
            newSecretData.lastName = replacementValues(secretData[valueSecretData]);
        }
    }
    
    console.log(newSecretData);
};

function replacementValues (secretData) {    
    if (secretData == 0) {
        secretData = 'Родриго';
    } else if (secretData == 1) {
        secretData = 'Эмильо';
    }        
    
    return secretData;
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