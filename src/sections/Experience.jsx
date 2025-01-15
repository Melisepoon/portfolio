import {Canvas} from "@react-three/fiber";
import {workExperiences} from "../constants/index.js";
import {OrbitControls} from "@react-three/drei";
import Developer from "../components/Developer.jsx";
import {Suspense, useState} from "react";
import CanvasLoader from "../components/CanvasLoader.jsx";
//https://models.readyplayer.me/6771092df8d46f85c3cac6c7.glb

const Experience = () => {
    const [animationName, setAnimationName] = useState('idle')
    return (
        <section className="c-space my-20" id="experience">
            <div className="w-full text-white-600">
                <h3 className="head-text">
                    Education & Experience
                </h3>
                <div className="work-container">
                    <div className="work-canvas">
                        <Canvas>
                            <ambientLight intensity={7}/>
                            <spotLight position={[10,10,10]} angle={0.15} penubra={1}/>
                            <directionalLight position={[10,10,10]} intensity={2.5}/>
                            <OrbitControls enableZoom={false} maxPolarAngle={Math.PI/2.5}/>
                            <Suspense fallback={<CanvasLoader/>}>
                                <Developer position-y={-3} scale={3}
                                animationName={animationName}/>
                            </Suspense>
                        </Canvas>
                    </div>

                    <div className="work-content">
                        <div className="sm:py-10 py-5 sm:px-5 px-2.5">
                            {workExperiences.map(({id,name,pos,icon,
                                                      duration, title, animation} ) => (
                                <div key={id} className="work-content_container group"
                                     onClick={() => setAnimationName(animation.toLowerCase())}
                                     onPointerOver={() => setAnimationName(animation.toLowerCase())}
                                     onPointerOut={() => setAnimationName('idle')}>
                                    <div className="flex flex-col h-full justify-start items-center py-2">
                                        <div className="work-content_logo" style={{backgroundColor: '#d9d9d9'}}>
                                            <img src={icon} alt="logo" className="w-full h-full"/>
                                        </div>
                                        <div className="work-content_bar"/>
                                    </div>
                                    <div className="sm:p-5 px-2.5 py-5">
                                        <p className="font-bold text-white-800">
                                            {name}
                                        </p>
                                        <p className="text-sm mb-5">
                                            {pos} -- {duration}
                                        </p>
                                        <p className="group-hover:text-white transition ease-in-out duration-500 animateText">
                                            {title}
                                        </p>
                                    </div>

                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Experience
