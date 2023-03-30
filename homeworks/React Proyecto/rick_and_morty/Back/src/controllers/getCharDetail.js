const URL = 'https://rickandmortyapi.com/api/character/'

const getCharDetail = async(req,res)=>{
    try{
        const require = req.params;
    const character = await fetch(`${URL}${require.id}`)
    const {id, name,species,image,gender,origin} = await character.json()
     res.status(200).json({id,name,species,gender,image,origin})
    }
    catch(error){(error => res.status(500).json(error.message))
    }
   

}
module.exports = getCharDetail;