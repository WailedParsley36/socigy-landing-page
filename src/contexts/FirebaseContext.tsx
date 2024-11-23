import { Analytics, initializeAnalytics, logEvent, setAnalyticsCollectionEnabled, setUserProperties } from "firebase/analytics";
import { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from 'react-router-dom'

import { FirebaseApp, initializeApp } from "firebase/app";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { UAParser } from 'ua-parser-js';

const firebaseConfig = {
    apiKey: "AIzaSyBResU3CAD2lV80VrXmSiPcYt2zmfyYokE",
    authDomain: "socigy-007.firebaseapp.com",
    projectId: "socigy-007",
    storageBucket: "socigy-007.firebasestorage.app",
    messagingSenderId: "1064806795444",
    appId: "1:1064806795444:web:4d0b2f164d136f23626fe1",
    measurementId: "G-4VS26VDH52"
};

export interface FirebaseContextInfo {
    analytics: Analytics,
    waitlistManager: WaitlistManager
}


export class WaitlistManager {
    private readonly firestore;
    constructor(app: FirebaseApp) {
        this.firestore = getFirestore(app)
    }

    async pushAsync(data: any) {
        localStorage.setItem("waitlist_info", JSON.stringify({
            birthDate: data.birthDate,
            gender: data.gender,
            prefferedPlatform: data.platform
        }))
        await setDoc(doc(this.firestore, "waitlist", data.email), data)
    }
}

const app = initializeApp(firebaseConfig);
const analytics = initializeAnalytics(app, {
    config: {
        send_page_view: false
    }
});
setAnalyticsCollectionEnabled(analytics, true)

const waitlistManager = new WaitlistManager(app)

const titleMap: { [id: string]: string } = {
    "/waitlist": "Socigy - Join the Waitlist!",
    "/contact": "Socigy - Contact Us!",
    "/about-us": "Socigy - Get to know us more",
    "/privacy-policy": "Socigy - Privacy Policy",
    "/": "Socigy - The Next-Gen Social Network",
}

export const FirebaseContext = createContext<FirebaseContextInfo>({ analytics: analytics, waitlistManager: waitlistManager });
export function FirebaseContextProvider({ children }: any) {
    const [saved] = useState<FirebaseContextInfo>({ analytics: analytics, waitlistManager: waitlistManager });
    const location = useLocation();

    // One time -> when loaded
    useEffect(() => {
        const parser = new UAParser();
        logEvent(analytics, "platform", { ...parser.getResult(), ua: undefined })

        const waitlistInfo = localStorage.getItem("waitlist_info");
        if (!waitlistInfo)
            return;

        setUserProperties(analytics, JSON.parse(waitlistInfo))
    }, [])

    // On location changed
    useEffect(() => {
        logEvent(analytics, "page_view", { page_title: titleMap[location.pathname] ?? window.document.title, page_location: window.location.href, page_path: location.pathname })
    }, [location])

    return <FirebaseContext.Provider value={saved}>
        {children}
    </FirebaseContext.Provider>
}

export function useFirebase() {
    return useContext(FirebaseContext);
}

export function useAnalytics() {
    return useContext(FirebaseContext).analytics;
}