const router = require('express').Router();
const path = require('path')

router.route('/estoyvivo').get((req, res) => {
    status = `si estoy vivo`;
    res.json({ status });
  })
  

// path con retorno directo
router.use('/', (req, res) => 
{ 
    res.sendFile(path.join(__dirname+'../../../src/html/index.html'));
}
)



module.exports = router;