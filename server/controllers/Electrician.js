import Electrician from "../models/Electrician.js";

const postElectrician = async (req, res) => {
    const { name, contact, description, price, img } = req.body;

    const electrician = new Electrician({
        name,
        contact,
        description,
        price,
        img
    })
    try {
        const saveElectrician = await electrician.save();
        res.json({
            success: true,
            data: saveElectrician,
            message: "Create electrician  successfully"

        });

    }
    catch (err) {
        res.json({
            success: false,
            message: err.message
        });
    }
}

export {postElectrician};