a = 34;
b=34;
a = 2;
 
//let age = 10;

//let incremented_age = age + 1;

//let first_name = "Jon";
// let name = "Dixant";
// let name = `Dixant`;

// console.log(age);

// let details = {
//   first_name: "Dixant",
//   last_name: "Mittal",
// };

let records = [
    {
      first_name: "Dixant",
      last_name: "Mittal",
      phone: 99998888,
    },
    {
      first_name: "Jon",
      last_name: "Scheele",
      email: "jon@email.com",
    },
  ];
  
  // JSON = Javascript Object Notation
  // console.log("My name is: " + details.first_name + details.last_name);
  console.log("Name of first record: " + records[0].first_name);
  
  
  let age = 55;
  
  if (age >= 18) {
    console.log("Eligible for Moderna and Pfizer");
  } else if (age >= 12 && age < 18) {
    console.log("Eligible for Pfizer only");
  } else {
    console.log("Not eligible for now.");
  }
  
  function function_name(parameter1, paremeter2) {
      console.log("Inside the function");
    }
    
    // 2. Anonymous function
    let anon_fn = function (parameter1, parameter2) {
      console.log("Inside the anonymous function");
    };
    
    // 3. Arrow function
    let arrow_fn = (parameter1, parameter2) => {
      console.log("Inside the arrow function");
    };
    
    // Calling the function
    // function_name();
    // anon_fn();
    arrow_fn();
  
    //call back function
  
    function apply_operation(number1, number2, operator) {
      let result = operator(number1, number2);
      return result;
    }
    
    function add(n1, n2) {
      return n1 + n2;
    }
    function product(n1, n2) {
      return n1 * n2;
    }
    
    console.log("Sum is: " + apply_operation(3, 4, add)); // not using add()
    console.log("Product is: " + apply_operation(3, 4, product));
    //inline function does not exist outside of this function
    console.log(
      "Difference is: " +
        apply_operation(3, 4, (n1, n2) => {
          return n1 - n2;
          {)
    );
  //old convention is through anon function
    console.log(
      "Division is : " +
        apply_operation(3, 4, function (n1, n2) {
          return n1 / n2;
        })
    );
    function toolkit1() {
      return "What is the use of <br> tag?";
    }
    function toolkit2() {
      return "What is the role of backend programming?";
    }
    function devops() {
      return "What is the full form of CI/CD?";
    }
    
    function conduct_quiz(student_name, module) {
      // Print the instruction
      console.log("Welcome: " + student_name);
    
      // print the quiz questions
      console.log(module());
    
      // print the completion message
      console.log("The quiz is submitted successfully");
    }
    
    conduct_quiz("Dixant", toolkit2);
    conduct_quiz("Dixant", toolkit1);
    conduct_quiz("Dixant", devops);