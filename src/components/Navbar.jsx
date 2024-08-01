import logo from "../assets/logo.png";




const Navbar = () => {
    return (
        <div className=" w-full flex justify-between bg-black">
            {/*
        left -> brand name logo
        right -> 
                home
                about 
                signup / signin              
        */}

            <div className=" w-4/12 px-12">
                <img src={logo} alt="logo.png" className="h-24"></img>
            </div>
            <div className=" w-8/12 flex justify-around text-2xl items-center   px-12">
                <h1 className=" bg-gradient-to-r  text-[rgb(55,188,248)]      ">Home</h1>
                <h1 className=" bg-gradient-to-r text-[rgb(55,188,248)]  ">About</h1>
                <h1 className=" bg-gradient-to-r text-[rgb(55,188,248)]  ">Sign Up</h1>
                <h1 className=" bg-gradient-to-r text-[rgb(55,188,248)]   ">Sign In</h1>

            </div>

        </div >
    )
}


export default Navbar;