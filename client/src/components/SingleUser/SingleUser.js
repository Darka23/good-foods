import {BsTrash} from 'react-icons/bs'
import { DeleteUser } from '../../services/UserServices';
import styles from '../AllUsers/admin.module.css'

const SingleUser = (props) => {

    let data = props.props;
    
    function deleteUserHandler(){
        DeleteUser(data.id)
            .then(()=>props.deleteHandler(data.id))
    }

    return (
        <tr>
            <td>
                <img
                    src={data.photoUrl}
                    alt="profPic"
                    className={styles["image"]}
                />
            </td>
            <td>{data.name}</td>
            <td>{data.email}</td>
            <td>{data.uid}</td>
            
            <td className={styles["actions"]}>
                <button onClick={deleteUserHandler}><BsTrash className={styles["deleteIcon"]} /></button>
            </td>
        </tr>
    );
}

export default SingleUser;