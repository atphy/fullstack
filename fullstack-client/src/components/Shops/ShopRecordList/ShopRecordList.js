import React, {useContext, useEffect} from "react";
import { ShopRecord } from './ShopRecord'
import { StackContext } from '../../Customers/Stacks/StackProvider'

export const ShopRecordList = (props) => {

    const {getMyStackItems, stackItems} = useContext(StackContext)

    useEffect(() => {
        if (props.profile_type === "customer") {
            getMyStackItems()
        }
    }, [])

    const isInStack = (recordId) => {
        const stackIds = stackItems.map(s => s.record)
        if (recordId in stackIds) {
            return true
        }
    }

    return (
        <>
            <div className="shop-record-list-container" style={{ margin: "0 0", lineHeight: "1.75rem", }}> 
            {props.currentShop.records.map(record => {
                return <ShopRecord {...props} key={record.id} inStack={isInStack(record.id)} profile_type={props.profile_type} shopRecord={record} />
            })}
            </div>
        </>
    )
};