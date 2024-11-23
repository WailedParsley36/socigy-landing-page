import { FormEvent, useEffect, useRef, useState } from "react";

import SocigyLogo from '../assets/socigy.svg'
import CheckIcon from '../assets/icons/check-icon.svg'
import CloseIcon from '../assets/icons/close-icon.svg'

import UserIcon0 from '../assets/user-icons/user-28-01.jpg'
import UserIcon1 from '../assets/user-icons/user-28-02.jpg'
import UserIcon2 from '../assets/user-icons/user-28-03.jpg'
import UserIcon3 from '../assets/user-icons/user-28-04.jpg'
import UserIcon4 from '../assets/user-icons/user-28-05.jpg'
import UserIcon5 from '../assets/user-icons/user-28-06.jpg'
import UserIcon6 from '../assets/user-icons/user-28-07.jpg'
import UserIcon7 from '../assets/user-icons/user-28-08.jpg'
import UserIcon8 from '../assets/user-icons/user-28-09.jpg'
import UserIcon9 from '../assets/user-icons/user-28-10.jpg'
import UserIcon10 from '../assets/user-icons/user-28-11.jpg'
import { useFirebase } from "../contexts/FirebaseContext";
import { logEvent, setUserProperties } from "firebase/analytics";
import { Particles } from "../utility/Particles";
import PageMetadata from "../components/PageMetadata";

const users = [UserIcon0, UserIcon1, UserIcon2, UserIcon3, UserIcon4, UserIcon5, UserIcon6, UserIcon7, UserIcon8, UserIcon9, UserIcon10]

export default function Waitlist() {
    const firebase = useFirebase();
    const formRef = useRef<HTMLFormElement>(null);

    const fullNameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const birthRef = useRef<HTMLInputElement>(null);
    const genderRef = useRef<HTMLSelectElement>(null);
    const platformRef = useRef<HTMLSelectElement>(null);

    const [result, setResult] = useState<boolean>();
    const [error, setError] = useState<string>();
    const [formInteracted, setFormInteracted] = useState<boolean>(false)

    const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setUserProperties(firebase.analytics, {
            birthDate: birthRef.current?.valueAsDate,
            gender: genderRef.current?.value,
            prefferedPlatform: platformRef.current?.value
        })

        if (!fullNameRef.current || !emailRef.current || !emailRef.current.checkValidity() || fullNameRef.current.value.length < 4) {
            setResult(false)
            return;
        }

        try {
            await firebase.waitlistManager.pushAsync({
                fullName: fullNameRef.current.value,
                email: emailRef.current.value,

                birthDate: birthRef.current?.valueAsDate,
                gender: genderRef.current?.value == "None" ? null : genderRef.current?.value,
                prefferedPlatform: platformRef.current?.value == "None" ? null : platformRef.current?.value
            })
        }
        catch (e: any) {
            setError("Your email is already registered!")
            setResult(false)
            formRef.current?.reset();
            return;
        }

        logEvent(firebase.analytics, "submit_waitlist_form", {
            birthDate: birthRef.current?.valueAsDate,
            gender: genderRef.current?.value == "None" ? null : genderRef.current?.value,
            prefferedPlatform: platformRef.current?.value == "None" ? null : platformRef.current?.value
        })
        setResult(true)
        formRef.current?.reset();
    }

    useEffect(() => {
        if (formInteracted)
            logEvent(firebase.analytics, "focus_waitlist_form")
    }, [formInteracted])

    return <section className="text-white">
        <PageMetadata title={"Socigy - Join the Waitlist!"} description={"Want to be the first one to test the app out? Fill in the details and we will notify you, when you get in!"} />
        
        <Particles className="absolute inset-0 -z-10" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center overflow-hidden">
            <div className="pt-32 pb-16 md:pt-52 md:pb-32">
                <div className="max-w-3xl lg:max-w-5xl mx-auto text-center">
                    <div className="text-center w-full items-center justify-center flex">
                        <h1 style={{ lineHeight: "1.5em" }} className="h1 lg:text-7xl pb-4 font-poppins leading-8 lg:max-w-3xl" data-aos="fade-down">
                            <span className="bg-clip-text text-white mb-12">Join the waitlist for </span>
                            <span className="bg-clip-text bg-gradient-to-r text-transparent from-gray-400 via-gray-200 to-gray-400 text-7xl lg:text-8xl">Socigy</span>
                        </h1>
                    </div>
                    <p className="text-lg lg:text-xl lg:mx-auto lg:max-w-xl text-gray-400 mb-8 mt-8" data-aos="fade-down">
                        Want to be the first one to test the app out? Register down below and we will notify you, when you get in!
                    </p>
                    <div className="flex justify-center">
                        <form className="w-full md:max-w-md text-left space-y-4" onFocus={() => setFormInteracted(true)} ref={formRef} data-aos="fade-down" onSubmit={handleFormSubmit}>
                            <section className="space-y-2">
                                <div>
                                    <label className="block text-sm font-medium mb-1" htmlFor="full-name">
                                        Full Name <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative h-full w-full">
                                        <input ref={fullNameRef} id="full-name" required minLength={3} className="form-input pl-9 dark:bg-gray-800 w-full" type="text" placeholder="Your full name..." />
                                        <div className="absolute inset-0 right-auto flex items-center pointer-events-none">
                                            <svg width="16" height="16" viewBox="0 0 24 24" className="fill-none stroke-gray-400 dark:stroke-gray-500 ml-3" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1" htmlFor="email">
                                        Email <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative h-full w-full">
                                        <input ref={emailRef} id="email" className="form-input pl-9 dark:bg-gray-800 w-full" type="email" placeholder="Enter your email..." />
                                        <div className="absolute inset-0 right-auto flex items-center pointer-events-none">
                                            <svg width="16" height="16" viewBox="0 0 24 24" className="fill-none stroke-gray-400 dark:stroke-gray-500 ml-3" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className="flex align-middle justify-center pt-4">
                                <div className="grow border-b my-auto border-slate-800" />
                                <p className="text-slate-400 mx-6 align-middle">Additional Info</p>
                                <div className="grow border-b my-auto border-slate-800" />
                            </section>
                            <section className="text-center text-sm pt-2 text-slate-500" style={{ marginTop: 0 }}>
                                <p>
                                    This will help you get the invite sooner <br />
                                    It is not required!
                                </p>
                            </section>
                            <section className="space-y-3">
                                <div>
                                    <label className="block text-sm font-medium mb-1" htmlFor="birthdate">
                                        Birth Date
                                    </label>
                                    <div className="relative h-full w-full">
                                        <input ref={birthRef} id="birthdate" className="form-input dark:bg-gray-800 w-full" style={{ colorScheme: "light" }} type="date" />
                                        <div className="absolute inset-0 right-3.5 left-auto flex items-center pointer-events-none">
                                            <svg className="fill-current text-gray-400 dark:text-gray-500 ml-3" width="16" height="16" viewBox="0 0 16 16">
                                                <path d="M5 4a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2H5Z" />
                                                <path d="M4 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4H4ZM2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-1" htmlFor="gender">
                                        Gender
                                    </label>
                                    <select ref={genderRef} id="gender" className="form-select w-full *:bg-black">
                                        <option>None</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1" htmlFor="platform">
                                        Preffered platform
                                    </label>
                                    <select ref={platformRef} id="platform" className="form-select w-full *:bg-black">
                                        <option>None</option>
                                        <option>Web</option>
                                        <option>Android</option>
                                        <option>IOS</option>
                                        <option>Windows</option>
                                        <option>MacOS</option>
                                        <option>TvOS</option>
                                    </select>
                                </div>
                            </section>
                            <div className="pt-2.5">
                                <button className="bg-gradient-to-r from-gray-400 via-gray-200 to-gray-400 text-black font-medium text-lg w-full font-poppins transition duration-150 ease-in-out group btn rounded-md">
                                    Join the waitlist
                                </button>
                            </div>
                            {result == true ?
                                <div className="flex space-x-3 justify-center font-inter" data-aos="zoom-in" data-aos-duration="300">
                                    <img src={CheckIcon} />
                                    <p className="text-green-600">Successfully joined the waitlist!</p>
                                </div>
                                : result == false &&
                                <div className="flex space-x-3 justify-center font-inter" data-aos="zoom-in" data-aos-duration="300">
                                    <img src={CloseIcon} />
                                    <p className="text-red-600">{error ? error : "Failed to join the waitlist!"}</p>
                                </div>
                            }
                        </form>

                    </div>

                    <div className="text-slate-400 mt-12 text-center flex flex-col justify-center items-center" data-aos="fade-down">
                        <div className="flex -space-x-4 text-center align-middle self-center mb-4">
                            {users.map(x =>
                                <img key={x} className="rounded-full dark:border-gray-800 box-content" src={x} width="38" height="38" alt="Avatar" />
                            )}
                        </div>
                        <p>+200 People already in waitlist</p>
                    </div>
                </div>
            </div>
            <Particles className="absolute inset-0 -z-10" />
        </div>
    </section>
}