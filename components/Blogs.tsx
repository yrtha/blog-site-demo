import React from "react";
import Link from "next/link";
import Author from "./Author";
import Image from "next/image";
import { sanityClient, urlFor } from "../sanity";
import { Post } from "../typings";

interface Props {
  posts: [Post];
}

function Blogs({ posts }: Props) {
  return (
    
  );
}

// function Post() {
//   return (
//     <div className="item ">
//       <div className="images">
//         <a>
//           <Image
//             src={"/images/blogpic.jpg"}
//             className="rounded cursor-pointer hover:scale-105 ease-in duration-300"
//             height={350}
//             width={400}
//           />
//         </a>
//       </div>
//       <div className="info flex justify-center flex-col py-4">
//         <div className="cat">
//           <a className="text-orange-600 hover:text-orange-800">
//             Business, Travel
//           </a>
//           <a className="text-gray-800">- June 10, 2022</a>
//         </div>
//         <div className="title">
//           <a className="text-xl font-bold text-gray-800 hover:text-gray-600">
//             Your most unhappy customers are your greatest source of learning
//           </a>
//         </div>
//         <p className="text-gray-500 py-3">
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
//           porro fuga, culpa reprehenderit odit harum perspiciatis, dolorum
//           repudiandae expedita repellat voluptate nesciunt, maxime alias
//           incidunt. Ut fuga cum blanditiis corporis?
//         </p>
//         <Author />
//       </div>
//     </div>
//   );
// }




export default Blogs;

