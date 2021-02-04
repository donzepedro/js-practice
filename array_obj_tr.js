

// let affairs = {
//     2018: {
//         11: {
//             29: ['дело111', 'дело112', 'дело113'],
//             30: ['дело121', 'дело122', 'дело123'],
//         },
//         12: {
//             30: ['дело211', 'дело212', 'дело213'],
//             31: ['дело221', 'дело222', 'дело223'],
//         },
//     },
//     2019: {
//         12: {
//             29: ['дело311', 'дело312', 'дело313'],
//             30: ['дело321', 'дело322', 'дело323'],
//             31: ['дело331', 'дело332', 'дело333'],
//         }
//     },
// };
//
// function addAfair(year,month,day,somecase) {
//
//     if (affairs[year] === undefined) {
//         affairs[year] = {};
//     }
//     if ( affairs[year][month] === undefined){
//         affairs[year][month] = {};
//     }
//     if(affairs[year][month][day] === undefined){
//         affairs[year][month][day] = [];
//     }
//
//     affairs[year][month][day].push(somecase);
//     return affairs;
// }
// console.log( affairs);
// addAfair('94','10','08','case007');
// addAfair('2019','12','29','case007');
// console.log( affairs);

// ==================================== ----------------- Задача 75.1 - begin
//
// Дан такой объект:
//                     let data = {
//                     2018: {
//                         11: {
//                             29: [1, 2, 3],
//                             30: [4, 5],
//                         },
//                         12: {
//                             30: [6, 7],
//                             31: [8, 9],
//                         },
//                     },
//                     2019: {
//                         12: {
//                             29: [10, 11],
//                             30: [12, 13],
//                             31: [14, 15],
//                         }
//                     },
//                 }
//
//                 // Запишите все элементы этого объекта в какой-нибудь массив, вот так:
//                     // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
//
//                 let somearr = [];
//                 for (let fstobj in data) {
//                     // console.log(data[elem]);
//                     for(let secobj in data[fstobj] ){
//                         for(let arrkeys in data[fstobj][secobj]){
//                             for(let val of data[fstobj][secobj][arrkeys]){
//                                 somearr.push(val);
//                             }
//                         }
//
//                     }
//                 }
//                 console.log(somearr);
// ==================================== ----------------- Задача 75.1 - END





// ==================================== ----------------- Задача 75.2 - begin
let affairs = [
    {
        date:  '2019-12-29',
        event: 'name1',
    },
    {
        date:  '2019-12-31',
        event: 'name2',
    },
    {
        date:  '2019-12-29',
        event: 'name3',
    },
    {
        date:  '2019-12-30',
        event: 'name4',
    },
    {
        date:  '2019-12-29',
        event: 'name5',
    },
    {
        date:  '2019-12-31',
        event: 'name6',
    },
    {
        date:  '2019-12-29',
        event: 'name7',
    },
    {
        date:  '2019-12-30',
        event: 'name8',
    },
    {
        date:  '2019-12-30',
        event: 'name9',
    },
    {
        date:  '2020-10-03',
        event: 'name9',
    },
]
let uniqarr=[];
let currentval,counter = 0;
let uniqdate = [];
let uniq = false;
    for(i=0;i<=affairs.length-1;i++){
        counter = 0;
        currentval = affairs[i]['date'];
        for(j=0;j<=affairs.length-1;j++){
            if(currentval == affairs[j]['date']){
                counter++;
            }
        }
        if(counter <= 1){
            uniqdate.push(currentval);
        }
        document.write(uniqdate + '<br>');
    }
// Получите из этого массива уникальные даты, то есть вот так:
    // ['2019-12-29', '2019-12-30', '2019-12-31']

// ==================================== ----------------- Задача 75.2 - END

