let count = 0;

// const used for declaring the constants (cannot be changed) (local scope)

// let used to declear mutatable variable (can be change) (local scope)

// var use to declear variable in general and it is not recommended (global scope)

/**
 * function in js can be declare
 * as arrow function like this:
 * const name=()=>{
 *      //logic
 *      console.log('something')
 * }
 * or normal functions
 *
 * function name(){
 *      //logic
 *      console.log('do something')
 * }
 *
 * @Avoid using duplicated codes in when coding for easy reading and maintain
 *
 * @Enjoy @NP
 */

const decrease = document.getElementById("decrease");
const increase = document.getElementById("increase");
const resetButn = document.getElementById("reset");
const textContent = document.getElementById("count");

increase.addEventListener("click", () => calculate("+"));
decrease.addEventListener("click", () => calculate("-"));
resetButn.addEventListener("click", () => calculate("r"));
function calculate(countType) {
  /**This is called @ternary_Operator
   * It is structured like this
   * @true?do-something:do-something-when-not-ture
   * It is like if condition with short-handed
   */
  count = countType === "+" ? count + 1 : countType === "r" ? 0 : count - 1;
  textContent.textContent = count;
}
// document.getElementById("decrease").addEventListener("click", function () {
//     count--;
//     document.getElementById("count").innerText = count;
// });

// document.getElementById("reset").addEventListener("click", function () {
//     count = 0;
//     document.getElementById("count").innerText = count;
// });

// document.getElementById("increase").addEventListener("click", function () {
//     count++;
//     document.getElementById("count").innerText = count;
// });
