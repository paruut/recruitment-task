/* Zadanie nr 1 - komunikacja z API - obsługa asynchroniczna
Prośba o przygotowanie rozwiązania, które odpyta 3 niezależne usługi (API) i wyświetli wynik tych 3
różnych usług dopiero po ich zakończeniu.
Usługi należy uruchomić równolegle, czyli nie ma potrzeby wstrzymywania się z uruchomieniem
drugiej usługi, zanim zakończy się pierwsza usługa.
Technologia: Javascript 
*/

let p1 = Promise.resolve(3);
let p2 = Promise.resolve(3);
let p3 = Promise.resolve(3);

async function fetchData(arr) {
  return await Promise.all(arr).then((values) => {
    console.log(values);
  });
}

fetchData([p1, p2, p3]);


/* Zadanie nr 2 - operacje na datach
Prośba o przygotowanie rozwiązania, które wyświetli bieżącą datę w formacie jak na poniższym
przykładzie:
piątek, 29 lipca 2022 12:07
*/

const now = new Date().toLocaleString('pl', {
    dateStyle: 'full',
    timeStyle: 'short'
})

console.log(now);


/* Zadanie nr 3 - Na podstawie podanej listy użytkowników (users) napisz funkcje:
1) sortującą alfabetycznie użytkowników po nazwisku
*/

const users = [
    {
      firstName: "Marek",
      lastName: "Mąciwoda",
      age: 45,
    },
    {
      firstName: "Jan",
      lastName: "Markowski",
      age: 61,
    },
    {
      firstName: "Adam",
      lastName: "Ćma",
      age: 29,
    },
    {
      firstName: "Anna",
      lastName: "Czarna",
      age: 20,
    },
    {
      firstName: "Ewa",
      lastName: "Kowalska",
      age: 30,
    },
  ];
  
  users.sort((a, b) => compare(a,b))
  
  function compare(a,b) {
      if (a.lastName < b.lastName) return -1;
      if (a.lastName > b.lastName) return 1;
      return 0;
  }
  
  console.log(users)


  /* Zadanie nr 3 - Na podstawie podanej listy użytkowników (users) napisz funkcje:
2) filtrującą, która zwróci użytkowników, którzy mają powyżej 30 lat
*/

const users = [
    {
      firstName: "Marek",
      lastName: "Mąciwoda",
      age: 45,
    },
    {
      firstName: "Jan",
      lastName: "Markowski",
      age: 61,
    },
    {
      firstName: "Adam",
      lastName: "Ćma",
      age: 29,
    },
    {
      firstName: "Anna",
      lastName: "Czarna",
      age: 20,
    },
    {
      firstName: "Ewa",
      lastName: "Kowalska",
      age: 30,
    },
  ];

const usersOver = users.filter(user => filterUsers(user))

function filterUsers(user) {
    return user.age > 30
}

console.log(usersOver);