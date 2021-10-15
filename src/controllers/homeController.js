exports.paginaInicial = (req, res)=>{
  // req.session.usuario = {
  //   nome: 'math',
  //   logado: true
  // }
  console.log(req.session.usuario)
  res.render('index');
}

exports.trataPost = (req, res) =>{
  const {nome} = req.body
  res.send(req.body)
}