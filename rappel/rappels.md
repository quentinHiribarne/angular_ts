```JS
    function getFullName(student) {
        if (student.isGood) {
            var getFullName = "Goog" + sutdent.name;
            return getFullName;
        }

        return sutdent.name;
        // FullName est accessible ici
    }
```

```JS
    function createCar(model, brand) {
        // logique de verification

        return {
            model: model,
            brand: brand
        };
    }
```

```JS
    const student = {
        name: "John Wick",
        age: 21,
        isOffAge: true,
        grade : {
            math: 12,
            english: 15
        }
    };

    // Affectation via destructuring
    const { name, age, isOffAge, grade } = student;
```

```JS
    const array = [1, 2, 3, 4];

    // Array destructuring
    const [first, second, third, fourth] = array; // first = 1, second = 2, third = 3, fourth = 4
```

```JS
    function myFunction(a,b) {
        return foo;
    }

    myFunction(a,b,c); // c est ignoré
    myFunction(a); // b est undefined

    function anotherFunction(a = 'default', b = 'default') {
        return foo;
    }

    anotherFunction(a); // b est 'default'
```

```JS
    const studentArray = [];

    function addStudent(...students) { // rest operator
        for ( const student of students) {
            students.push(student);
        }
    }
```

```JS
    const anotherArray = [1, 2, 3, 4, 5];
    const minVal = Math.min(...anotherArray); // spread operator
```

```JS
    /**
     * @param {number} id - L'id de l'utilisateur
     * @returns {Promise} - Une promesse
     * @description - Récupère un utilisateur
     */
    function getUser(id) {
        return new Promise(function(resolve, reject) {
            // logique de récupération de l'utilisateur
            if (user) {
                response.status = 200;
                response.body = user;
                resolve(response);
            } else {
                response.status = 404;
                response.body = "User not found";
                reject(response);
            }
        });
    }

    // Recupère le resultat de la promesse
    const user = async (id) => {
        return await getUser(id);
    }
```

Les modules en JS
export nommé et default

```JS
    // named export
    export function add(a, b) {
        return a + b;
    }

    // named import
    import { add } from 'path/to/file';
    // or
    import { add as addFunction } from 'path/to/file';

    // list of named exports
    export {
        add,
        substract,
        multiply,
        divide as divideFunction
    };

    // list of named imports
    import {
        add,
        substract,
        multiply,
        divideFunction as divide
    } from 'path/to/file';

    // default export
    // only one default export per file
    export default function add(a, b) {
        return a + b;
    }

    // default import
    // can be named anything
    import importName from 'path/to/file';
```
