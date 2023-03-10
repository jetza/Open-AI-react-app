import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {
    analysisText, answeringText, completionText, conclusionText, eighthNavText,
    fifthNavText, firstNavText, fourthNavText, generationText, headerExampleText, secondNavText,
    seventhNavText, sixthNavText, summarizationText, thirdNavText, translationText
} from "../constants/texts";
import {contentHeaderClass, navBarClass, navigationItemClass, navigationItemFirstClass
} from "../constants/cssClasses";

import HamburgerIcon from "../components/HamburgerIcon";
import DallE from "../components/DallE";
import EnglishToOther from "../components/EnglishToOther";
import HorrorStoryCreator from "../components/HorrorStoryCreator";
import Interview from "../components/Interview";
import JsToPython from "../components/JsToPython";
import MarvChatBot from "../components/MarvChatBot";
import QA from "../components/QA";
import SecondGraderSummary from "../components/SecondGraderSummary";

const MainPage = () => {

    const [mobileNavbar, setMobileNavbar] = useState(false);
    let navigate = useNavigate();

    const headerText = [
        {description: `${generationText}`, key: 0},
        {description: `${completionText}`, key: 1},
        {description: `${translationText}`, key: 2},
        {description: `${summarizationText}`, key: 3},
        {description: `${answeringText}`, key: 4},
        {description: `${analysisText}`, key: 5}
    ];
    const navigationText = [
        {text: `${secondNavText}`, key: 0, href: "#english"},
        {text: `${thirdNavText}`, key: 1, href: "#horror"},
        {text: `${fourthNavText}`, key: 2, href: "#interview"},
        {text: `${fifthNavText}`, key: 3, href: "#js2py"},
        {text: `${sixthNavText}`, key: 4, href: "#marv"},
        {text: `${seventhNavText}`, key: 5, href: "#qa"},
        {text: `${eighthNavText}`, key: 6, href: "#summarize"}
    ];
//TODO: make a new class from navBarClass to set navbar on mobile not to overlap when clicked on link
    return (
        <div className="max-w-[110rem] mx-auto">
            <div className="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 lg:hidden md:px-8 dark:bg-slate-900 dark:border-gray-700">
                <div className="max-w-3xl mx-auto py-2">
                    <button type="button"
                            className="flex justify-between gap-x-2 items-center w-full text-gray-500 hover:text-gray-600"
                            onClick={() => setMobileNavbar(!mobileNavbar)}>
                        <span className="text-sm">OpenAI React Example App</span>
                        <HamburgerIcon toggleNavbar={mobileNavbar}/>
                    </button>
                </div>
                <div className={`${mobileNavbar? {navBarClass}: "hidden"}`}>
                    <nav className="relative space-y-8 mt-10">
                        <ul className="ml-0.5 space-y-2 border-l-2 border-slate-100 dark:border-slate-800" >
                            <li><Link className={navigationItemFirstClass} reloadDocument to="#dalle">{firstNavText}</Link></li>
                            {navigationText.map(item => {
                                return (
                                    <li key={item.key}><Link reloadDocument to={item.href} className={navigationItemClass}>{item.text}</Link></li>
                                );
                            })}
                        </ul>
                    </nav>
                </div>
            </div>

            <div className={navBarClass}>
                <nav className="relative space-y-8 mt-10">
                    <button onClick={() => {navigate('../')}}>
                        <h5 className="mb-3 text-sm font-semibold text-slate-900 dark:text-slate-200">
                            <Link reloadDocument to="#header">OpenAI React Example App</Link>
                            </h5>
                    </button>
                    <ul className="ml-0.5 space-y-2 border-l-2 border-slate-100 dark:border-slate-800" data-hs-scrollspy="#scrollspy">
                        <li><Link className={navigationItemFirstClass} reloadDocument to="#dalle">{firstNavText}</Link></li>
                        {navigationText.map(item => {
                            return (
                                    <li key={item.key}><Link reloadDocument to={item.href} className={navigationItemClass}>{item.text}</Link></li>
                            );
                        })}
                    </ul>
                </nav>
            </div>

            <div className="w-full px-4 sm:px-6 md:px-8 lg:pl-[26rem]">
                <div className="max-w-3xl mx-auto xl:max-w-none py-10 xl:ml-0 xl:pr-16 ">
                    <header id="header" className="max-w-6xl pt-8">
                        <h1 className="block text-xl font-bold text-gray-800 sm:text-3xl dark:text-indigo-900 mb-6">
                            Examples</h1>
                        <div className="mt-2 text-lg text-gray-800 dark:text-gray-400">
                            <p>{headerExampleText}</p>
                            <br/>
                            <ul className="ml-4">
                                {headerText.map(item => {
                                    return (
                                        <>
                                            <li key={item.key}>{item.description}</li>
                                            <br/>
                                        </>
                                    );
                                })}
                            </ul>
                            <br/>
                            <p>{conclusionText}</p>
                        </div>
                    </header>
                    <div className="mt-16">
                        <div id="scrollspy" className="space-y-10 md:space-y-16">
                            <div id="dalle" className="scroll-mt-24 min-h-[25rem]">
                                <h2 className={contentHeaderClass}>{firstNavText}</h2>
                                <DallE/>
                            </div>

                            <div id="english" className="scroll-mt-24 min-h-[25rem]">
                                <h2 className={contentHeaderClass}>{secondNavText}</h2>
                                <EnglishToOther/>
                            </div>

                            <div id="horror" className="scroll-mt-24 min-h-[25rem]">
                                <h2 className={contentHeaderClass}>{thirdNavText}</h2>
                                <HorrorStoryCreator/>
                            </div>

                            <div id="interview" className="scroll-mt-24 min-h-[25rem]">
                                <h2 className={contentHeaderClass}>{fourthNavText}</h2>
                                <Interview/>
                            </div>

                            <div id="js2py" className="scroll-mt-24 min-h-[25rem]">
                                <h2 className={contentHeaderClass}>{fifthNavText}</h2>
                                <JsToPython/>
                            </div>

                            <div id="marv" className="scroll-mt-24 min-h-[25rem]">
                                <h2 className={contentHeaderClass}>{sixthNavText}</h2>
                                <MarvChatBot/>
                            </div>

                            <div id="qa" className="scroll-mt-24 min-h-[25rem]">
                                <h2 className={contentHeaderClass}>{seventhNavText}</h2>
                                <QA/>
                            </div>

                            <div id="summarize" className="scroll-mt-24 min-h-[25rem]">
                                <h2 className={contentHeaderClass}>{eighthNavText}</h2>
                                <SecondGraderSummary/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPage;
