import Nav from "./Nav";

function Home(){
return(
<>
<div>
<Nav />
<div className="flex gap-2 px-8">
<div className="flex flex-col w-[50%]">
<div className="pt-8">
<p className="text-8xl font-semibold">Your Mental Health Matter</p>
<p className="text-xl mt-4">Here you can find resources, tips, and support to help you improve your mental health. </p>
<span className="flex items-center bg-[#eef2ff] mt-4 rounded-2xl pl-3 py-1 pr-1 gap-2 text-[#6461b6] w-fit">Join the wave &rarr;<span className="bg-[#6461b6] text-white p-2 rounded-xl">Subscribe</span></span>
</div>
<div className="flex justify-between gap-8 w-full mt-4">
<img src='./Img2.jpg' className="rounded-2xl"></img>
</div>
</div>
<div className="w-[50%] flex flex-col gap-2">
<img src='./Img3.jpg' className="rounded-2xl"></img>
<div className='flex justify-between w-full'>
<img src='./Img1.jpg' className="rounded-2xl w-32"></img>
<img src='./Img1.jpg' className="rounded-2xl w-32"></img>
<img src='./Img1.jpg' className="rounded-2xl w-32"></img>
<img src='./Img1.jpg' className="rounded-2xl w-32"></img>
<img src='./Img1.jpg' className="rounded-2xl w-32"></img>
</div>
</div>
</div>
</div>
</>
)
}

export default Home;