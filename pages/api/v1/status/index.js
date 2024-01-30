function index(request, response) {
  response.status(200).json({ message: "Função funcionando!" });
}

export default index;
