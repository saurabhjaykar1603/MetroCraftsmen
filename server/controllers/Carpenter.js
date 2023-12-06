import Carpenter from "../models/Carpenter.js";

const postCarpenter = async (req, res) => {
    const { name, contact, description, price, img } = req.body;

    const carpenter = new Carpenter({
        name,
        contact,
        description,
        price,
        img

    });
    try {
        const saveCarpenter = await carpenter.save();
        res.json({
            success: true,
            data: saveCarpenter,
            message: "Create carpenter successfully"
        });
    }
    catch (err) {
        res.json({
            success: false,
            message: err.message
        });
    }
}

const getCarpenter = async (req, res) => {
    try {
        const findCarpenter = await Carpenter.find();
        res.json({
            success: true,
            data:findCarpenter,
            message: "get all carpenters successfully"

        });
    }
    catch (err) {
        res.json({
            success: false,
            message: err.message,
        });
    }
}

export { postCarpenter,getCarpenter };
