const problems = [
  {
    id: "map1",
    text: "Get an array of all names (mse map)",
    solution: [
      "Luke Skywalker",
      "Darth Vader",
      "Leia Organa",
      "Anakin Skywalker",
    ],
  },
  {
    id: "map2",
    text: "Get an array of all heights (use map)",
    solution: ["172", "202", "150", "188"],
  },
  {
    id: "map3",
    text: "Get an array of objects with just name and height properties (use map)",
    solution: [
      { name: "Luke Skywalker", height: "172" },
      { name: "Darth Vader", height: "202" },
      { name: "Leia Organa", height: "150" },
      { name: "Anakin Skywalker", height: "188" },
    ],
  },
  {
    id: "map4",
    text: "Get an array of all first names (use map)",
    solution: ["Luke", "Darth", "Leia", "Anakin"],
  },
  {
    id: "reduce1",
    text: "Get the total mass of all characters (use reduce)",
    solution: 346,
  },
  {
    id: "reduce2",
    text: "Get the total height of all characters (use reduce)",
    solution: 712,
  },
  {
    id: "reduce3",
    text: "Get the total number of characters in all the character names (use reduce)",
    solution: 51,
  },
  {
    id: "reduce 4",
    text: "Get the total number of characters by eye color (hint. a map of eye color to count) (use reduce)",
    solution: { blue: 2, yellow: 1, brown: 1 },
  },
  {
    id: "filter1",
    text: "Get characters with mass greater than 100 (use filter)",
    solution: [
      {
        name: "Darth Vader",
        height: "202",
        mass: "136",
        eye_color: "yellow",
        gender: "male",
      },
      {
        name: "Anakin Skywalker",
        height: "188",
        mass: "84",
        eye_color: "blue",
        gender: "male",
      },
    ],
  },
  {
    id: "filter2",
    text: "Get characters with height less than 200 (use filter)",
    solution: [
      {
        name: "Luke Skywalker",
        height: "172",
        mass: "77",
        eye_color: "blue",
        gender: "male",
      },
      {
        name: "Leia Organa",
        height: "150",
        mass: "49",
        eye_color: "brown",
        gender: "female",
      },
      {
        name: "Anakin Skywalker",
        height: "188",
        mass: "84",
        eye_color: "blue",
        gender: "male",
      },
    ],
  },
  {
    id: "filter3",
    text: "Get all male characters (use filter)",
    solution: [
      {
        name: "Luke Skywalker",
        height: "172",
        mass: "77",
        eye_color: "blue",
        gender: "male",
      },
      {
        name: "Darth Vader",
        height: "202",
        mass: "136",
        eye_color: "yellow",
        gender: "male",
      },
      {
        name: "Anakin Skywalker",
        height: "188",
        mass: "84",
        eye_color: "blue",
        gender: "male",
      },
    ],
  },
  {
    id: "filter4",
    text: "Get all female characters (use filter)",
    solution: [
      {
        name: "Leia Organa",
        height: "150",
        mass: "49",
        eye_color: "brown",
        gender: "female",
      },
    ],
  },
  {
    id: "sort1",
    text: "Sort by name",
    solution: [
      {
        name: "Anakin Skywalker",
        height: "188",
        mass: "84",
        eye_color: "blue",
        gender: "male",
      },
      {
        name: "Darth Vader",
        height: "202",
        mass: "136",
        eye_color: "yellow",
        gender: "male",
      },
      {
        name: "Leia Organa",
        height: "150",
        mass: "49",
        eye_color: "brown",
        gender: "female",
      },
      {
        name: "Luke Skywalker",
        height: "172",
        mass: "77",
        eye_color: "blue",
        gender: "male",
      },
    ],
  },
  {
    id: "sort2",
    text: "Sort by mass",
    solution: [
      {
        name: "Leia Organa",
        height: "150",
        mass: "49",
        eye_color: "brown",
        gender: "female",
      },
      {
        name: "Luke Skywalker",
        height: "172",
        mass: "77",
        eye_color: "blue",
        gender: "male",
      },
      {
        name: "Anakin Skywalker",
        height: "188",
        mass: "84",
        eye_color: "blue",
        gender: "male",
      },
      {
        name: "Darth Vader",
        height: "202",
        mass: "136",
        eye_color: "yellow",
        gender: "male",
      },
    ],
  },
  {
    id: "sort3",
    text: "Sort by height",
    solution: [
      {
        name: "Leia Organa",
        height: "150",
        mass: "49",
        eye_color: "brown",
        gender: "female",
      },
      {
        name: "Luke Skywalker",
        height: "172",
        mass: "77",
        eye_color: "blue",
        gender: "male",
      },
      {
        name: "Anakin Skywalker",
        height: "188",
        mass: "84",
        eye_color: "blue",
        gender: "male",
      },
      {
        name: "Darth Vader",
        height: "202",
        mass: "136",
        eye_color: "yellow",
        gender: "male",
      },
    ],
  },
  {
    id: "sort4",
    text: "Sort by gender",
    solution: [
      {
        name: "Leia Organa",
        height: "150",
        mass: "49",
        eye_color: "brown",
        gender: "female",
      },
      {
        name: "Luke Skywalker",
        height: "172",
        mass: "77",
        eye_color: "blue",
        gender: "male",
      },
      {
        name: "Anakin Skywalker",
        height: "188",
        mass: "84",
        eye_color: "blue",
        gender: "male",
      },
      {
        name: "Darth Vader",
        height: "202",
        mass: "136",
        eye_color: "yellow",
        gender: "male",
      },
    ],
  },
  {
    id: "every1",
    text: "Does every character have blue eyes? (use every)",
    solution: false,
  },
  {
    id: "every2",
    text: "Does every character have mass more than 40? (use every)",
    solution: true,
  },
  {
    id: "every3",
    text: "Is every character shorter than 200? (use every)",
    solution: true,
  },
  {
    id: "every4",
    text: "Is every character male? (use every)",
    solution: false,
  },
  {
    id: "some1",
    text: "Is there at least one male character? (use some)",
    solution: true,
  },
  {
    id: "some2",
    text: "Is there at least one character with blue eyes? (use some)",
    solution: true,
  },
  {
    id: "some3",
    text: "Is there at least one character taller than 200? (use some)",
    solution: true,
  },
  {
    id: "some4",
    text: "Is there at least one character that has mass less than 50? (use some)",
    solution: true,
  },
];

const list = document.getElementById("problems");

problems.forEach((problem) => {
  const textEl = document.createElement("p");
  textEl.innerText = problem.text;
  const myAnswerPreEl = document.createElement("pre");
  if (window[problem.id]) {
    myAnswerPreEl.innerText = JSON.stringify(window[problem.id]());
    if (
      JSON.stringify(window[problem.id]()) === JSON.stringify(problem.solution)
    ) {
      myAnswerPreEl.classList.add("correct");
    }
  } else {
    myAnswerPreEl.innerText = `Add "function ${problem.id}() {...}" in index.js and return your answer`;
  }
  const myAnswerEl = document.createElement("p");
  myAnswerEl.innerText = "My answer: ";
  myAnswerEl.appendChild(myAnswerPreEl);
  const correctAnswerPreEl = document.createElement("pre");
  correctAnswerPreEl.innerText = JSON.stringify(problem.solution);
  const correctAnswerEl = document.createElement("p");
  correctAnswerEl.innerText = "Correct answer: ";
  correctAnswerEl.appendChild(correctAnswerPreEl);
  const problemEl = document.createElement("li");
  problemEl.appendChild(textEl);
  problemEl.appendChild(myAnswerEl);
  problemEl.appendChild(correctAnswerEl);

  if (window[problem.id]) {
    if (
      JSON.stringify(window[problem.id]()) === JSON.stringify(problem.solution)
    ) {
      problemEl.style.color = "green";
    } else {
      problemEl.style.color = "red";
    }
  }

  list.appendChild(problemEl);
});
