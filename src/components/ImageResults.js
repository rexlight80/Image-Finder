import React, { useState } from 'react'
import  {GridList,GridListTile ,IconButton,Dialog,Button,GridListTileBar} from "@material-ui/core"
import {ZoomIn} from "@material-ui/icons"
const ImageResults = ({images}) => {
    const[open,setOpen]=useState(false)
    const[currentImg,setCurrentImg]=useState("")


const handleOpen=(img)=>{
    setCurrentImg(img);
    setOpen(true);
}
   
    return (
        <div>
        <GridList cols={3}>
        {images && images.map(image=>(
            <GridListTile
               key={image.id} 
            >
            <img src={image.largeImageURL} alt="images" onClick={()=>handleOpen(image.largeImageURL)}/>
            <GridListTileBar 
            title={image.tags}
            key={image.id}
            subtitle={
                <span>
                by <strong>{image.user}</strong>
                </span>
            }/>
            </GridListTile>
        ))}
    </GridList>
    
    <Dialog
    open={open}
    
    >
    <img src={currentImg} style={{width:"350px",height:"350px"}}/>    
    <Button onClick={()=>setOpen(false)}>
        Close
        </Button>
    </Dialog>
    </div>
        )
}

export default ImageResults
