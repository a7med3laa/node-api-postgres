const Pool = require('pg').Pool
const pool = new Pool({
  user: 'tele',
  host: '192.168.1.4',
  database: 'task',
  password: 'tiny',
  port: 5432,
})

const getNodesData = (request, response) => {
var  query='select nodeid,temp, light, result_time from xbw_da100_results ORDER BY result_time DESC limit 10';

pool.query(query, (error, res) => {
  if (error) {
    throw error;
  }
    response.send(res.rows);
});
};

const Clear= (request, response) => {
var  query='TRUNCATE xbw_da100_results';

pool.query(query, (error, res) => {
  if (error) {
    throw error;
  }
    response.send('ok');
});


};

const getConnectedNode = (request, response) => {
var  query='SELECT COUNT(DISTINCT nodeid) FROM xbw_da100_results';

pool.query(query, (error, res) => {
  if (error) {
    throw error;
  }
  //  console.log(res.rows);
    response.send(res.rows);
});
};

const getListById = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query('select nodeid,temp, light,result_time from xbw_da100_results where nodeid = '+ id+ '', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};



const getNodeById = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query('select nodeid,temp, light,result_time from xbw_da100_results where nodeid = '+ id+ 'ORDER BY result_time DESC limit 1', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

module.exports = {
  getNodesData,
  getNodeById,
  getConnectedNode,
  Clear,
  getListById,
}
