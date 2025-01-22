import { Link } from 'react-router-dom';

export default function About() {
    return (
        <div className="bg-black w-screen h-screen">
            {/* 헤더 영역 */}
            <div className="fixed top-0 left-0 w-full h-32 z-20 bg-transparent flex items-center justify-between px-10">
                <div><img src="/home/logo.png" alt="logo" className="w-full" /></div>
                <div className="flex justify-center items-center gap-20">
                    <Link to="/works" className="text-[#e2e2e2] text-md cursor-pointer">Works</Link>
                    <Link to="/about" className="text-[#e2e2e2] text-md cursor-pointer">About</Link>
                    <Link to="/contact" className="text-[#e2e2e2] text-md cursor-pointer">Contact</Link>
                </div>
            </div>

            {/* 중앙 이미지 영역 */}
            <div className="w-full h-full flex items-center justify-center px-10 pb-10">
                <div className="w-full max-w-[1200px] aspect-video relative">
                    <img 
                        src="/about/0.png" 
                        alt="About Beodd" 
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* 하단 고정 텍스트 영역 */}
            <div className="fixed bottom-20 left-0 w-full bg-transparent p-10 flex justify-between items-center">
                <div className="text-[#e2e2e2] max-w-3xl">
                    
                </div>
                <div className="flex gap-3 flex-col">
                    <Link to="/portfolio" className="text-[#e2e2e2] hover:opacity-70 transition-opacity">PORTFOLIO</Link>
                    <Link to="/introduction" className="text-[#e2e2e2] hover:opacity-70 transition-opacity">INTRODUCTION</Link>
                </div>
            </div>
        </div>
    );
}