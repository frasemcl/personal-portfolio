import Head from 'next/head';
import useTranslation from 'next-translate/useTranslation';
import {
	BsFillMoonStarsFill,
	BsFillBrightnessHighFill,
	BsCardImage,
} from 'react-icons/bs';
import {
	AiFillLinkedin,
	AiFillTwitterCircle,
	AiFillGithub,
	AiOutlineDotChart,
	AiOutlineBug,
} from 'react-icons/ai';
import Image from 'next/image';
import logo from '../public/scarecroIcon.svg';
import altlogo from '../public/altLogo.svg';
import logo2 from '../public/scarecroIcon2.svg';
import headshot from '../public/headShot.jpg';
import trees from '../public/000060360005_small.jpg';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
	const [darkMode, setDarkMode] = useState(false);
	const { t } = useTranslation('common');
	return (
		<div className={darkMode ? 'dark' : ''}>
			<Head>
				<title>{t('metaTitle')}</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="">
				<div className=" bg-patternLight px-10 font-custom1  md:px-20 lg:px-40 dark:bg-patternDark  dark:text-gray-50 mix-blend-normal">
					<section className="min-h-screen">
						<nav className="py-10 mb-[7%] lg:mb-[2%] flex justify-between ">
							<a
								className="text-xl font-custom1-700 font-semibold dark:text-gray-50 clickMe"
								href="#"
							>
								frase
								<span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-fuchsia-700">
									mcl
								</span>
							</a>

							<ul className="flex items-center">
								<li className=" clickMe pr-6">
									{' '}
									<Link href="/" locale="en">
										EN
									</Link>
								</li>
								<li className=" pr-6">
									<Link href="/" locale="fr">
										FR
									</Link>
								</li>
								<li>
									<BsFillMoonStarsFill
										onClick={() => setDarkMode(!darkMode)}
										className={
											darkMode ? 'hidden' : 'cursor-pointer text-xl clickMe'
										}
									/>
									<BsFillBrightnessHighFill
										onClick={() => setDarkMode(!darkMode)}
										className={
											darkMode
												? 'cursor-pointer text-xl text-gray-50 clickMe'
												: 'hidden'
										}
									/>
								</li>
								<li className="clickMe">
									<a
										className=" bg-gradient-to-r from-pink-600 to-fuchsia-700 text-gray-50 px-4 py-2 rounded-md ml-8 "
										href="#"
									>
										Resume
									</a>
								</li>
							</ul>
						</nav>
						<div className=" text-center p-[5%]">
							<h2 className="text-3xl py-2 font-medium font-custom1 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-fuchsia-700 md:text-6xl">
								Fraser McLaughlin
							</h2>
							<h3 className="text-xl py-2 font-custom1 md:text-3xl">
								{t('skills')}
							</h3>
							{/* <h3 className="text-xl py-2 font-custom1 md:text-3xl">
								Geographer | Developer | Designer
							</h3> */}
							<p className="text-md py-3 leading-7 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-200">
								{t('headline')}
							</p>
						</div>
						<div className=" text-3xl flex justify-center gap-12 text-gray-600 md:text-5xl dark:text-gray-200">
							<a href="#" className="clickMe">
								<AiFillLinkedin />{' '}
							</a>
							<a href="#" className="clickMe">
								<AiFillTwitterCircle />{' '}
							</a>
							<a href="#" className="clickMe">
								<AiFillGithub />{' '}
							</a>
						</div>
						<div className="relative w-48 h-48 mx-auto  rounded-full  shadow-md overflow-hidden mt-[12%] md:mt-[10%] md:w-56 md:h-56 lg:mt-[5%] dark:border dark:border-white clickMe">
							<Image
								className="rounded-full"
								src={headshot}
								layout="fill"
								objectFit="cover"
								alt="My headshot"
							/>
						</div>
					</section>
					<section>
						{/* Second page starts here */}
						<div>
							<h3 className="text-3xl py-1">Services I offer</h3>
							<p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
								I specialize in spatial data analysis and I&apos;d love to hear
								about your GIS/Mapping needs. I work{' '}
								<span className="text-fuchsia-700 text-bold">
									non-profit organizations
								</span>{' '}
								focused on{' '}
								<span className="text-fuchsia-700 text-bold">
									human and environmental health.
								</span>
							</p>
							<p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
								I offer a wide range of products and services including design,
								web-maps, data visualizations, custrom software, tutoring, and
								consulting.
							</p>
						</div>
						{/* Cards start */}
						<div className="lg:flex gap-10">
							<div className="clickMe text-center shadow-xl p-10 rounded-xl my-10 dark:border ">
								<BsCardImage className="m-auto text-9xl text-fuchsia-800" />
								<h3 className="text-lg font-medium pt-8 pb-2">Design</h3>
								<p className="py-2">
									Creating elegant custom designs suited for your needs.
								</p>
								<h4 className="py-4 text-fuchsia-700">Design tools I use</h4>
								<p className=" text-gray-800 py-1 dark:text-gray-200">Figma</p>
								<p className=" text-gray-800 py-1 dark:text-gray-200">
									Digital and film cameras
								</p>
								<p className=" text-gray-800 py-1 dark:text-gray-200">
									Good ol fashioned sketchbook
								</p>
							</div>
							<div className="clickMe text-center shadow-xl p-10 rounded-xl my-10 dark:border">
								<AiOutlineBug className="m-auto text-9xl text-fuchsia-800" />
								<h3 className="text-lg font-medium pt-8 pb-2">Coding</h3>
								<p className="py-2">
									Creating elegant custom designs suited for your needs.
								</p>
								<h4 className="py-4 text-fuchsia-700">Languages</h4>
								<p className=" text-gray-800 py-1 dark:text-gray-200">
									Javascript/React
								</p>
								<p className=" text-gray-800 py-1 dark:text-gray-200">R</p>
								<p className=" text-gray-800 py-1 dark:text-gray-200">Python</p>
							</div>
							<div className="clickMe text-center shadow-xl p-10 rounded-xl my-10 dark:border">
								<AiOutlineDotChart className="m-auto text-9xl text-fuchsia-800 " />
								<h3 className="text-lg font-medium pt-8 pb-2">Consulting</h3>
								<p className="py-2">
									Creating elegant custom designs suited for your needs.
								</p>
								<h4 className="py-4 text-fuchsia-700">My process</h4>
								<p className=" text-gray-800 py-1 dark:text-gray-200">Figma</p>
								<p className=" text-gray-800 py-1 dark:text-gray-200">
									Digital and film cameras
								</p>
								<p className=" text-gray-800 py-1 dark:text-gray-200">
									Good ol fashioned sketchbook
								</p>
							</div>
						</div>
					</section>
					{/* Section3 */}
					<section>
						<div>
							<h3 className="text-3xl py-1">Portfolio</h3>
							<p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
								I specialize in spatial data analysis and I&apos;d love to hear
								about your GIS/Mapping needs. I work{' '}
								<span className="text-fuchsia-700 text-bold">
									non-profit organizations
								</span>{' '}
								focused on{' '}
								<span className="text-fuchsia-700 text-bold">
									human and environmental health.
								</span>
							</p>
						</div>
						<div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
							<div className="basis-1/3 flex-1">
								<Image
									src={trees}
									className="rounded-lg object-cover"
									width={'100%'}
									height={'100%'}
									layout="responsive"
									alt="trees"
								/>
							</div>
							<div className="basis-1/3 flex-1">
								<Image
									src={trees}
									className="rounded-lg object-cover"
									width={'100%'}
									height={'100%'}
									layout="responsive"
									alt="trees"
								/>
							</div>
							<div className="basis-1/3 flex-1">
								<Image
									src={trees}
									className="rounded-lg object-cover"
									width={'100%'}
									height={'100%'}
									layout="responsive"
									alt="trees"
								/>
							</div>
							<div className="basis-1/3 flex-1">
								<Image
									src={trees}
									className="rounded-lg object-cover"
									width={'100%'}
									height={'100%'}
									layout="responsive"
									alt="trees"
								/>
							</div>
						</div>
					</section>
				</div>
			</main>
		</div>
	);
}
