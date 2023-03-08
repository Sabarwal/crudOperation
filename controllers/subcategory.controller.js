import SubCategory from "../models/subcategory.model";
import Product from "../models/product.model";

export const addSubCategory = function (req, res) {
  const subCategoryData = {
    name: req.body.name,
    categoryId: req.body.categoryId,
  };
  SubCategory.create(subCategoryData, function (err, data) {
    if (err) {
      return res.status(500).json({
        status: false,
        message: "Something went wrong",
      });
    }
    return res.status(200).json({
      status: true,
      data: data,
      message: "SubCategory added successfully",
    });
  });
};
export const updateSubCategory = function (req, res) {
  // router.route("/update").put(function(req, res) {
  SubCategory.updateOne(
    { _id: req.params.id },
    { name: req.body.name, categoryId: req.body.categoryId },
    function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.json(result);
      }
    }
  );
};

export const subCategoryList = function (req, res) {
  SubCategory.find(function (err, subcategories) {
    res.send(subcategories);
  });
};

export const findsubcBScat = function (req, res) {
  // User.findById({_id:req.params.id})
  SubCategory.find(
    { categoryId: req.params.categoryId },
    function (err, subcategories) {
      res.send(subcategories);
    }
  );
};

export const deleteSubCategoryById = function (req, res) {
  // router.route("/update").put(function(req, res) {

  SubCategory.deleteOne({ _id: req.params.id }, function (err, data) {
    console.log("subcategory deleted");
  });

  Product.deleteMany({ categoryId: req.params.id }, function (err, data) {
    console.log("products deleted");
  });

  res.send("Done Successfuly");
};
