import { useNavigate } from "react-router-dom";
function Nav(){
const navigate = useNavigate();
return(<div className="bg-white flex justify-between py-3 px-6 items-center">
<div className="flex items-center gap-2 cursor-pointer" onClick={()=>navigate("/")}>
<img src='./Img4.jpg' className="w-8"></img>
<p className="text-[#6461b6] font-bold text-lg">Poruch</p>
</div>
<div className="flex">
<ul className="flex gap-6 text-sm">
<li onClick={()=>navigate("/problem")} className="cursor-pointer">About Us</li>
<li className="cursor-pointer">How it works</li>
<li className="cursor-pointer">Why Poruch</li>
<li className="cursor-pointer">Our team</li>
<li className="cursor-pointer">Blog</li>
</ul>
</div>
</div>)
}
export default Nav;