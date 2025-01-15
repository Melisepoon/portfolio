import {useState} from 'react'
import Globe from "react-globe.gl";
import Button from "../components/Button.jsx";

const About = () => {
    const [hasCopied, setHasCopied] = useState(false)
    const handleCopy = () => {
        navigator.clipboard.writeText('melisepoon@gmail.com');
        setHasCopied(true);
        setTimeout(() => setHasCopied(false), 2000);
    }
    
    return (
        <section className="c-space my-20" id="about">
            <div className="grid xl:grid-cols-3
            xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src={"/assets/melise.png"}
                             alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain"/>
                        <div>
                            <p className="grid-headtext">
                                Hi, I&#39;m Melise &#128522;
                            </p>
                            <p className="grid-subtext">
                                I&#39;m a software developer with a strong interest in Cyber Security, Blockchain Technology and Economics. <br/>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src={"/assets/tech.png"} alt="grid-2"
                             className="w-full sm:h-[276px] h-fit object-contain"/>
                        <div>
                            <p className="grid-headtext">
                                Tech Stack &#128187;
                            </p>
                            <p className="grid-subtext">
                                <u>Programming Languages:</u>Python, JavaScript, HTML/CSS, C, SQL, Solidity <br/>
                                <u>Frameworks and Libraries:</u> ReactJS, ThreeJS, NodeJS, TailwindCSS<br/>
                                <u>Blockchain Tools:</u> Solidity, Hardhat, Ethereum, EthersJS
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor="rgba(0,0,0,0)"
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                labelsData={[{
                                    lat: 1.3521,
                                    lng: 103.8198,
                                    'text': "I'm Here!",
                                    color: 'white',
                                    size: 40,
                                }]}
                            />
                        </div>
                        <div>
                            <p className="grid-headtext">
                                I&#39;m always open to connecting and exchanging ideas &#128241;
                            </p>
                            <p className="grid-subtext">
                                Currently based in Singapore, I enjoy collaborating with people from all walks of life
                                and exploring opportunities to create and grow together.
                            </p>
                            <p className="grid-subtext2"><br/><em>*P.S. Give the globe a spin and zoom in—there’s a tiny Easter egg waiting to be discovered at my exact location!</em></p>

                            <a href="#contact">
                                <Button name="Contact Me" isBeam containerClass="w-full mt-10"/>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[276px] h-fit object-contain"/>
                        <div>
                            <p className="grid-headtext">
                                My Passion
                            </p>
                            <p className="grid-subtext">
                                I’m passionate about designing and creating innovative applications, and I’m always eager to learn new technologies.
                                With my expertise in Cyber Security and Blockchain Technologies,
                                I’m particularly interested in how these fields, along with economics, come together to form a secure and decentralized ecosystem. <br/>
                                Ultimately, I’m driven by the desire to create solutions that not only advance technology but also have a meaningful, positive impact on society.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img
                            src="/assets/grid4.png"
                            alt="grid-4"
                            className="w-full md:h-[136px] sm:h-[276px] h-fit object-cover sm:object-top"
                            // className="w-full sm:h-[276px] h-fit object-cover sm:object-top"
                        />
                        <div className="space-y-2">
                            <p className="grid-headtext text-center">Email me &#128231;</p>
                            <div className="copy-container" onClick={handleCopy}>
                                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy"/>
                                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">melisepoon@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
export default About
