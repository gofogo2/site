import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import projects from '../data/projects';

export default function Works() {
    const [currentIndex, setCurrentIndex] = useState(() => {
        const savedIndex = localStorage.getItem('lastViewedProjectIndex');
        return savedIndex ? parseInt(savedIndex) : 0;
    });
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [isTitleVisible, setIsTitleVisible] = useState(false);
    const containerRef = useRef(null);
    const isScrolling = useRef(false);
    const navigate = useNavigate();
    
    // 터치 이벤트 관련 상태 추가
    const touchStart = useRef(null);
    const touchEnd = useRef(null);
    const minSwipeDistance = 50;

    // 타이틀 표시 효과를 위한 useEffect
    useEffect(() => {
        if (hoveredIndex !== null) {
            // 약간의 딜레이 후 타이틀 표시
            setTimeout(() => {
                setIsTitleVisible(true);
            }, 50);
        } else {
            setIsTitleVisible(false);
        }
    }, [hoveredIndex]);

    // 컴포넌트 마운트 시 저장된 인덱스로 스크롤
    useEffect(() => {
        const savedIndex = localStorage.getItem('lastViewedProjectIndex');
        if (savedIndex) {
            const index = parseInt(savedIndex);
            setTimeout(() => {
                scrollToImage(index, false); // 즉시 스크롤
            }, 100);
        }
    }, []);

    const handleProjectClick = (projectId, e, isImageClick) => {
        if (isImageClick && !isScrolling.current) {
            // 현재 인덱스 저장
            const currentProject = projects.findIndex(p => p.id === projectId);
            localStorage.setItem('lastViewedProjectIndex', currentProject.toString());
            navigate(`/works/project/${projectId}`);
        }
    };

    const scrollToImage = (index, smooth = true) => {
        if (isScrolling.current) return;
        
        isScrolling.current = true;
        setCurrentIndex(index);
        localStorage.setItem('lastViewedProjectIndex', index.toString());
        
        const container = containerRef.current;
        if (container) {
            container.children[index].scrollIntoView({
                behavior: smooth ? 'smooth' : 'auto',
                block: 'start'
            });
            
            setTimeout(() => {
                isScrolling.current = false;
            }, smooth ? 250 : 0);
        }
    };

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        let lastScrollTime = 0;
        const scrollThreshold = 1000;

        const handleWheel = (e) => {
            e.preventDefault();
            
            const currentTime = new Date().getTime();
            if (currentTime - lastScrollTime < scrollThreshold || isScrolling.current) {
                return;
            }

            const direction = e.deltaY > 0 ? 1 : -1;
            const nextIndex = Math.min(Math.max(currentIndex + direction, 0), projects.length - 1);
            
            if (nextIndex !== currentIndex) {
                lastScrollTime = currentTime;
                scrollToImage(nextIndex);
            }
        };

        container.addEventListener('wheel', handleWheel, { passive: false });
        
        return () => {
            container.removeEventListener('wheel', handleWheel);
        };
    }, [currentIndex, projects.length]);

    // 터치 이벤트 핸들러 추가
    const onTouchStart = (e) => {
        touchEnd.current = null;
        touchStart.current = e.targetTouches[0].clientY;
    };

    const onTouchMove = (e) => {
        touchEnd.current = e.targetTouches[0].clientY;
    };

    const onTouchEnd = () => {
        if (!touchStart.current || !touchEnd.current) return;

        const distance = touchStart.current - touchEnd.current;
        const isSwipe = Math.abs(distance) > minSwipeDistance;

        if (isSwipe) {
            // 위로 스와이프
            if (distance > 0 && currentIndex < projects.length - 1) {
                scrollToImage(currentIndex + 1);
            }
            // 아래로 스와이프
            else if (distance < 0 && currentIndex > 0) {
                scrollToImage(currentIndex - 1);
            }
        }

        touchStart.current = null;
        touchEnd.current = null;
    };

    return (
        <div className="bg-black w-screen h-screen">
            {/* 헤더 영역 */}
            <div className="fixed top-0 left-0 w-full h-32 z-20  flex items-center justify-between px-10">
                <div><img src="/home/logo.png" alt="logo" className="w-full" /></div>
                <div className="flex justify-center items-center gap-20">
                    <Link to="/works" className="text-white text-md cursor-pointer">Works</Link>
                    <Link to="/about" className="text-white text-md cursor-pointer">About</Link>
                    <Link to="/contact" className="text-white text-md cursor-pointer">Contact</Link>
                </div>
            </div>

            {/* Dot 인디케이터 */}
            <div className="fixed right-8 top-40 z-40 flex flex-col gap-3">
                {projects.map((project, index) => (
                    <button
                        key={index}
                        onClick={() => scrollToImage(index)}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        className={`w-2 h-2 rounded-full transition-all duration-500 ease-in-out ${
                            currentIndex === index 
                                ? 'bg-white scale-125' 
                                : 'bg-gray-500 hover:bg-white'
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                    />
                ))}
            </div>

            {/* 이미지 리스트 */}
            <div 
                ref={containerRef} 
                className="w-full snap-y snap-mandatory overflow-y-auto scroll-smooth scrollbar-hide pt-32 touch-none"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
                style={{
                    scrollBehavior: 'smooth',
                    WebkitOverflowScrolling: 'touch',
                    msOverflowStyle: 'none',
                    scrollbarWidth: 'none'
                }}
            >
                {projects.map((project, index) => (
                    <div 
                        key={project.id} 
                        className="w-full snap-start relative flex items-start justify-center"
                    >
                        <img 
                            src={project.image}
                            alt={project.title}
                            className="w-full h-auto object-contain cursor-pointer"
                            draggable="false"
                            onClick={(e) => handleProjectClick(project.id, e, true)}
                        />
                    </div>
                ))}
            </div>

            {/* 호버 시 타이틀 오버레이 수정 */}
            {hoveredIndex !== null && (
                <>
                    {/* 배경 딤 처리 - 더 빠른 페이드인 */}
                    <div 
                        className="fixed inset-0 bg-black z-30 transition-opacity duration-300 ease-in-out"
                        style={{
                            animation: 'dimFadeIn 0.3s ease-in-out forwards'
                        }}
                    />
                    
                    {/* 텍스트 - 더 느린 페이드인 */}
                    <div 
                        className="fixed bottom-10 left-10 flex flex-col gap-1 z-30 transition-opacity duration-500 ease-in-out"
                        style={{
                            animation: 'textFadeIn 0.5s ease-in-out forwards'
                        }}
                    >
                        <h2 className="text-white text-3xl font-light opacity-80">
                            {projects[hoveredIndex].title}
                        </h2>
                        <p className="text-white text-sm font-extralight opacity-70">
                            {projects[hoveredIndex].subTitle}
                        </p>
                    </div>
                </>
            )}

            <style jsx>{`
                @keyframes dimFadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 0.4;
                    }
                }

                @keyframes textFadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }
            `}</style>
        </div>
    );
}