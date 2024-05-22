const triArray = [5,6,7];

function triangleArea(sides)
{
   const s = (sides[0] + sides[1] + sides[2])/2;
   const area = Math.sqrt (s* (s-sides[0])*(s-sides[1])*(s-sides[2]));
   return area;
}

console.log("\nTriangle area: " + triangleArea(triArray));
