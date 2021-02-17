const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


Regex_demo = (test_string) => {
    lion_regex = new RegExp("^lion")
    cat_regex = new RegExp("cat$")
    abc_regex = new RegExp("ab+c")
    
    if(lion_regex.test(test_string)){
      //console.log(test_string,"has lion in the beginning")
      return 1;
    }

    else if(cat_regex.test(test_string)){
      //console.log(test_string,"has cat at the end")
      return test_string.length-2;
    }

    else if(abc_regex.test(test_string)){
      //console.log(test_string,"has ab+c at the position",test_string.search(abc_regex))
      return test_string.search(abc_regex)+1;
    }

    else {
      return false;
    }
}

rl.question('Enter a text to search : ', (test_string) => {
  //console.log(`Thank you for your valuable feedback: ${answer}`);
  let position = Regex_demo(test_string)
  if(position!=false){
      console.log("True , position: ",position-1)
  }
  else {
    console.log("False")
  }
  
  rl.close();
});