const express = require('express');
const router = express.Router();
const Wedding = require('../models/weddingCard');

//Get: by details
router.get('/', async (req,res)=>{
    try{
        const { id, groomName, groomFather, groomFamily, brideName, brideFather, brideFamily, day, month, year, location } = req.query;

        const query ={};
        if(id) query['id'] = id
        if(groomName) query['groomName'] = groomName;
        if(groomFather) query['groomFather'] = groomFather;
        if(groomFamily) query['groomFamily'] = groomFamily;
        if(brideName) query['brideName'] = brideName;
        if(brideFather) query['brideFather'] = brideFather;
        if(brideFamily) query['brideFamily'] = brideFamily;
        if(day) query['day'] = day;
        if(month) query['month'] = month;
        if(year) query['year'] = year;
        if(location) query['location'] = brideFamily;

        const weddings = await Wedding.find(query);
        if(weddings.length == 0) return res.status(404).json({message: 'No weddings found'});
        res.json(weddings);
    }catch(error){
        res.status(500).json({message: error.message});
    }
});

//POST: add a new wedding
router.post('/',async (req, res) =>{
    const wedding = new Wedding(req.body);

    try{
        const newWedding = await wedding.save();
        res.status(201).json(newWedding);
    }catch(error){
        res.status(400).json({message: error.message})
    }
});


//PUT: update a wedding by id
router.put('/:id', async (req,res)=>{
    try{
        const updateWedding = await Wedding.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if(!updateWedding) return res.status(404).json({message: 'Wedding not found'});
        res.json(updateWedding);
    }catch(error){
        res.status(400).json({message:error.message});
    }
})

// DELETE: delete a wedding by id
router.delete('/:id', async (req, res) => {
    try {
        const deleteWedding = await Wedding.findByIdAndDelete(req.params.id);
        if (!deleteWedding) return res.status(404).json({ message: 'Wedding not found' });
        res.json({ message: 'Wedding deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


module.exports = router;