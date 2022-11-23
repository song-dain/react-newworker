import { GET_NOTICE, GET_NOTICES, POST_NOTICE, PUT_NOTICE } from "../modules/NoticeModule";

export const callNoticeAPI = ({notNo, currentPage}) => {

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8001/notice/noticeList`;

    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method : "GET",
            headers : {
                "Content-Type" : "application/json",
                "Accept": "*/*"
            }
        })
        .then(response => response.json());

        if(result.status === 200) {
            console.log('[NoticeAPICalls] callNoticeAPI result : ', result);

            dispatch({ type: GET_NOTICES, payload: result.data });
        }
    }

}

// export const callNoticeDetailAPI = ({notNo}) => {

//     const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8001/api/v1/notice/notice/${notNo}`;

//     return async (dispatch, getState) => {

//         const result = await fetch(requestURL, {
//             method : "GET",
//             headers : {
//                 "Content-Type" : "application/json",
//                 "Accept": "*/*"
//             }
//         })
//         .then(response => response.json());

//         if(result.status === 200) {
//             console.log('[ReviewAPICalls] callNoticeDetailAPI result : ', result);

//             dispatch({ type: GET_NOTICE, payload: result });
//         }
//     }

// }

// export const callNoticeUpdateAPI = ({form}) => {

//     const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8001/api/v1/notices`;

//     return async (dispatch, getState) => {

//         const result = await fetch(requestURL, {
//             method : "PUT",
//             headers : {
//                 "Content-Type" : "application/json",
//                 "Accept": "*/*",
//                 "Authorization" : "Bearer " + window.localStorage.getItem('accessToken')
//             }, 
//             body : JSON.stringify({
//                 notNo : form.notNo,
//                 notTitle : form.notTitle,
//                 notContent : form.notContent
//             })
//         })
//         .then(response => response.json());

//         if(result.status === 200) {
//             console.log('[NoticeAPICalls] callNoticeUpdateAPI result : ', result);

//             dispatch({ type: PUT_NOTICE, payload: result });
//         }
//     }

// }

// export const callNoticeWriteAPI = ({form}) => {

//     const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8001/api/v1/notices`;

//     return async (dispatch, getState) => {

//         const result = await fetch(requestURL, {
//             method : "POST",
//             headers : {
//                 "Content-Type" : "application/json",
//                 "Accept": "*/*",
//                 "Authorization" : "Bearer " + window.localStorage.getItem('accessToken')
//             }, 
//             body : JSON.stringify({
//                 notice : {
//                     notNo : form.notNo
//                 },
//                 notTitle : form.notTitle,
//                 notContent : form.notContent
//             })
//         })
//         .then(response => response.json());

//         if(result.status === 200) {
//             console.log('[NoticeAPICalls] callNoticeWriteAPI result : ', result);

//             dispatch({ type: POST_NOTICE, payload: result });
//         }
//     }

// }