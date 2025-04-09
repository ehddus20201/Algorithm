function solution(sides) {
    let result =0;
    sides = sides.sort((a,b)=>b-a);
    console.log(sides);
    result+= sides[0]-(sides[0]-sides[1]+1)+1;
    result+= (sides[0]+sides[1])-sides[0]-1;
    
    return result;
}