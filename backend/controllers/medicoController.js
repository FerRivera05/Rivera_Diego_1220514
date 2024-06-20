const controller = {};

controller.list = (req, res) => {
    req.getConnection((error,conn) =>{
        conn.query('select * from MEDICO',(err,medico) =>{
            if(err){
                res.json(err);
            }
            res.json(medico);
        });

    });

};

controller.edit = (req, res) => {

    const {MED_ID}= req.params;
   
    req.getConnection((err,conn) =>{
        conn.query('select * from MEDICO where MED_ID=?', [MED_ID], (err,MEDICO) => {
            res.json(MEDICO[0]);

        });

    });

};

controller.save = (req,res) =>{
    const data = req.body;
   req.getConnection((err,conn)=> {
       conn.query('insert into MEDICO set?', [data], (err,MEDICO) => {
        res.json(MEDICO);
       });
   })
};

controller.update = (req,res) =>{

    const {MED_ID}= req.params;
    const nuevo_medico = req.body;
  
    req.getConnection((err, conn) => {
        conn.query('update MEDICO set ? where MED_ID =?', [nuevo_medico, MED_ID], (err,rows) =>{ 
            res.json({ message: "Registro Actualizado" }); 

        });
    });
};

controller.delete = (req,res) =>{
    const {MED_ID}= req.params; 
  req.getConnection((err,conn) => {
      conn.query('delete from MEDICO where MED_ID =?', [MED_ID], (err, rows) => {
        res.json({ message: "Registro Eliminado" }); 
      });
  })
};

module.exports = controller;
