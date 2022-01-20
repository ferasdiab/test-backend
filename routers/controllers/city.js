const cityModel = require("../../db/models/cityModel");

const addCity = async (req, res) => {
  const { cityName, cityDesc, cityUrl } = req.body;
  try {
    const newCity = new cityModel({
      name: cityName,
      desc: cityDesc,
      url: cityUrl,
    });
    const response = await newCity.save();
    const all = await cityModel.find({});
    res.status(201).json(all);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getAllCity = async (req, res) => {
  try {
    const allCity = await cityModel.find({});
    res.status(200).json(allCity);
  } catch (error) {
    res.status(400).json(error);
  }
};

const  getCity = async (req,res)=>{
  try {
    const id  = req.params.id
    const city = await cityModel.findOne({_id:id})
    res.status(200).json(city);
  } catch (error) {
    res.status(400).json(error);
  }
}


module.exports = { addCity, getAllCity, getCity };
