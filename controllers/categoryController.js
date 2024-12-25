import Category from "../models/category.js";

export const ShowCategory = async (req, res) => {
  try {
    const response = await Category.findAll();
    console.log(response);
    res.status(200).json(response);
  } catch (error) {
    res.json({ msg: Error });
  }
};

export const ShowCategoryById = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await Category.findOne({ where: { category_id: id } });
    console.log(response);
    res.status(200).json(response);
  } catch (error) {
    res.json({ msg: Error });
  }
};

export const AddCategory = async (req, res) => {
  const { categoryName } = req.body;
  try {
    const request = {
      category_name: categoryName,
    };
    await Category.create(request);
    res.status(200).json({ msg: "Data berhasil dikirim" });
  } catch (error) {
    res.json({ msg: Error });
  }
};

export const UpdateCategory = async (req, res) => {
  const { id } = req.params;
  const { categoryName } = req.body;
  try {
    const request = {
      category_name: categoryName,
    };
    const isExist = await Category.findOne({ where: { category_id: id } });
    if (isExist) {
      await Category.update(request, {
        where: { category_id: id },
      });
      res.status(200).json({ msg: "Data berhasil diupdate" });
    } else {
      res.json({ msg: "data tidak tersedia" });
    }
  } catch (error) {
    res.json({ msg: Error });
  }
};

export const DeleteCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const isExist = await Category.findOne({ where: { category_id: id } });
    if (isExist) {
      await Category.destroy({
        where: { category_id: id },
      });
      res.status(200).json({ msg: "Data berhasil dikirim" });
    } else {
      res.json({ msg: "data tidak tersedia" });
    }
  } catch (error) {
    res.json({ msg: Error });
  }
};
