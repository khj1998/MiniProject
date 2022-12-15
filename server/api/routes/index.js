const router = require('express').Router();
const {router:v1Router} = require('./v1');

router.get('/health-check', async(req,res,next) =>{     // health-checking 라우터
    try{
        res.json("healthy");
    }catch(error){
        console.error(error);
        next(error);
    }
})

router.use('/v1', v1Router);

module.exports = router;