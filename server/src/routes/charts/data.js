const {Router} = require ('express');
const chartData = require('../../services/charts/chartData.js');

const router = Router();

router.get('/:id', chartData);

module.exports = router;