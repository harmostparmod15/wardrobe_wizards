// images
import tshirtLogo from "../assets/tshirt.png"
import pantLogo from "../assets/pant.png"
import hoodieLogo from "../assets/hoodie.jpeg"
import suitLogo from "../assets/suit.png"
import frockLogo from "../assets/frock.png"


// components
import Typewriter from "./Typewriter"


const Hero = () => {





    return (
        <div className="w-full h-[100vh] bg-black">
            {/*  tag line  */}
            <div className="flex gap-4 flex-col items-center justify-center py-24 ">
                {/*  should apply an image here */}
                <h1 className=" text-center text-7xl font-bold  bg-gradient-to-r from-[rgb(99,102,241)] via-purple-600  to-[rgb(189,25,93)] inline-block text-transparent bg-clip-text ">
                    Transforming your wardrobe,

                </h1>
                {/*  sub head and typewriter */}
                <div className="w-7/12  mx-auto text-center flex items-center ">
                    <h1 className="  w-10/12 text-center  text-7xl font-bold  bg-gradient-to-r from-purple-600  to-[rgb(55,188,248)] inline-block text-transparent bg-clip-text ">
                        one spell at a time
                    </h1>
                    <h1 className="text-7xl text-[rgb(55,188,248)] -2/12   "> <Typewriter text="...." delay={500} infinite />    </h1>
                </div>
            </div>


            {/*  hero image */}
            <div className="relative  flex  justify-center   z-50  rop-shadow-[20px_20px_200px_rgb(55,188,248)]   ">
                <div className="w-4/12 h-32 blur-[120px]   -z-10 rounded-xl bg-blck  bg-[rgb(189,25,93)]  rotate-45   absolute -top-2 -right-10  "></div>
                <img src={tshirtLogo}></img>
                <img src={pantLogo}></img>
                <img src={hoodieLogo}></img>
                <img src={suitLogo}></img>
                <img src={frockLogo}></img>

            </div>
        </div>
    )
}


export default Hero;