function solution(my_string, num1, num2) {
    let my_string1=my_string.split("");
    [my_string1[num1],my_string1[num2]] = [my_string1[num2],my_string1[num1]];
    let my_string2=my_string1.join("");
    return my_string2;
}