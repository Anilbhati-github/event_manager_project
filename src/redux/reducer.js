const iState = {
    event:[]
}


const events = (state=iState,action)=>{
    console.log(`>>>>>>>>>reducer>>>>>>>>${JSON.stringify(action.payload)}`)
    switch (action.type) {
        case 'GET_EVENT':
            return {
                ...state,
                event:action.payload.data.data
            };
        default : return state;
    }
}
console.log(`>>>>>>>>>>>CHEDKING>>>>>>`,events)
export default events;

//add event

// const iState = {
//     event:[]
// }
//
//
// const events = (state=iState,action)=>{
//     console.log(`>>>>>>>>>reducer>>>>>>>>${JSON.stringify(action.payload)}`)
//     switch (action.type) {
//         case 'GET_EVENT':
//             return {
//                 ...state,
//                 event:action.payload.data.data
//             };
//         default : return state;
//     }
// }
// console.log(`>>>>>>>>>>>CHEDKING>>>>>>`,events)
// export default events;
//
