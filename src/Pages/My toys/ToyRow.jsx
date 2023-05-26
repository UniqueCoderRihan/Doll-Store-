
import { Link } from 'react-router-dom';

const ToyRow = ({toy,handleRemove}) => {
    const { name, image,category,_id } = toy;
    return (
        <tr>
            <th>
            <th>
                <button onClick={()=>handleRemove(_id)} className="btn btn-outline btn-primary btn-sm">Remove</button>
            </th>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        
                    </div>
                    <div>
                        <div>
                            <p className="font-bold">{name}</p>
                            <p>{category}</p>
                        </div>
                    </div>  
                </div>
            </td>
            <td>
            <th>
                <button className="btn btn-outline btn-primary btn-sm"> <Link to={`/toyupdate/${_id}`}>Update</Link> </button>
            </th>
            </td>
            
            <th>
                <button className="btn btn-outline btn-primary btn-sm"> <Link to={`/toy/${_id}`}>Details</Link> </button>
            </th>
        </tr>

    );
};

export default ToyRow;