import mongoose,{Document,Model,Schema} from "mongoose";
import bcrypt from "bcryptjs";

const emailRegexPattern:RegExp = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    avatar:{
        public_id:string;
        url:string;
    }
   role: string;
   isverified:boolean;
   courses: Array<{courseId: string}>;
   comparePassword: (enteredPassword: string) => Promise<boolean>;
}

const userSchema:Schema<IUser> = new Schema({
    name:{
        type:String,
        required:[true,"Please enter your name"],
    
    },
    email:{
        type:String,
        required:[true,"Please enter your email"],
        validate:{
            validator: function(email:string){
                return emailRegexPattern.test(email);
            },
            message:"Please enter a valid email",
        },
        unique:true,
       
    },
    password:{
        type:String,
        required:[true,"Please enter your password"],
        minlength:[6,"Your password must be longer than 6 characters"],
        select:false
    },
    avatar:{
        public_id:{
            type:String,
           
        },
        url:{
            type:String,
            
        }
    },
    role:{
        type:String,
        default:"user"
    },
    isverified:{
        type:Boolean,
        default:false
    },
    courses:[
        {
            courseId: String,
        }
    ],
},{
    timestamps:true
});

// Encrypting password before saving user
userSchema.pre<IUser>("save",async function(next){
    if(!this.isModified("password")){
        next();
    }
    this.password = await bcrypt.hash(this.password,10);
});

// Compare user password
userSchema.methods.comparePassword = async function(enteredPassword:string){
    return await bcrypt.compare(enteredPassword,this.password);
}

const userModel:Model<IUser> = mongoose.model("User",userSchema);
export default userModel;