const users = [
{
id:1,
username:"Talha",
status:"Aktif"
},
{
id:2,
username:"Ahmet",
status:"Banlı"
},
{
id:3,
username:"Mehmet",
status:"Aktif"
},
{
id:4,
username:"Ali",
status:"Aktif"
},
{
id:5,
username:"Yusuf",
status:"Banlı"
}
];

const table = document.getElementById("userTable");
const totalUsers = document.getElementById("totalUsers");
const bannedUsers = document.getElementById("bannedUsers");
const activeUsers = document.getElementById("activeUsers");
const search = document.querySelector("header input");

function renderUsers(filter = "") {

table.innerHTML = "";

let active = 0;
let banned = 0;

users
.filter(user =>
user.username.toLowerCase().includes(filter.toLowerCase())
)
.forEach(user=>{

if(user.status==="Aktif")
active++;
else
banned++;

const tr=document.createElement("tr");

tr.innerHTML=`
<td>${user.id}</td>
<td>${user.username}</td>

<td>
<span class="status ${user.status==="Aktif"?"online":"offline"}">
${user.status}
</span>
</td>

<td>

<button class="${user.status==="Aktif"?"ban":"unban"}"
onclick="toggleBan(${user.id})">

${user.status==="Aktif"?"Banla":"Ban Kaldır"}

</button>

<button onclick="deleteUser(${user.id})">
Sil
</button>

</td>
`;

table.appendChild(tr);

});

totalUsers.textContent=users.length;
activeUsers.textContent=active;
bannedUsers.textContent=banned;

}

function toggleBan(id){

const user=users.find(u=>u.id===id);

if(user.status==="Aktif")
user.status="Banlı";
else
user.status="Aktif";

renderUsers(search.value);

}

function deleteUser(id){

const index=users.findIndex(u=>u.id===id);

if(index!==-1)
users.splice(index,1);

renderUsers(search.value);

}

search.addEventListener("input",()=>{

renderUsers(search.value);

});

renderUsers();
