This is a NPM PACKAGE with multiple functionalities, like =>

1: _Random(min, max)_ //returns Random Number
 
2: _IsNumber(num)_ //returns BOOLEAN

3: _ObjSize(obj)_ //returns the size of object 

4: _OnlyUnique_ //returns an Array with unique elements

5: _SortAOB_ //returns an sorted Array of Objects on the basis of a common key of objects
 
Developed by: VINAYAK YUVRAJ BHATT (Full Stack Developer).




Steps To Use:

Step 1: **npm i random-number-six-quarter-degrees --save**

Step 2: require/import it in the file you want to use, for Example :
 
    import quarter from 'random-number-six-quarter-degrees';

Step 3:    

    quarter.Random(5,10) for a random number between 5,10

Step 4:
 
    quarter.IsNumber(4) for a boolean value to verify if argument passed is an Number or not.

Step 5:
    
    quarter.ObjSize(obj) returns the size of object passed.

Step 6:

    let a = ['a', 1, 'a', 2, '1'];
    let uniqueArray = a.filter(quarter.OnlyUnique)
    //['a', 1, 2, '1']
        
Step 7:
    
     let shopArray = [{
            name: "Shop A",
            rank: 1,
            price: 100,
            date: 2019-11-30
        },
        {
            name: "Shop B",
            rank: 2,
            price: 100,
            date: 2019-11-29
        },
        {
            name: "Shop C",
            rank: 1,
            price: 100,
            date: 2019-11-29
        }];
     let sortedShopArray = shopArray.sort(pack.SortAOB("rank")); //sorts on rank key
    //will give out=>
    [{
        name: "Shop A",
        rank: 1,
        price: 100,
        date: 2019-11-30
    },
    {
        name: "Shop C",
        rank: 1,
        price: 100,
        date: 2019-11-29
    },
    {
        name: "Shop B",
        rank: 2,
        price: 100,
        date: 2019-11-29
    }];

    
  