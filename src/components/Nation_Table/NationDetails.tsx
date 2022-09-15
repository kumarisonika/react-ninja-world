import { useEffect, useState } from "react"
import INationData from '../../types/nation.type'
import { NationAPI } from "../../apis/nationAPI"
import PropTypes from 'prop-types'
import { Link, useParams } from "react-router-dom"



const NationDeatils: React.FC = () => {
    const [nanData, setnanData] = useState<INationData>({id:0,nation_name:"",element:"",kage_name:"",description:""})
    const {id} = useParams()
    
    useEffect(() => {
        NationAPI.get(id)
            .then((data: INationData) => {
                setnanData(data)
            })
    },[])
    return (
        <div>
            <p>
                {nanData!.nation_name} - {nanData!.description}
            </p>
        </div>

    )
}

export default NationDeatils