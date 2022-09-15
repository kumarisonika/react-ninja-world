import { useEffect, useState } from "react"
import { VillageAPI } from "../../apis/villageAPI"
import IVillageData from '../../types/village.type'
import PropTypes from 'prop-types'
import { Link, useParams } from "react-router-dom"

// type TutProps = {
//     id: number
// }

// const TutDetails: React.FC<{id: number}> = ({id}) => {
const VillageDetails: React.FC = () => {

    const [tutData, setTutData] = useState<IVillageData>({id:0,village_name:"",description:"",nation_id:0})
    const {id} = useParams()
    console.log(id)
    // const id = params.match
    useEffect(() => {
        VillageAPI.get(id)
            .then((data: IVillageData) => {
                setTutData(data)
            })
    }, [])
    return (
    <div>
        <Link to=".." >Go back</Link>
        <p>
             {tutData!.village_name} - {tutData!.description}
        </p>
    </div>)

}

export default VillageDetails