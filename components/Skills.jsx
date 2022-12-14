import Image from "next/image"
import React from "react"
import html from "../public/assets/skills/html.png"
import css from "../public/assets/skills/css.png"
import bootstrap from "../public/assets/skills/bootstrap.png"
import javascript from "../public/assets/skills/javascript.png"
import next from "../public/assets/skills/next.png"
import node from "../public/assets/skills/node.png"
import php from "../public/assets/skills/php.png"
import react from "../public/assets/skills/react.png"
import tailwind from "../public/assets/skills/tailwind.png"

function Skills() {
    return (
        <div id="skills" className="w-full lg:h-screen p-2">
            <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
                <p className="text-xl tracking-widest uppercase text-amber-400 font-bold">Skills</p>
                <h2 className="py-4 text-gray-700">What I Can Do</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-600">
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src={html} width="64px" height="64px" alt="" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>HTML</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src={css} width="64px" height="64px" alt="" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>CSS</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src={php} width="64px" height="64px" alt="" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>PHP</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src={javascript} width="64px" height="64px" alt="" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Javascript</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src={react} width="64px" height="64px" alt="" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>React</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src={next} width="64px" height="64px" alt="" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Next.js</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src={node} width="64px" height="64px" alt="" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Node</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src={tailwind} width="64px" height="64px" alt="" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Tailwind</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src={bootstrap} width="64px" height="64px" alt="" />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Bootstrap</h3>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Skills