import React from 'react'
import { useHistory } from 'react-router'

function CheckInHeader() {
    const history = useHistory()
    return (
        <div className="bg-white shadow-md sticky top-0 ">
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/OYO_Rooms_(logo).png" className="h-20  pl-8 cursor-pointer" alt="" onClick={() => history.push('/')}/>
        </div>
    )
}

export default CheckInHeader
