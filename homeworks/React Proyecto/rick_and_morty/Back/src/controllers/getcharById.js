const URL = 'https://rickandmortyapi.com/api/character/'

const getCharById =async (req,res)=>{
    try{
        const require = req.params;
    
        const character = await fetch(`${URL}${require.id}`)
   
        const {name,species,image,gender,id} = await character.json()
        
        res.status(200).json({id,name,species,gender,image})
    

    }catch (error){error => res.status(500).json(error.message)}
}
module.exports = getCharById;