module.exports = server => {

    const connection = require('../database/connection');
    
    server.get('/', (require, response) => {
        response.json({message: 'Bem vindo ao catálogo de séries e filmes'})
    })
	
    server.get('/movies', (require, response) => {
	/*console.log('daniel');*/
        const sql = 'SELECT * FROM `movies`';
	/*console.log('daniel');*/
        connection.query(sql, (error, res) => {
            if (error){
		/*console.log('daniel', error);*/
                return error;
            }
            console.log("movies: ", res);
            response.json(res)
        })
    })
};
