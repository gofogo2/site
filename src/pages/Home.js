import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="bg-black w-screen h-screen">
            <div className="fixed top-0 left-0 w-full h-32 z-10 bg-black flex items-center justify-between px-10 " >
                <Link to="/" className=" cursor-pointer" ><img src="/home/logo.png" alt="logo" className="w-full " /></Link> 
                <div className="flex justify-center items-center gap-20 " ><Link to="/works" className="text-white text-md cursor-pointer" >Works</Link><Link to="/about" className="text-white text-md cursor-pointer" >About</Link><Link to="/contact" className="text-white text-md cursor-pointer" >Contact</Link></div>
            </div>
            <div className="w-full h-full relative overflow-hidden">
                <img
                    src='/home/0.gif'
                    alt="logo"
                    className="absolute w-full h-auto min-h-full object-cover object-center"
                />
            </div>
        </div>
    );
}