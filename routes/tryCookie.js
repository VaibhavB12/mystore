const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    // 1.set expires attribute for cookie
    // let expDate = new Date(Date.now()+5e3).toUTCString();
    // res.setHeader("Set-Cookie","isLoggedIn=true; expires="+expDate);
    // res.send(expDate)
    // OR
    // let expDate = new Date(Date.now()+5e3);
    // res.cookie("isLoggedIn","true", {expires: expDate})
    // res.send(expDate)

    // 2.set maxAge attribute for cookie
    // let expDate = new Date(Date.now()+5e3);
    // res.cookie("isLoggedIn","true", {maxAge: 5000})
    // res.send(expDate)

    // 3.set httpOnly attribute for cookie
    // let expDate = new Date(Date.now()+5e3);
    // res.cookie("isLoggedIn","true", { expires:expDate, httpOnly:true })
    // res.send(expDate)

    // 4.set secure attribute for cookie
    // let expDate = new Date(Date.now()+5e3);
    // res.cookie("isLoggedIn","true", { expires:expDate, httpOnly:true, secure:true })
    // res.send(expDate)
    
});
// router.get('/', (req, res)=>{
//     res.setHeader("Set-Cookie","isLoggedIn=true");
//     res.send("Cookie sent.")
// });

// 1.Setting the Cookie: When a user first sends a POST request, the server sets the isLoggedIn cookie in 
// the user's browser.
router.post('/', (req, res)=>{
    res.cookie("isLoggedIn=true");
    res.send("Cookie sent.")
})
// 2.Retrieving the Cookie: Later, when the user sends a GET request, the server retrieves the cookies 
// from the user's browser. The logged cookies will include the isLoggedIn=true cookie set earlier if it hasn't expired or been deleted.
// router.get('/', (req, res)=>{
//     const cookie = req.get("Cookie");
//     console.log(cookie);
//     res.send("Cookie sent.")
// });


module.exports = router;

// What happens if maxAge is set to zero ?
// if maxAge set to zero or any negative value then cookie will be deleted