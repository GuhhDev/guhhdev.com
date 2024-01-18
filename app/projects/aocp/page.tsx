import Link from "next/link";
import React from "react";
import {ArrowLeft, Github, Twitter} from "lucide-react";
import image from "public/images/aocp.png";
import Image from "next/image";

export default function CloneNetflix() {

    return (
        <div className="bg-white">
            <header className="relative isolate overflow-hidden bg-gradient-to-tl from-black via-zinc-900 to-black">
                <div
                    className="fixed inset-x-0 top-0 z-50 backdrop-blur lg:backdrop-blur-none duration-200 border-b lg:bg-transparent bg-zinc-900/0 border-transparent">

                    <div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
                        <div className="flex justify-between gap-8">
						<span
                            title="View counter for this page"
                            className="duration-200 hover:font-medium flex items-center gap-1 text-zinc-400 hover:text-zinc-100">

						</span>
                            <Link target="_blank" href="https://twitter.com/@guhh_dev">
                                <Twitter
                                    className="w-6 h-6 duration-200 hover:font-medium text-zinc-400 hover:text-zinc-100"/>
                            </Link>
                            <Link target="_blank" href="https://github.com/guhhdev">
                                <Github
                                    className="w-6 h-6 duration-200 hover:font-medium text-zinc-400 hover:text-zinc-100"/>
                            </Link>
                        </div>

                        <Link
                            href="/projects"
                            className="duration-200 hover:font-medium text-zinc-400 hover:text-zinc-100">
                            <ArrowLeft className="w-6 h-6 "/>
                        </Link>
                    </div>
                </div>

                <div className="container mx-auto relative isolate overflow-hidden  py-24 sm:py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center flex flex-col items-center">
                        <div className="mx-auto max-w-2xl lg:mx-0">
                            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-display">
                                Aocp Concursos Públicos
                            </h1>
                            <p className="mt-6 text-md leading-8 text-zinc-300">
                                O projeto consiste na criação de um site informativo para candidatos que queiram se candidatar.
                                a concursos públicos. O site foi desenvolvido utilizando Next.js e TailwindCSS.
                            </p>
                            <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                                <div
                                    className="grid grid-cols-1 gap-y-6 gap-x-8 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                                    <a className="_blank" href='https://www.aocp.com.br/'>Website
                                        <span className="aria-hidden p-1">→</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <article className="px-4 py-5 mx-auto prose prose-zinc prose-quoteless">
                <div className="mdx">
                    <p className="leading-7 [&:not(:first-child)]:mt-6 shadow-2xl">
                        <a className="font-medium text-zinc-900 underline underline-offset-4"
                           href="https://super-netflix.netlify.app/">
                            <Image src={image} alt='' className="rounded-lg"/>
                        </a>
                    </p>

                </div>
            </article>

        </div>
    );
};
