import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import projects from '../data/projects';

export default function ProjectDetail() {
    const { id } = useParams();
    const [project, setProject] = useState(null);
    
    useEffect(() => {
        const projectId = parseInt(id);
        const currentProject = projects.find(p => p.id === projectId);
        if (currentProject) {
            setProject(currentProject);
            // 현재 프로젝트 인덱스 저장
            const projectIndex = projects.findIndex(p => p.id === projectId);
            localStorage.setItem('lastViewedProjectIndex', projectIndex.toString());
        }
    }, [id]);

    if (!project) {
        return <div>Loading...</div>;
    }

    return (
        <div className="bg-transparent w-screen h-screen text-white  px-10 py-8">
            {/* 헤더 */}
            <div className="flex justify-between items-center">
                <Link to="/">
                    <img src="/home/logo.png" alt="logo" className="w-32" />
                </Link>
                <div className="flex gap-20">
                    <Link to="/works" className="text-white">Works</Link>
                    <Link to="/about" className="text-white">About</Link>
                    <Link to="/contact" className="text-white">Contact</Link>
                </div>
            </div>

            {/* 우측 하단 일러스트레이션 - 뒤쪽 레이어 */}
            <div className="fixed flex justify-end items-center bottom-0   right-0 z-10 px-24 ">
                {project.illustration && (
                    <img 
                        src={project.illustration} 
                        alt="Project Illustration" 
                        className="max-w-[70%] h-auto opacity-90"
                    />
                )}
            </div>

            {/* 컨텐츠 영역 - 앞쪽 레이어 */}
            <div className="relative flex items-center w-full min-h-screen   px-10 z-20">
                {/* 왼쪽 텍스트 정보 */}
                <div className="flex flex-col   gap-8 max-w-2xl mb-40">
                    {/* 타이틀 섹션 */}
                    <div className="flex flex-col ">
                        <h1 className="text-2xl font-light">{project.title}</h1>
                        <h2 className="text-xl font-light text-[#7e7e7e]">{project.subtitle}</h2>
                    </div>

                    {/* 프로젝트 정보 리스트 */}
                    <div className="flex flex-col  text-xl font-light">
                        <div className="flex gap-2">
                            <span className="opacity-60 ">CLIENT :</span>
                            <span>{project.client}</span>
                        </div>
                        <div className="flex gap-2">
                            <span className="opacity-60 ">USAGE :</span>
                            <span>{project.type}</span>
                        </div>
                        <div className="flex gap-2">
                            <span className="opacity-60 ">SITE AREA :</span>
                            <span>{project.siteArea}</span>
                        </div>
                        <div className="flex gap-2">
                            <span className="opacity-60 ">SCOPE :</span>
                            <span>{project.involvement}</span>
                        </div>
                        <div className="flex gap-2">
                            <span className="opacity-60 ">LOCATION :</span>
                            <span>{project.location}</span>
                        </div>                        
                    </div>
                </div>
            </div>
        </div>
    );
}
