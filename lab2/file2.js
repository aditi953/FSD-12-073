
import{ readFile , appendFile , writeFile} from"fs/promises";

const readData = async( file2) =>{
    try{
    const content = await readFile ( file2 , "utf-8");
    return content;
    }catch(e){
        console.log(e.message);
        console.log("file not found");
       }
       finally{
        console.log("read data finished ");
       }   
};
const writeData = async(file2,data)=>
{
   try {
     const content = await writeFile(asyncfile2 , content)
   } catch (error) {
    console.log(error.message);
   }
    
};
const appendData = async(file2,data )=>
{
    try {
        const content = await appendFile(asyncfile2 , content);
    } catch (error) {
        console.log(error.message);
        
    }
};
const deleteFile = async (file2)=>{
    try{
        await unlink(file2);
    }catch(error){
        console.log("file not found");
      
    }
};
// if a function  uses await keyword then the function must be async 
const data = await readData("file1.js");
console.log(data);