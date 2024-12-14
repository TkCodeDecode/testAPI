const productModel = require('../model/product');

const getAllProducts = async (req, res) => {
    const { company, name, featured, sort, select } = req.query;
    const queryObject = {};


    if (company) {
        queryObject.company = { $regex: company, $options: 'i' };
        console.log(queryObject);
    }

    if (name) {
        queryObject.name = { $regex: name, $options: 'i' };
        console.log(queryObject);
    }
    if (featured) {
        queryObject.featured = { $regex: featured, $options: 'i' };
        console.log(queryObject);
    }

    let apiData = productModel.find(queryObject);

    if (sort) {
        let sortFix = sort.split(",").join(" ");
        apiData = apiData.sort(sortFix);
    }

    if (select) {
        let selectFix = select.split(",").join(" ");
        apiData = apiData.select(selectFix);
    }

    //Pagination
    // TODO: we need to convert data retrived to number
    let page = Number(req.query.page);
    let limit = Number(req.query.limit);
    //formula to skip previous data based on limit
    let skip = (page - 1) * limit;
    apiData = apiData.skip(skip).limit(limit);

    //req.query is used to find data from db based on given query in the URL. Pass req.query in your find method. note: curly brackets are not required in find method.
    const productData = await apiData;
    res.status(200).json({ productData });
}

const getAllProductsTesting = async (req, res) => {
    const productData = await productModel.find(req.query);
    res.status(200).json({ productData });
}

module.exports = { getAllProducts, getAllProductsTesting };