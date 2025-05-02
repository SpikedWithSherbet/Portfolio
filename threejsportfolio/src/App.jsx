
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Billboard, OrbitControls, useGLTF, Stars } from '@react-three/drei'
import { useRef, useEffect, useState } from 'react'
import { motion } from "motion/react"
import * as THREE from 'three'
import gsap from 'gsap'
import AnimatedCursor from "react-animated-cursor"
import './App.css'


function Earth() {
    const { scene } = useGLTF('./src/assets/Earth/scene.gltf')
    const groupRef = useRef()

    scene.position.set(0, 0, 0)
    scene.scale.set(0.15, 0.15, 0.15)

    return (
        <primitive ref={groupRef} object={scene}/>
    )
}

function Board({ onClick }) {
    const { scene } = useGLTF('./src/assets/billboard/scene.gltf')
    const groupRef = useRef()

    scene.position.set(0, 12, 0)
    scene.scale.set(0.2, 0.2, 0.2)

    return (
        <primitive ref={groupRef} object={scene} onClick={onClick} />
    )
}

function Building({ onClick }) {
    const { scene } = useGLTF('./src/assets/Building/scene.gltf')
    const groupRef = useRef()

    useEffect(() => {
        if (groupRef.current) {
            groupRef.current.position.set(14.73, 0, 0)
            groupRef.current.scale.set(0.05, 0.05, 0.05)
            groupRef.current.rotation.set(0, 0, -114.7)
        }
    }, [])

    return (
        <primitive ref={groupRef} object={scene} onClick={onClick} />
    )
}

function GraduationCap({ onClick }) {
    const { scene } = useGLTF('./src/assets/gradcap/scene.gltf')
    const groupRef = useRef()

    useEffect(() => {
        if (groupRef.current) {
            groupRef.current.position.set(-13, -10.7, -1)
            groupRef.current.scale.set(1, 1, 1)
            groupRef.current.rotation.set(0, 50, -4.0)
        }
    }, [])

    return (
        <primitive ref={groupRef} object={scene} onClick={onClick} />
    )
}

function Scene({ setShowModal, setModalContent }) {
    const { camera } = useThree()
    const controlsRef = useRef()

    const handleModelClick = (event, objectname) => {
        event.stopPropagation()

        const selectedObject = event.object
        setModalContent(objectname)
        setShowModal(true)

        gsap.to(controlsRef.current.target, { x: 0.1, z: 0, duration: 1.5 })
        gsap.to(camera.position, { x: 20, z: 30, duration: 1.5 })
    }

    return (
        <>
           
            <Earth />
            <Stars />
            <Building onClick={(e) => handleModelClick(e, 'Building')} />
            <Board onClick={(e) => handleModelClick(e, 'Board')} />
            <GraduationCap onClick={(e) => handleModelClick(e, 'GradCap')} />
            <OrbitControls ref={controlsRef} enableZoom={false} />
            <ambientLight intensity={1} color={0xffffff} />
        </>
    )
}

function AesopProject({ aesopactiveStatus = false, setIsActive, isActive, setAesopIsActive }) {

    const projectStyles = {

        display: aesopactiveStatus ? 'block' : 'none',
        gap: '1rem'
        ,
    };

    return (
        <div className="singleproject" style={projectStyles}>
            <h1>AESOP'S FABLES</h1>

            <div className="singleprojectbody">
                <img
            className="ProjectThumb"
            src="./src/assets/AesopThumb.png"
                alt="Diorama of a flat plane with a fox, a bee, a hare, and a tortoise, along with the words Aesops Fables captioning it." />

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            </div>

            <button onClick={() => {
                setAesopIsActive(false);
                setIsActive(true);
            }}>BACK</button>
        </div>
        );
}

function LeoProject({ leoactiveStatus = false, setIsActive, isActive, setLeoIsActive }) {

    const projectStyles = {

        display: leoactiveStatus ? 'block' : 'none',
        gap: '1rem'
        ,
    };

    return (
        <div className="singleproject" style={projectStyles}>
            <h1>LEO</h1>

            <div className="singleprojectbody">
                <img
                    className="ProjectThumb"
                    src="./src/assets/LeoThumb.png"
                    alt="Leo project" />

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            </div>

            <button onClick={() => {
                setLeoIsActive(false);
                setIsActive(true);
            }}>BACK</button>
        </div>
    );
}

function PosterProject({ posterActiveStatus = false, setIsActive, setPosterIsActive }) {
    const projectStyles = {
        display: posterActiveStatus ? 'block' : 'none',
        gap: '1rem',
    };

    return (
        <div className="singleproject" style={projectStyles}>
            <h1>POSTER</h1>
            <div className="singleprojectbody">
                <img className="ProjectThumb" src="./src/assets/PosterThumb.png" alt="Poster project" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            </div>
            <button onClick={() => {
                setPosterIsActive(false);
                setIsActive(true);
            }}>BACK</button>
        </div>
    );
}

function TVShowProject({ tvActiveStatus = false, setIsActive, setTVIsActive }) {
    const projectStyles = {
        display: tvActiveStatus ? 'block' : 'none',
        gap: '1rem',
    };

    return (
        <div className="singleproject" style={projectStyles}>
            <h1>TV SHOW</h1>
            <div className="singleprojectbody">
                <img className="ProjectThumb" src="./src/assets/TVShowThumb.png" alt="TV show project" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            </div>
            <button onClick={() => {
                setTVIsActive(false);
                setIsActive(true);
            }}>BACK</button>
        </div>
    );
}


function ImageGrid({
    activeStatus = true,
    setAesopIsActive,
    setLeoIsActive,
    setPosterIsActive,
    setTVIsActive,
    setIsActive
}) {
    const gridStyles = {
        display: activeStatus ? 'flex' : 'none',
        gap: '1.5rem',
    };

    return (
        <div>
            <h1 style={gridStyles}>PROJECTS</h1>
            <div className="ImageGrid" style={gridStyles}>
                <img
                    className="ProjectThumb"
                    src="./src/assets/AesopThumb.png"
                    alt="Aesop project"
                    onClick={() => {
                        setAesopIsActive(true);
                        setIsActive(false);
                    }}
                />
                <img
                    className="ProjectThumb"
                    src="./src/assets/LeoThumb.png"
                    alt="Leo project"
                    onClick={() => {
                        setLeoIsActive(true);
                        setIsActive(false);
                    }}
                />
                <img
                    className="ProjectThumb"
                    src="./src/assets/PosterThumb.png"
                    alt="Poster project"
                    onClick={() => {
                        setPosterIsActive(true);
                        setIsActive(false);
                    }}
                />
                <img
                    className="ProjectThumb"
                    src="./src/assets/TVShowThumb.png"
                    alt="TV Show project"
                    onClick={() => {
                        setTVIsActive(true);
                        setIsActive(false);
                    }}
                />
            </div>
        </div>
    );
}


export default function App() {
    const [showModal, setShowModal] = useState(false)
    const [isActive, setIsActive] = useState(true)
    const [aesopIsActive, setAesopIsActive] = useState(false)
    const [modalContent, setModalContent] = useState('');
    const [leoIsActive, setLeoIsActive] = useState(false)
    const [posterIsActive, setPosterIsActive] = useState(false);
    const [tvIsActive, setTVIsActive] = useState(false);

    return (
        <>
            {showModal && (
                <dialog open>
                    <button data-close-modal onClick={() => setShowModal(false)}>
                        Close
                    </button>

                    {/* Wrap both modalContent conditionals in a single parent element */}
                    <div>
                        {modalContent === 'Building' && (
                            <>
                                <AesopProject
                                    aesopactiveStatus={aesopIsActive}
                                    isActive={isActive}
                                    setIsActive={setIsActive}
                                    setAesopIsActive={setAesopIsActive}
                                />
                                <LeoProject
                                    leoactiveStatus={leoIsActive}
                                    isActive={isActive}
                                    setIsActive={setIsActive}
                                    setLeoIsActive={setLeoIsActive}
                                />
                                <PosterProject
                                    posterActiveStatus={posterIsActive}
                                    setIsActive={setIsActive}
                                    setPosterIsActive={setPosterIsActive}
                                />
                                <TVShowProject
                                    tvActiveStatus={tvIsActive}
                                    setIsActive={setIsActive}
                                    setTVIsActive={setTVIsActive}
                                />
                                <ImageGrid
                                    activeStatus={isActive}
                                    setAesopIsActive={setAesopIsActive}
                                    setLeoIsActive={setLeoIsActive}
                                    setPosterIsActive={setPosterIsActive}
                                    setTVIsActive={setTVIsActive}
                                    setIsActive={setIsActive}
                                />
                            </>
                        )}

                        {modalContent === 'Board' && (
                            <>
                                <h1>CONTACT</h1>

                                <div id = "contactcontain1">

                                    <img src="./src/assets/email.png" />

                                    <p>example@example.com</p>

                                </div>

                                <div id = "contactcontain2">

                                <a href="#"> <img src="./src/assets/linkedin.png"/></a>

                                    <a href="#"> <img src="./src/assets/instagram.png" /></a>
                                    </div>
                            </>
                        )}

                        {modalContent === 'GradCap' && (
                            <>
                                <h1>EDUCATION</h1>

                                <h2>2022 - Lorem</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                <h2>2023 - Ipsum</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                <h2>2024 - Dolor</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                                <h2>2025 - Sit Amet</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </>
                        )}
                    </div>
                </dialog>
            )}

            <Canvas camera={{ position: [0, 0, 35], fov: 75 }}>
                <color attach="background" args={['#1a1a1a']} />
                <Scene setShowModal={setShowModal} setModalContent={setModalContent} />
            </Canvas>
            <AnimatedCursor
            innerSize={14}
            outerSize={35}
            innerScale={2}
            outerScale={3}
            outerAlpha={0}
            hasBlendMode={true}
            innerStyle={{
                backgroundColor: 'lightgreen'
            }}
            outerStyle={{
                border: 'lightgreen'
            }} />
        </>
    )
}
