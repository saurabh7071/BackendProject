const asyncHandler = (requestHandler) =>{
    (req, res, next) =>{
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next)
    }
}


export {asyncHandler}

// const asyncHandler = () =>{}
// const asyncHandler = (func) => () =>{}
// const asyncHandler = (func) => async () => {}

// ye ek wrapper function hai jo har jagah use hone wala hai ...

// with the help of try-catch 

// const asyncHandler = (func) => async (req, res, next) =>{
//     try {
//         await func(req, res, next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }