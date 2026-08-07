// ==============================
// SUPABASE BAĞLANTISI
// ==============================

const SUPABASE_URL = "https://dtdlncrcpypwnbhcljqg.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_L4Pjsr-scFxhDTbUMzpEjQ_hZrXjO0d";

const supabase = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_ANON_KEY
);

// HTML Elemanları
const table = document.getElementById("userTable");
const totalUsers = document.getElementById("totalUsers");
const bannedUsers = document.getElementById("bannedUsers");
const activeUsers = document.getElementById("activeUsers");
const search = document.getElementById("searchInput");

let users = [];

// ==============================
// KULLANICILARI YÜKLE
// ==============================

async function loadUsers() {

    const { data, error } = await supabase
        .from("users")
        .select("*")
        .order("id", { ascending: true });

    if (error) {
        console.error(error);

        table.innerHTML = `
        <tr>
            <td colspan="7" style="text-align:center;color:red;padding:30px;">
                Supabase bağlantı hatası.
            </td>
        </tr>
        `;

        return;
    }

    users = data;

    renderUsers();

}
