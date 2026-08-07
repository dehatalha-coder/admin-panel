*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:"Segoe UI",sans-serif;
}

body{
    background:#0d1117;
    color:#fff;
    display:flex;
    min-height:100vh;
}

/* Sidebar */

.sidebar{
    width:250px;
    background:#161b22;
    border-right:1px solid #30363d;
    padding:30px 20px;
}

.sidebar h2{
    color:#58a6ff;
    text-align:center;
    margin-bottom:40px;
    letter-spacing:2px;
}

.sidebar ul{
    list-style:none;
}

.sidebar li{
    padding:15px;
    margin-bottom:10px;
    border-radius:10px;
    cursor:pointer;
    transition:.25s;
    color:#c9d1d9;
}

.sidebar li:hover{
    background:#21262d;
    color:#58a6ff;
}

.sidebar .active{
    background:#238636;
    color:white;
}

/* Main */

.content{
    flex:1;
    padding:35px;
}

header{
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-bottom:30px;
}

header h1{
    font-size:32px;
}

header input{
    width:260px;
    padding:12px;
    border:none;
    outline:none;
    border-radius:10px;
    background:#21262d;
    color:white;
}

/* Cards */

.cards{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
    gap:20px;
    margin-bottom:35px;
}

.card{
    background:#161b22;
    border:1px solid #30363d;
    border-radius:15px;
    padding:25px;
    transition:.3s;
}

.card:hover{
    transform:translateY(-5px);
    border-color:#58a6ff;
    box-shadow:0 0 20px rgba(88,166,255,.15);
}

.card h3{
    color:#8b949e;
    margin-bottom:12px;
    font-size:16px;
}

.card span{
    font-size:36px;
    font-weight:bold;
}

/* Table */

table{
    width:100%;
    border-collapse:collapse;
    background:#161b22;
    border-radius:15px;
    overflow:hidden;
}

thead{
    background:#21262d;
}

th{
    padding:18px;
    text-align:left;
    color:#58a6ff;
    font-size:15px;
}

td{
    padding:18px;
    border-top:1px solid #30363d;
}

tr:hover{
    background:#1d2228;
}

/* Buttons */

button{
    border:none;
    padding:9px 16px;
    border-radius:8px;
    color:white;
    cursor:pointer;
    transition:.25s;
    font-weight:600;
}

.ban{
    background:#da3633;
}

.ban:hover{
    background:#f85149;
}

.unban{
    background:#238636;
}

.unban:hover{
    background:#2ea043;
}

/* Status */

.status{
    padding:6px 12px;
    border-radius:20px;
    font-size:13px;
    font-weight:bold;
}

.online{
    background:#238636;
}

.offline{
    background:#da3633;
}

/* Scrollbar */

::-webkit-scrollbar{
    width:10px;
}

::-webkit-scrollbar-thumb{
    background:#30363d;
    border-radius:20px;
}

::-webkit-scrollbar-thumb:hover{
    background:#58a6ff;
}
