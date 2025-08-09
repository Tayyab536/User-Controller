const registration = (req, res) => {
  const { name, email, avatar } = req.body;
  return res.status(200).json({ message: "ok" , name, email });
};

export { registration };
