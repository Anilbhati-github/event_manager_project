import axios from "axios"
export const anotherName = () => {
    console.log(`>>>>>>>>>>>>>>>>>>>`)
    return async (dispatch)=>{
        const data = await axios.get("http://localhost:8086/past_events")
        console.log(`>>>>>data>>>>>>>>>>>>>>${JSON.stringify(data.data.data)}`)

        await dispatch({type:"GET_EVENT",payload:data})
    }
}

//new event

export const anotherName2 = () => {
    console.log(`>>>>>>>>>>>>>>>>>>>`)
    return async (dispatch)=>{
        const data = await axios.get("http://localhost:8086/add/new_event")
        console.log(`>>>>>data>>>>>>>>>>>>>>${JSON.stringify(data.data.data)}`)

        await dispatch({type:"GET_EVENT",payload:data})
    }
}


//future event

export const anotherName1 = () => {
    console.log(`>>>>>>>>>>>>>>>>>>>`)
    return async (dispatch)=>{
        const data = await axios.get("http://localhost:8086/future_events")
        console.log(`>>>>>data>>>>>>>>>>>>>>${JSON.stringify(data.data.data)}`)

        await dispatch({type:"GET_EVENT",payload:data})
    }
}