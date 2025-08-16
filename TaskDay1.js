const classroom = {
  courseName: "Intro to JavaScript",
  batches: [
    {
      id: "AUG",
      students: [
        { id: "s1", name: "Amina", scores: [10, 15, 20] },
        { id: "s2", name: "Omar", scores: [12, 18, 17] }
      ]
    },
    {
      id: "SEP",
      students: [
        { id: "s3", name: "Sara", scores: [20, 19, 18] }
      ]
    }
  ],
  materials: ["console", "strings", "arrays", "objects"]
};





const student = {
  name: "Amina",
  age: 19,
  contact: {
    email: "amina@example.com",
    phones: ["+201100000000", "+201122233344"]
  },
  favorites: {
    colors: ["red", "green", "blue"],
    books: [
      { title: "Eloquent JavaScript", authors: ["Marijn Haverbeke"] },
      { title: "You Don't Know JS", authors: ["Kyle Simpson"] }
    ]
  }
};



//1.. console.log(classroom.courseName);

//2.. console.log(student);

//3.. console.log(student.contact);

//4.. console.log(student.contact.phones.length);

// 5..console.log(classroom.materials);

//6.. console.log(2 + 3);//5
// console.log("2" + 3);//23
// console.log(2 + "3");//23
// console.log("2" + "3");//23
// console.log(2 + 3 + "5");//55
// console.log("5" + 2 + 3);//55 !!! 523 ليه

// const a = "10";
// const b = 5;

//7.. console.log(a+b);
// console.log(parseInt(a)+b);


//8.. console.log(student.contact.phones[0]);

// let x = student.favorites.colors
//9.. console.log(x[x.length - 1]);

// let y = student.favorites.books
//10.. console.log(y[y.length - 1]);

//11.. console.log(classroom.batches[0].students[1].name);


// let t = student.favorites.colors
//  b = t.push("purple")
//12.. console.log(t);

//13.. console.log(student.favorites.books[1].authors);

//14.. console.log(classroom.batches[0].students[1].scores[1]);

const phrase = "  JavaScript is Fun and Powerful!  ";
// console.log(phrase.trim());

// h = phrase.trim()
//15.. console.log(h.toUpperCase());
//16.. console.log(h.toLowerCase()());
  
//17.. console.log(phrase.replace("Fun", "Awesome"))

// const csv = "Amina,19,amina@example.com";
// console.log(csv.split(","));


//  pouns      console.log(
//   classroom.batches[0].students[0].name +
//   " — last score: x =" +
//   classroom.batches[0].students[0].scores[
//     classroom.batches[0].students[0].scores.length - 1
//   ] +
//   " — contains 'a'? " +
//   classroom.batches[0].students[0].name.toLowerCase().includes("a")
// );

// console.log(
//   classroom.batches[0].students[1].name +
//   " — last score: x= " +
//   classroom.batches[0].students[1].scores[
//     classroom.batches[0].students[1].scores.length - 1
//   ] +
//   " — contains 'a'? " +
//   classroom.batches[0].students[1].name.toLowerCase().includes("a")
// );