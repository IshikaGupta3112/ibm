import Nav from "./Nav";

function Problem(){
return(
<>
<Nav />
<div className="py-10 px-16 flex gap-6 flex-col">
<div className="w-full">
<div className="bg-[#6977f5] rounded-3xl p-6">
<h1 className="text-3xl text-white font-extrabold">What is Poruch?</h1>
<p className="mt-2 text-white">Poruch is an <strong>online program</strong> of <strong>psychological</strong> support, <strong>mental health</strong> and self-discovery. We are a <strong>team</strong> that is ready to <strong>help you</strong> in difficult life situation and <strong>support</strong> you on the way to mental health and <strong>development</strong>.</p>
</div>
</div>
<div className="flex gap-10 justify-between">
<div className="bg-[#c7d2fe] rounded-3xl p-6 w-[50%]">
<h1 className="text-3xl text-[#6461b6] font-extrabold">Problem</h1>
<ul className="text-[#6461b6] mt-2 flex flex-col gap-2 list-disc pl-3">
<li><strong>Fear</strong> and distrust of psychology and doubts that it helps.</li>
<li>Fear of receiving <strong>psychological support</strong> without remaining privacy.</li>
<li><strong>Sessions</strong> with psychologists are shameful and sign of <strong>weakness</strong> or shortcomings.</li>
<li><strong>Ineffective Communication</strong> with psychological specialists.</li>
</ul>
</div>
<div className="bg-[#f1f4fb] rounded-3xl p-6 w-[50%]">
<h1 className="text-3xl text-[#6461b6] font-extrabold">Solution</h1>
<ul className="text-[#6461b6] mt-2 flex flex-col gap-2 list-disc pl-3">
<li>The Professionalism of specialist is <strong>detailed</strong> by <strong>information</strong> about psychologists and 2 psychotherapists.</li>
<li>Broadcast of <strong>successful cases</strong> of other clients where they share how they solved their problems and how therapy helped them.</li>
<li>An opportunity to <strong>recieve psychological support</strong> for those who want to keep their problems and conversations <strong>confidential.</strong></li>
</ul>
</div>
</div>
</div>
</>
);
}
export default Problem;