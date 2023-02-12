import React from 'react'

function Opening() {

    const openHours = {
        "Monday": "1:00 PM to 11:00 AM",
        "Tuesday": "1:00 PM to 11:00 AM",
        "Wednesday": "1:00 PM to 11:00 AM",
        "Thursday": "1:00 PM to 11:00 AM",
        "Friday": "1:00 PM to 11:00 AM",
        "Saturday": "1:00 PM to 11:00 AM",
        "Sunday": "1:00 PM to 11:00 AM"
    };
    return (
        <div className='pt-[200px] backimage2 bg-no-repeat bg-cover'>
            <div className="p-10 m-auto w-[700px]">
                {/* <Head> */}
                {/* <title>Restaurant Opening Hours</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css" />
    </Head> */}

                <div className="text-center mb-10 text-4xl text-[#ffff] font-bold">Opening Hours</div>
                <table className="w-full text-left table-collapse rounded-lg shadow-lg">
                    <thead>
                        <tr className="text-white">
                            <th className="text-xl font-bold p-3">Day</th>
                            <th className="text-xl font-bold p-3">Hours</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.entries(openHours).map(([day, hours], index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-gray-200' : ''}>
                                <td className="p-3 text-[darkgoldenrod] font-bold ">{day}</td>
                                <td className="p-3 text-[darkgoldenrod] w-fit">{hours}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="text-center mt-10 text-xl text-[#ffff] font-bold">
                    Call us at &nbsp;
                    <a href="tel: 01416110958" className="text-yellow-500 underline hover:text-yellow-600">01416110958</a>
                </div>
            </div>
        </div>
    )
}

export default Opening