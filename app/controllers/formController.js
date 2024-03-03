const Form = require("../models/Form");

const saveHTML = async (req, res) => {
  const { htmlContent } = req.body;
  try {
    const savedForm = await Form.create({ htmlContent });
    res.status(200).json({ formId: savedForm._id });
  } catch (error) {
    res.status(500).json({ error: "Failed to save form" });
  }
};

const getHTML = async (req, res) => {
  const { id } = req.params;
  try {
    const form = await Form.findById(id);
    if (!form) {
      return res.status(404).json({ error: "Form not found" });
    }
    res.status(200).json({ htmlContent: form.htmlContent });
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve form" });
  }
};

module.exports = {
  saveHTML,
  getHTML,
};
