import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        isAdmin: {
            type: Boolean,
            required: true,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);
//front eken ena password ek hduna gnn puluwn wenn meka krnn oni
userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
})

const User = mongoose.model("User", userSchema);
export default User

// Benefits of timestamps: true:
// Track creation time: The createdAt field is useful for knowing when the document was first created. For example, when a user registers on your platform.

// Track update time: The updatedAt field automatically updates whenever the document is modified. This helps in tracking the latest changes made to the document.

// No manual management: Without timestamps: true, you would have to manually add and update createdAt and updatedAt fields in your schema, as well as write code to handle updating updatedAt whenever the document changes.