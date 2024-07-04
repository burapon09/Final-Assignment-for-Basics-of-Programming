// Question #8: Fetching User List from Server
// เริ่มเขียนโค้ดตรงนี้
async function  Jsonplaceholder() {
  let text = await fetch('https://jsonplaceholder.typicode.com/users');
  let arr = await text.json();
  let newUsers = [];
  for(let data of arr){
    newUsers.push(data.name)
  }
  console.log(newUsers);
}
Jsonplaceholder();




