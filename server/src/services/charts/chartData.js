const connection = require("../../database/db.js");

const chartData = async (req, res) => {
    
    const chart_id = req.params.id;

    // chart data 조회 테이블 선택 1:연도별 데이터, 2:시간별 데이터 
    const table = (chart_id == 1) ? "PUBLIC_BIKE_YEARLY_USAGE" 
                : (chart_id == 2) ? "PUBLIC_BIKE_HOURLY_USAGE"
                : "";

    connection.query("SELECT * FROM " + table + ";",  function (err, results, fields) {
        if (err) {
          console.log("error: ", err);
        }

        console.log(results);
        res.json({data:results});
      });  
}

module.exports = chartData;


