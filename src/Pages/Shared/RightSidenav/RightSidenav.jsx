import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Qzune1 from '../../../assets/qZone1.png'
import Qzune2 from '../../../assets/qZone2.png'
import Qzune3 from '../../../assets/qZone3.png'
const RightSidenav = () => {
  return (
    <div>
      <div className="space-y-3 mb-6">
        <h2 className="text-3xl">Login with</h2>
        <button className="btn  w-full btn-outline">
          <FaGoogle></FaGoogle>
          Google
        </button>
        <button className="btn w-full btn-outline">
          <FaGithub></FaGithub>
          Github
        </button>
      </div>
      <div className=" mb-6">
        <h2 className="text-3xl">Find us on </h2>
        <a
          className="p-4 flex items-center text-lg border rounded-t-lg "
          href=""
        >
     
          <FaFacebook className="mr-3"></FaFacebook>
          Facebook
        </a>
        <a className="p-4 flex items-center text-lg border-x  " href="">
         
          <FaTwitter className="mr-3"></FaTwitter>
          Twiter
        </a>
        <a
          className="p-4 flex items-center text-lg border rounded-b-lg "
          href=""
        >
        
          <FaInstagram className="mr-3"></FaInstagram>
          instragram
        </a>
      </div>
      {/* Q zune */}
      <div className="space-y-3 mb-6">
        <h2 className="text-3xl">Q zune </h2>
        <img src={Qzune1} alt="" />
        <img src={Qzune2} alt="" />
        <img src={Qzune3} alt="" />
      </div>
    </div>
  );
};

export default RightSidenav;
