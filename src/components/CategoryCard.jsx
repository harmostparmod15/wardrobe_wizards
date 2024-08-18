import React from 'react'


const DataCard = ({ data }) => {

    const imagesLink = data?.imgLink

    return (
        <div>


            <h1 className='font-bold text-lg '>{data?.title}</h1>

            {/*  image container */}
            <div className='flex gap-4'>
                {imagesLink?.map(img => {
                    return <div className='border border-yellow-300 w-52 h-52 '>{img}</div>
                })}
            </div>
        </div >
    )
}



const CategoryCard = ({ data }) => {
    console.log(data)
    return (
        <div className='text-white border '>
            {/*  data  */}
            {data?.data.map(d => {
                return <DataCard data={d} />
            })}
        </div>

    )
}

export default CategoryCard