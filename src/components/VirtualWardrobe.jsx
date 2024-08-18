import React, { useState } from 'react'

import { categoryData } from "../utils/constants"
import CategoryCard from './CategoryCard'


const tabsName = [
    "Formals",
    "Casuals",
    "Party Wears",
    "Office",

];



export const VirtualWardrobe = () => {



    const [currentTab, setCurrentTab] = useState(tabsName[0]);
    const [categories, setCategories] = useState(categoryData[0]);
    // const [categoryData, setCategoryData] = useState(categoryData[0]);
    // const [currentCard, setCurrentCard] = useState(
    //     categoryData[0].courses[0]
    // );


    const setMyCards = (value) => {
        // document.querySelector(".card-group").classList.add("opacity-0");
        // setTimeout(() => {
        //     document.querySelector(".card-group").classList.remove("opacity-0");
        // }, 200);

        setCurrentTab(value);
        const result = categoryData.filter((cat) => cat.category === value);
        console.log("coruse result ", result)

        setCategories(result[0]);
        // setCurrentCard(result[0].courses[0].heading);
    };

    return (



        <div className='bg-black text-white  w-full h-[100vh] border border-red-500'>VirtualWardrobe
            {/*  different categories anv */}





            {/* Tabs Section */}


            <div className='flex justify-between w-10/12 mx-auto border border-green-500'>
                {tabsName.map((ele, index) => {
                    return (
                        <div
                            className={` text-[16px] flex flex-row items-center gap-2 ${currentTab === ele
                                ? "bg-[#42454a] text-[#F1F2FF] font-medium"
                                : "text-[#999DAA]"
                                } px-7 py-[7px] rounded-sm  transition-all duration-200 cursor-pointer hover:bg-[#000814] hover:text-[#F1F2FF]`}
                            key={index}
                            onClick={() => setMyCards(ele)}
                        >
                            {ele}
                        </div>
                    );
                })}
            </div>


            {/* <button className='text-black bg-white py-2 px-8'>Formals</button>
                <button className='text-black bg-white py-2 px-8'>Causals</button>

                <button className='text-black bg-white py-2 px-8'>Party Wears</button>

                <button className='text-black bg-white py-2 px-8'>Office </button> */}



            {/*  category data card */}
            {/* 1st for  formals  */}
            <CategoryCard data={categories} />

        </div>
    )
}
