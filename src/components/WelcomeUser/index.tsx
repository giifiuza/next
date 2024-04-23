"use client";

import { useMsal } from "@azure/msal-react";
import { loginRequest } from "@/service/msal";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { cookies } from 'next/headers'


const WelcomeUser = () => {
    const { instance, accounts } = useMsal();
    const username = accounts[0].username;
    const router = useRouter()

    function RequestProfileData() {
        instance.acquireTokenSilent({
            ...loginRequest,
            account: accounts[0]
        }).then((response) => {
            localStorage.setItem('JWT_TOKEN', JSON.stringify(response.account.idToken))
        })
    }

    useEffect(() => {
        RequestProfileData();
        router.replace('/bosch')
    }, []);
    return (
        <>
           
        </>
    )
}

export default WelcomeUser;