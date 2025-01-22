import { Link } from 'react-router-dom';

export default function Contact() {
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

            {/* Contact 컨텐츠 */}
            <div className="w-full h-full pt-32 px-10">
                <div className="flex justify-between h-[calc(100vh-8rem)]"> {/* 전체 높이에서 헤더 높이 제외 */}
                    {/* 왼쪽 연락처 정보 */}
                    <div className="flex flex-col gap-6 text-[#e2e2e2] justify-center pb-32">
                        <div>
                            <p className="text-xl">T 02-798-8744</p>
                            <p className="text-xl">F 02-798-8743</p>
                        </div>
                        <div>
                            <p className="text-xl">EMAIL : info@beodd.kr</p>
                        </div>
                        <div>
                            <p className="text-xl">ADD : A-B1, 39-9, HANGANG-DAERO 40-GIL, YONGSAN-GU, SEOUL, KOREA</p>
                        </div>
                        <div>
                            <p className="text-xl">INSTAGRAM : @BEODD_STUDIO</p>
                        </div>
                    </div>

                    {/* 오른쪽 링크 목록 */}
                    <div className="flex flex-col gap-4 text-right text-white justify-end pb-32">
                        <a href="#" className="text-md hover:opacity-70 transition-opacity">BLOG</a>
                        <a href="#" className="text-md hover:opacity-70 transition-opacity">INSTAGRAM</a>
                        <a href="#" className="text-md hover:opacity-70 transition-opacity">CONTACT US</a>
                    </div>
                </div>
            </div>
        </div>
    );
}