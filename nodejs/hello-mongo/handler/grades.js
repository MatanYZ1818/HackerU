module.exports=(app,mongoose)=>{

    const schema = new mongoose.Schema({
        Grade:Number,
        title:String,
        date:Date
    });

    const grade = mongoose.model("grades", schema);
    
    app.get('/', (req, res) => {
        res.send("Welcome");
    });
    
    app.get('/grades', async (req, res) => {
        res.send(await grade.find());
    });
    
    app.get('/grades/:_id', async (req, res) => {
        res.send(await grade.findOne({ _id: req.params._id }));
    });
    
    app.post('/grades', async (req, res) => {
        const { Grade, title, date } = req.body;
    
        const grade = new grade({ Grade, title, date });
        const newUser = await grade.save();
        res.send(newUser);
    });
    
    app.put('/grades/:_id', async (req, res) => {
        const { Grade, title, date } = req.body;
        const grade = await grade.findOne({ _id: req.params._id });
    
        if (!grade) {
            return res.status(403).send("משתמש לא קיים!");
        }
    
        grade.Grade  = Grade;
        grade.title   = title;
        grade.date      = date;
    
        await grade.save();
    
        res.send(grade);
    });
    
    app.delete('/grades/:_id', async (req, res) => {
        await grade.deleteOne({_id:req.params._id})
        res.send()
    });
}