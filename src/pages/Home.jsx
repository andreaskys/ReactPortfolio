import {ThemeToggle} from "@/components/ThemeToggle.jsx";
import {StarBackground} from "@/components/StarBackground"

export const Home = () => {
    return(
        <div className={"min-h-screen bg-backgorund text-foreground overflow-x-hidden"}>

            {/*Theme Toggle*/}
            <ThemeToggle/>
            {/*background effects*/}
            <StarBackground/>
            {/*Navbar*/}

            {/*Main Content*/}

            {/*Footer*/}
        </div>
    );
};