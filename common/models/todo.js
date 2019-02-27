'use strict';

module.exports = function(Todo) {
    Todo.beforeRemote('create', function(context, user, next) {
        context.args.data.usuarioId = context.req.accessToken.userId;
        next();
        });
        Todo.beforeRemote('create', function(context, user, next) {
            var currentDate = new Date();
            var fechauser=context.args.data.date;
         
            context.args.data.usuarioId = context.req.accessToken.userId;
        
            if (currentDate>=fechauser){
            next(new Error('Error en las fechas'));
            } else{
            next();
            }
            });
            
/**
 * Nos delvuelve eventos pendientes
 * @param {Function(Error, array)} callback
 */

Todo.eventosPendientes = function(callback) {
  
    // TODO
    callback(null, pendientes);
    var pendientes;
    var fecha=new Date();
    // TODO
    Todo.find({where:{and:[{idcomplete:true},{usuarioId:context.args.data.usuarioId}]}}
    ,function (err,pendientes) {
    callback(null, pendientes);
    });
  };
 
};
