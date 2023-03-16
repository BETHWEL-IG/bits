const pool= require('../models/database')

const postContact=(req,res)=>{
    const { name, email, phone, subject, message } = req.body;

  // Check if all required fields are present
    if (!name || !email || !subject || !message) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

  // Build SQL query to insert data
    const sql = `
        INSERT INTO contact_form (name, email, phone, subject, message, file_name)
        VALUES (?, ?, ?, ?, ?, ?)
    `;

  // Execute SQL query with input data
    const values = [name, email, phone, subject, message, req.file ? req.file.filename : null];
    pool.query(sql, values, (error, results, fields) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ error: 'Failed to insert data' });
        }

    return res.status(200).json({ message: 'Data inserted successfully' });
  });
}

module.exports={
    postContact,
    
}