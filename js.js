
let factors = [];
let factors_function = function(number1){
  let rest = null;
  for(let i=0;i<number1;i++){
    if(number1 % i ===0 & i !=1){
      factors.push(i);
      rest = number1 / i;
      break;
    }
  }

  if(rest !== null){
    factors_function(rest);
  }else{
    factors.push(number1)
  }
  console.log(factors)
  return factors;
}
let input = document.getElementById('input_number');
let span_result = document.getElementById('span_even');
input.addEventListener('change',function(){
  span_result.textContent = '=';
  factors = [];
  factors= factors_function(Number(input.value));
  let powers_array = counting_power_function(factors);
  let unique_factors = delete_copy_function(factors);
  console.log(unique_factors);
  console.log(powers_array);
  console.log(factors)
  for(let i =0;i<unique_factors.length;i++){
    if(powers_array[i] >1){
      span_result.textContent =span_result.textContent + unique_factors[i] +'^' + powers_array[i] + '*'; 
    }else{
      if(i +1 == unique_factors.length){
        console.log('yy')
      }
      span_result.textContent =span_result.textContent + unique_factors[i] +'*';
    }
  }
})
let counting_power_function = function(array){
  let switch_power = false;
  let power_array = [];
  for(let i=0;i<array.length;i++){
    let repeat_count = 0;
    if(array[i-1] == array[i]){
      switch_power = true;
    }else if(array[i-1] != array[i]){
      switch_power = false;
    }
    if(switch_power == false){
      console.log(i);
      for(let ii=0;ii<array.length;ii++){
        if(array[i] == array[ii]){
          repeat_count++;
        }
      }
      power_array.push(repeat_count);
    }
  }
  console.log(power_array);
  return power_array;
}

function delete_copy_function(a) {
  var seen = {};
  var out = [];
  var len = a.length;
  var j = 0;
  for(var i = 0; i < len; i++) {
       var item = a[i];
       if(seen[item] !== 1) {
             seen[item] = 1;
             out[j++] = item;
       }
  }
  return out;
}