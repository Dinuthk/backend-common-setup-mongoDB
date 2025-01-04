import bcypt from "bcryptjs";

const users = [
    {
        name: "Admin User",
        email: "Oq6lK@example.com",
        password: bcypt.hashSync("123456", 10),
        isAdmin: true,
    },
    {
        name: "John Doe",
        email: "M2t9H@example.com",
        password: bcypt.hashSync("123456", 10),
        isAdmin: false,
    },
    {
        name: "Jane Doe",
        email: "Df9bI@example.com",
        password: bcypt.hashSync("123456", 10),
        isAdmin: false,
    },    
]

export default users
    