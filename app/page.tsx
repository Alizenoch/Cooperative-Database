// Home page that redirects to the login page


import { redirect } from "next/navigation";

export default function Home() {
    redirect("/login");
}