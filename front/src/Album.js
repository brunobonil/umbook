import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Album = () => {
    const { albumID } = useParams();
    const [photosList, setPhotosList] = useState(null);
    const [album, setAlbum] = useState(null);

    function getAlbum(){
        axios.get(`http://localhost:8000/api/album/${albumID}/`,
        {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('access token')}`
            }
        }
            ).then(resp => {
                setAlbum(resp.data.result.album)
                setPhotosList(resp.data.result.photosList)
            });        
    }

    useEffect(() => {
        getAlbum()
    },[]);



    return (
        <div className="content">
            { photosList && album && 
                <div>
                   <h1>album {album.nombre}</h1>  
                   {photosList.map((photo) => 
                    <div key={photo.id} className="album-content">
                        <h2>{photo.caption}</h2> 
                        <p> {photo.imagen}</p>
                        <img src={'../umbook/mysite/fotos/restaurante-azul_nZ7ZNT5.jpg'}/>
                    </div>
                   )}
                    <Link to={`/user/${album.usuario}`}>
                        <button className="album-button">volver a perfil de usuario</button>
                    </Link>
                   
                </div>
            }
           
        </div> 
        
        );
}
 
export default Album;