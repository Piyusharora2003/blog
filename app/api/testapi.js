import User from "@/models/User";
import connectDb from "@/middleware/mongoose";
import Post from "@/models/Post";
// export default async function handler(req, res) {
//     let user =await User.create({
//         name:"Tisha Garg",
//         profileimg:"https://media.licdn.com/dms/image/D4D03AQGM5H-Elyt4iA/profile-displayphoto-shrink_400_400/0/1682956657437?e=1689811200&v=beta&t=nmqxvlmt_XzQJCG3KFNRsP7_BBHIWfMFhxhkpgOQUpI",
//         mobileno:8743862358,
//         email:"tgarg9991@gmail.com"
//     })

//     res.status(200).json({ name: 'John Doe' });
//   }

const handler = async(req,res)=>{
    let posts = Post.find();
    console.log("hmm");
    res.status(200).json({
        posts
    })
}

export default connectDb(handler);